"use client";
import { useState, useRef } from "react";
import { C } from "@/lib/colors";
import { GALLERY_EN as GALLERY } from "@/lib/en";
import { Reveal, Heading, useDialog } from "@/components/ui";
import Img from "@/components/Img";

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null);
  return (
    <div lang="en" style={{ paddingTop: 72 }}>
      <section style={{ padding: "80px 32px 96px", background: C.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Heading as="h1" overline="References" title="The Pultteiler in use" sub="From primary school to university: impressions from everyday school life." align="center"/>
          <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))", gap: 2 }}>
            {GALLERY.map((r, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div role="button" tabIndex={0} aria-label={`${r.label}, enlarge image`} onClick={() => setLightbox(r)} onKeyDown={e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLightbox(r); } }} style={{ background: C.bgCard, border: `1px solid ${C.border}`, aspectRatio: "16/10", position: "relative", overflow: "hidden", cursor: "pointer", transition: "border-color 0.3s" }} onMouseEnter={e => e.currentTarget.style.borderColor = C.accent} onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
                  <Img sizes="(max-width: 768px) 100vw, 33vw" src={r.src} alt={r.alt || r.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 20px", background: C.bgCard, borderTop: `1px solid ${C.border}` }}>
                    <div style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 13, fontWeight: 600, color: C.accentText, letterSpacing: "0.04em" }}>{r.label}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)}/>}
    </div>
  );
}

function Lightbox({ item, onClose }) {
  const ref = useRef(null);
  useDialog(ref, onClose);
  return (
    <div ref={ref} role="dialog" aria-modal="true" aria-label={item.label} onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 24 }}>
      <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: 24, right: 32, background: "none", border: "none", color: "#fff", fontSize: 32, cursor: "pointer", zIndex: 301 }}>✕</button>
      <Img sizes="90vw" src={item.src} alt={item.alt || item.label} style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain", display: "block" }}/>
      <div style={{ position: "absolute", bottom: 32, left: 0, right: 0, textAlign: "center" }}>
        <span style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, fontWeight: 600, color: "#fff", letterSpacing: "0.06em", background: "rgba(0,0,0,0.5)", padding: "8px 20px" }}>{item.label}</span>
      </div>
    </div>
  );
}
