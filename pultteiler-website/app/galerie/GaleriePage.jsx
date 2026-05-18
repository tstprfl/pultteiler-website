"use client";
import { useState } from "react";
import { C } from "@/lib/colors";
import { GALLERY } from "@/lib/data";
import { Reveal, Heading } from "@/components/ui";

export default function GaleriePage() {
  const [lightbox, setLightbox] = useState(null);
  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Heading overline="REFERENZEN" title="DER PULTTEILER IM EINSATZ" sub="Von der Volksschule bis zur Universität — Eindrücke aus dem Schulalltag." align="center"/>
          <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))", gap: 2 }}>
            {GALLERY.map((r, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div onClick={() => setLightbox(r)} style={{ background: C.bgCard, border: `1px solid ${C.border}`, aspectRatio: "16/10", position: "relative", overflow: "hidden", cursor: "pointer", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <img src={r.src} alt={r.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 20px", background: C.bgCard, borderTop: `1px solid ${C.border}` }}>
                    <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 600, color: C.accent, letterSpacing: "0.04em" }}>{r.label}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 24 }}>
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 24, right: 32, background: "none", border: "none", color: "#fff", fontSize: 32, cursor: "pointer", zIndex: 301 }}>✕</button>
          <img src={lightbox.src} alt={lightbox.label} style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", display: "block" }}/>
          <div style={{ position: "absolute", bottom: 32, left: 0, right: 0, textAlign: "center" }}>
            <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, fontWeight: 600, color: "#fff", letterSpacing: "0.06em", background: "rgba(0,0,0,0.5)", padding: "8px 20px" }}>{lightbox.label}</span>
          </div>
        </div>
      )}
    </div>
  );
}
