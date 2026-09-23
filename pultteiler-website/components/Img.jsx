import Image from "next/image";

// Originalmaße der Bilder in public/images — nötig, damit next/image verkleinerte
// WebP/AVIF-Varianten ausliefern kann. Neues Bild? Hier mit [Breite, Höhe] eintragen.
const SIZES = {
  "/images/Klammer_1.png": [378, 515],
  "/images/Klammer_2.png": [430, 577],
  "/images/Koffer_1.png": [1200, 1600],
  "/images/klassenzimmer.png": [597, 340],
  "/images/kurhaus-blick-buehne.jpg": [1200, 1600],
  "/images/kurhaus-klammer-detail.jpg": [1600, 1200],
  "/images/kurhaus-saal-totale.jpg": [1600, 1200],
  "/images/kurhaus-tischreihe.jpg": [1200, 1600],
  "/images/koffer-gelb.jpg": [480, 270],
  "/images/koffer-grau.jpg": [480, 270],
  "/images/meduni-innsbruck_1.jpeg": [1536, 2048],
  "/images/meduni-innsbruck_2.jpeg": [2048, 1536],
  "/images/nahaufnahme.jpeg": [960, 1280],
  "/images/pultteiler-2.jpg": [1280, 964],
  "/images/pultteiler-einsatz.jpg": [1280, 964],
  "/images/pultteiler-uni.png": [1008, 678],
  "/images/pultteiler_gelb.png": [960, 640],
  "/images/pultteiler_grau.png": [960, 640],
};

// Ersatz für <img>: gleiche Props (src, alt, style, loading …), optimiert über next/image.
// sizes = angezeigte Breite, damit der Browser die passende Variante lädt.
export default function Img({ src, alt = "", sizes = "(max-width: 768px) 100vw, 50vw", ...rest }) {
  const dim = SIZES[src];
  if (!dim) return <img src={src} alt={alt} {...rest}/>;
  return <Image src={src} alt={alt} width={dim[0]} height={dim[1]} sizes={sizes} {...rest}/>;
}
