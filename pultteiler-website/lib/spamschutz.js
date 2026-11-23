"use client";
// ═══════════════════════════════════════════════════════════════════════════
// SPAMSCHUTZ FÜR DIE FORMULARE (Kontakt, Warenkorb, Online-Widerruf)
//
// Zwei einfache Prüfungen, beide rein im Browser, ohne externen Dienst,
// ohne Cookie und ohne Auswirkung auf die Datenschutzerklärung:
//
//   1. Honeypot: ein für Menschen unsichtbares Textfeld. Bots füllen alle
//      Felder aus, die sie im Formular finden. Steht hier etwas drin, war
//      es kein Mensch.
//   2. Mindest-Ausfüllzeit: wer das Formular wenige Sekunden nach dem
//      Anzeigen abschickt, hat nicht getippt.
//
// Bei erkanntem Spam wird keine Mail gesendet; das Formular zeigt die normale
// Fehlermeldung mit dem Hinweis auf die direkte E-Mail-Adresse. So geht ein
// fälschlich erkannter Mensch nicht verloren, und der Bot verbraucht kein
// EmailJS-Kontingent.
// ═══════════════════════════════════════════════════════════════════════════
import { useRef, useId } from "react";

// Feldname bewusst ohne Bezug zu Browser-Autofill (kein "email", "url", "name")
export const HONEYPOT_FELD = "betreff_zusatz";
export const MINDESTZEIT_MS = 3000;

// Hook für die Formularseite: gibt eine Funktion istSpam(formData) zurück.
export function useSpamschutz() {
  const start = useRef(typeof performance !== "undefined" ? performance.now() : 0);
  return (fd) => {
    const wert = fd.get(HONEYPOT_FELD);
    if (wert && String(wert).trim() !== "") return true;
    if (typeof performance !== "undefined" && performance.now() - start.current < MINDESTZEIT_MS) return true;
    return false;
  };
}

// Unsichtbares Feld. Per CSS aus dem Sichtbereich geschoben (nicht display:none,
// das überspringen viele Bots), für Screenreader und Tab-Reihenfolge ausgeblendet.
export function Honeypot() {
  const id = useId();
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
      <label htmlFor={id}>Bitte leer lassen</label>
      <input id={id} type="text" name={HONEYPOT_FELD} tabIndex={-1} autoComplete="off" defaultValue="" />
    </div>
  );
}
