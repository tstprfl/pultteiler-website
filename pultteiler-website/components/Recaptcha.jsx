"use client";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { C } from "@/lib/colors";
import { RECAPTCHA_SITE_KEY } from "@/lib/emailjs";

// Google reCAPTCHA v2 (Kästchen „Ich bin kein Roboter“).
// Das Google-Skript wird erst geladen, wenn diese Komponente angezeigt wird:
// nur im Angebotsformular (nach dem ersten Klick ins Formular) und in der
// Warenkorb-Kontrolle. EmailJS prüft den Token bei den Bestätigungsvorlagen,
// die an die eingegebene Adresse gehen (Template → Settings → reCAPTCHA).
//
// Lädt das Skript nicht (Netzwerk, Filter), gilt das Feld als „nicht bereit“:
// Die Anfrage geht trotzdem an Blaschegg, nur die Eingangsbestätigung entfällt.

// Offizieller Google-Testschlüssel, gilt auf jeder Domain und besteht immer
// (developers.google.com/recaptcha/docs/faq). Nur für lokale Tests.
const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

let scriptPromise = null;
function loadRecaptcha() {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha);
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("reCAPTCHA Zeitüberschreitung")), 10000);
    window.__pultteilerRecaptchaReady = () => { clearTimeout(timer); resolve(window.grecaptcha); };
    const s = document.createElement("script");
    s.src = "https://www.google.com/recaptcha/api.js?onload=__pultteilerRecaptchaReady&render=explicit&hl=de";
    s.async = true;
    s.onerror = () => { clearTimeout(timer); scriptPromise = null; reject(new Error("reCAPTCHA nicht geladen")); };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

const Recaptcha = forwardRef(function Recaptcha(_, ref) {
  const boxRef = useRef(null);
  const widgetId = useRef(null);
  const [status, setStatus] = useState("loading"); // loading | ready | failed

  const siteKey = typeof window !== "undefined" && window.location.hostname === "localhost" ? TEST_SITE_KEY : RECAPTCHA_SITE_KEY;

  useEffect(() => {
    if (!siteKey) { setStatus("failed"); return; }
    let cancelled = false;
    loadRecaptcha()
      .then((grecaptcha) => {
        if (cancelled || !boxRef.current || widgetId.current !== null) return;
        widgetId.current = grecaptcha.render(boxRef.current, {
          sitekey: siteKey,
          // Im schmalen Warenkorb auf dem Handy passt nur die kompakte Variante
          size: boxRef.current.offsetWidth < 304 ? "compact" : "normal",
        });
        setStatus("ready");
      })
      .catch(() => { if (!cancelled) setStatus("failed"); });
    return () => { cancelled = true; };
  }, [siteKey]);

  useImperativeHandle(ref, () => ({
    // ready = Kästchen wird angezeigt; token leer = noch nicht bestätigt oder abgelaufen
    getToken: () => {
      if (status !== "ready" || widgetId.current === null) return { ready: false, token: "" };
      return { ready: true, token: window.grecaptcha.getResponse(widgetId.current) };
    },
    reset: () => { if (widgetId.current !== null) window.grecaptcha.reset(widgetId.current); },
  }), [status]);

  if (status === "failed") return null;
  return (
    <div style={{ marginBottom: 16 }}>
      <div ref={boxRef} style={{ minHeight: 78 }}/>
      <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 11, color: C.textMuted, lineHeight: 1.5, margin: "6px 0 0" }}>
        Spam-Schutz durch Google reCAPTCHA, siehe <a href="/datenschutz" style={{ color: C.accentText }}>Datenschutzerklärung</a>.
      </p>
    </div>
  );
});

export default Recaptcha;
