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
  // viewBox 40 x 70: Platte y=0..42 füllt die Versalhöhe zwischen den beiden T, die Klammer (y=34..66) hängt darunter,
  // unter die Grundlinie; das Plattenende steckt im Schlüsselloch.
  return (
    <svg viewBox="0 0 40 70" height={height} width={height * 40 / 70} role="img" aria-label={title} style={{ display: "block", overflow: "visible" }}>
      <title>{title}</title>
      {/* vordere Lippe der Klammer (ohne Tischkante, die wirkte in Schriftgröße wie ein Bindestrich) */}
      <rect x="9" y="34" width="22" height="32" rx="3" fill={RED} />
      {/* Schlüsselloch: rundes Loch, darüber der Schlitz nach oben (Schlitz wird von der Platte verdeckt) */}
      <circle cx="20" cy="46" r="5" fill="#FFFFFF" />
      {/* Teilerplatte, quer zum Tisch, als Kante im Schlitz */}
      <rect x="17.5" y="0" width="5" height="44" rx="1.2" fill={YELLOW} />
    </svg>
  );
}

// size = Schriftgröße in px. Die gelbe Platte füllt die Versalhöhe (rd. 0,7 em bei Barlow Condensed) zwischen den beiden T,
// die Klammer hängt unter die Grundlinie. Der Einschub ist inline-block, seine Unterkante liegt auf der Grundlinie;
// per translateY wird er so weit nach unten geschoben, dass die Klammer-Oberkante (y=34 von 70) auf der Grundlinie liegt.
export default function Wortmarke({ size = 26, color = C.text }) {
  const capH = size * 0.7;
  const iconH = Math.round(capH * 70 / 34);
  const shift = Math.round(iconH * 36 / 70);
  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: size, color, letterSpacing: "0.05em", lineHeight: 1 }}>
      <span>Pult</span>
      <span aria-hidden="true" style={{ display: "inline-block", margin: `0 ${Math.round(size * 0.05)}px 0 ${Math.round(size * 0.03)}px`, transform: `translateY(${shift}px)` }}>
        <Querschnitt height={iconH} />
      </span>
      <span>teiler</span>
    </span>
  );
}
