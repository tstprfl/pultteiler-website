// Wortmarke „Pult teiler“: zwischen den beiden T steht statt eines Bindestrichs der Querschnitt aus dem 3D-Modell
// (rote Klammer an der Tischkante, gelbe Teilerplatte senkrecht eingesteckt). Seitenansicht entlang der Tischkante,
// Maße wie in components/AufbauAnimation.jsx (1 cm = 2 Einheiten): Lippe 6,5 über der Auflage, Auflage 7,5 tief,
// gerader Teil 1,8, Bogen R 2, Federzunge unter der Platte; Teilerplatte 28 hoch, 0,4 stark (hier breiter gezeichnet).
import { C } from "@/lib/colors";

const RED = "#D81F3C";
const YELLOW = "#F0C645";

// Proportionen für die Wortmarke bewusst vergröbert: Platte dicker und kürzer als in Wirklichkeit, Klammer größer,
// sonst wäre das Profil in Schriftgröße nicht mehr zu erkennen.
export function Querschnitt({ height = 26, title = "Pultteiler: Teilerplatte in der Klammer, Ansicht von vorne" }) {
  // Ansicht von vorne, Blick auf die Tischkante: die vordere Lippe der Klammer als rotes Rechteck mit Schlüsselloch,
  // die Teilerplatte steht quer zum Tisch und ist deshalb nur als schmale gelbe Kante zu sehen, die im Schlitz steckt.
  // viewBox 40 x 52: Platte y=1..30 (steht auf der Auflage), Tischkante y=30..37, Lippe y=13..41
  return (
    <svg viewBox="0 0 40 52" height={height} width={height * 40 / 52} role="img" aria-label={title} style={{ display: "block", overflow: "visible" }}>
      <title>{title}</title>
      {/* vordere Lippe der Klammer (ohne Tischkante, die wirkte in Schriftgröße wie ein Bindestrich) */}
      <rect x="9" y="12" width="22" height="30" rx="3" fill={RED} />
      {/* Schlüsselloch: rundes Loch, darüber der Schlitz nach oben (Schlitz wird von der Platte verdeckt) */}
      <circle cx="20" cy="27" r="5" fill="#FFFFFF" />
      {/* Teilerplatte, quer zum Tisch, als Kante im Schlitz, steht auf der Auflage (y=30) */}
      <rect x="18" y="1" width="4" height="30" rx="1" fill={YELLOW} />
    </svg>
  );
}

// size = Schriftgröße in px. Das Symbol ist so hoch wie die Versalhöhe, die Klammer hängt leicht unter die Grundlinie.
export default function Wortmarke({ size = 26, color = C.text }) {
  const iconH = Math.round(size * 1.15);
  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: size, color, letterSpacing: "0.05em", lineHeight: 1 }}>
      <span>Pult</span>
      <span aria-hidden="true" style={{ display: "inline-block", margin: `0 ${Math.round(size * 0.06)}px 0 ${Math.round(size * 0.04)}px`, transform: `translateY(${Math.round(size * 0.24)}px)` }}>
        <Querschnitt height={iconH} />
      </span>
      <span>teiler</span>
    </span>
  );
}
