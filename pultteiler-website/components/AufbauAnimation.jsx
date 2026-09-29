"use client";
/* Aufbau-Animation für die Anleitungsseite: Klammer fährt seitlich auf die Tischkante, Teilerplatte rastet von oben ein,
   kurze Pause, dann fliegt alles wieder weg. Three.js, läuft nur im Browser (in den Seiten per next/dynamic ohne SSR laden).
   Maße in cm; das 3D-Modell mit Maßblatt liegt außerhalb des Repos (Desktop\Pultteiler_3D-Modell). */
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { C } from "@/lib/colors";

/* ---------- Maße (cm) ---------- */
const TABLE = { w: 130, t: 2.5, d: 65 };                                    // Schultisch: Breite, Plattenstärke, Tiefe
const PLATE = { w: 40, h: 28, t: 0.4, r: 1.2, slotFromEnd: 4.0, slotW: 0.9, slotH: 3.0 }; // Teilerplatte mit Schlitz
const CLAMP = { w: 4.0, top: 7.5, rise: 6.5, holeR: 0.75, holeAbove: 1.5, face: 1.8, bendR: 2.0, arcDeg: 105, s: 0.3, gap: 0.5, x: 14 }; // Klammer
const SPEED = 1.5;                                                          // Zeitdehnung: 1.5 = um die Hälfte langsamer
const COL = { red: 0xd81f3c, redDark: 0x8e0f24, yellow: 0xffd400, steel: 0x3a4448, floor: 0xd5e2e2, bg: 0xeff6f6 };

/* ---------- Zeitachse (Sekunden, vor Zeitdehnung) ---------- */
const T = {
  clampIn: [0.5, 2.15],       // Klammer fährt in einem Zug ins Bild und auf die Kante
  plateIn: [2.7, 3.7],        // Platte senkrecht von oben, rastet ein
  done: 3.9,
  plateOut: [5.4, 6.6],       // Platte hebt ab
  clampOut: [6.8, 8.4],       // Klammer wird abgezogen und fährt aus dem Bild
  total: 9.2,
};

const clamp01 = v => Math.min(1, Math.max(0, v));
const seg = (t, [a, b]) => clamp01((t - a) / (b - a));
const easeInOut = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeIn = t => t * t * t;
const decay = (t, f = 3, d = 5) => Math.exp(-d * t) * Math.sin(t * f * Math.PI * 2);

/* Welche Schritt-Kacheln zur Zeit t aktiv sind: Bit 1 = Klammer, Bit 2 = Platte, Bit 4 = fertig */
function phaseMask(t) {
  let m = 0;
  if (t >= T.clampIn[0] && t < T.clampOut[1]) m |= 1;
  if (t >= T.plateIn[0] - 0.05 && t < T.plateOut[1]) m |= 2;
  if (t >= T.done && t < T.plateOut[0]) m |= 4;
  return m;
}

/* ---------- Szene ---------- */
function createScene(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.domElement.style.cssText = "display:block;position:absolute;inset:0;width:100%;height:100%;";
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene(); scene.background = new THREE.Color(COL.bg);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;
  scene.environment = envTex;
  const camera = new THREE.PerspectiveCamera(34, 16 / 10, 1, 600);
  camera.position.set(70, 26, 88); camera.lookAt(8, 12, 24);

  const sun = new THREE.DirectionalLight(0xfff6e8, 2.2);
  sun.position.set(70, 95, 35); sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048); sun.shadow.radius = 4;
  Object.assign(sun.shadow.camera, { left: -80, right: 80, top: 80, bottom: -80, near: 20, far: 260 });
  sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.02; scene.add(sun);
  scene.add(new THREE.HemisphereLight(0xffffff, 0xc9d8d8, 0.35));

  const geos = [], mats = [], texs = [];
  const track = g => { geos.push(g); return g; };

  /* Quader mit abgerundeten Kanten (Extrusion mit Fase); Endmaß = w x h x d */
  function roundedBox(w, h, d, b = 0.1, r = 0) {
    b = Math.min(b, w / 3, h / 3, d / 3);
    const sw = w - 2 * b, sh = h - 2 * b, rr = Math.max(0, r - b);
    const sp = new THREE.Shape();
    sp.moveTo(-sw / 2 + rr, -sh / 2); sp.lineTo(sw / 2 - rr, -sh / 2); sp.quadraticCurveTo(sw / 2, -sh / 2, sw / 2, -sh / 2 + rr);
    sp.lineTo(sw / 2, sh / 2 - rr); sp.quadraticCurveTo(sw / 2, sh / 2, sw / 2 - rr, sh / 2); sp.lineTo(-sw / 2 + rr, sh / 2);
    sp.quadraticCurveTo(-sw / 2, sh / 2, -sw / 2, sh / 2 - rr); sp.lineTo(-sw / 2, -sh / 2 + rr); sp.quadraticCurveTo(-sw / 2, -sh / 2, -sw / 2 + rr, -sh / 2);
    const g = new THREE.ExtrudeGeometry(sp, { depth: d - 2 * b, bevelEnabled: true, bevelSize: b, bevelThickness: b, bevelSegments: 4, curveSegments: 12 });
    g.translate(0, 0, -(d - 2 * b) / 2); g.computeVertexNormals();
    return track(g);
  }
  const mesh = (geo, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.castShadow = o.receiveShadow = true; return o; };
  const rbox = (w, h, d, m, x, y, z, b = 0.1) => mesh(roundedBox(w, h, d, b), m, x, y, z);

  /* Holzmaserung (prozedural) */
  function woodTexture() {
    const S = 768, c = document.createElement("canvas"); c.width = c.height = S;
    const g = c.getContext("2d"), img = g.createImageData(S, S), d = img.data;
    const A = [214, 168, 112], B = [190, 142, 88];
    for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
      const warp = Math.sin(y * 0.008) * 30 + Math.sin(y * 0.028 + x * 0.0027) * 9;
      let v = Math.sin((x + warp) * 0.12) * 0.5 + 0.5;
      v = Math.pow(v, 2.6) * 0.55 + (Math.sin(x * 0.37 + y * 0.11) * 0.5 + 0.5) * 0.1 + Math.random() * 0.05;
      const i = (y * S + x) * 4;
      d[i] = A[0] + (B[0] - A[0]) * v; d[i + 1] = A[1] + (B[1] - A[1]) * v; d[i + 2] = A[2] + (B[2] - A[2]) * v; d[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace; tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    texs.push(tex);
    return tex;
  }
  const wood = woodTexture(); wood.repeat.set(1 / 95, 1 / 95);
  const woodMat = new THREE.MeshPhysicalMaterial({ map: wood, roughness: 0.55, metalness: 0, clearcoat: 0.35, clearcoatRoughness: 0.4, envMapIntensity: 0.6 });
  const steelMat = new THREE.MeshStandardMaterial({ color: COL.steel, roughness: 0.4, metalness: 0.7, envMapIntensity: 0.8 });
  const footMat = new THREE.MeshStandardMaterial({ color: 0x1e2628, roughness: 0.9 });
  const redMat = new THREE.MeshPhysicalMaterial({ color: COL.red, roughness: 0.38, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.25, envMapIntensity: 0.7 });
  const redDarkMat = new THREE.MeshStandardMaterial({ color: COL.redDark, roughness: 0.6 });
  const yellowMat = new THREE.MeshPhysicalMaterial({ color: COL.yellow, roughness: 0.45, metalness: 0, clearcoat: 0.5, clearcoatRoughness: 0.3, envMapIntensity: 0.7 });
  const floorMat = new THREE.MeshStandardMaterial({ color: COL.floor, roughness: 0.95, envMapIntensity: 0.3 });
  mats.push(woodMat, steelMat, footMat, redMat, redDarkMat, yellowMat, floorMat);

  /* Schultisch: Platte mit gerundeten Kanten auf Stahlrohrgestell; Oberkante y = 0, Vorderkante z = TABLE.d/2 */
  const table = new THREE.Group();
  const top = mesh(roundedBox(TABLE.w, TABLE.d, TABLE.t, 0.35, 1.5), woodMat, 0, -TABLE.t / 2, 0);
  top.rotation.x = -Math.PI / 2; table.add(top);
  const legH = 72, inset = 9, tube = 1.5;
  const legGeo = track(new THREE.CylinderGeometry(tube, tube, legH, 32));
  const footGeo = track(new THREE.CylinderGeometry(tube * 1.25, tube * 1.25, 1.2, 24));
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const lx = sx * (TABLE.w / 2 - inset), lz = sz * (TABLE.d / 2 - inset);
    table.add(mesh(legGeo, steelMat, lx, -TABLE.t - legH / 2, lz));
    table.add(mesh(footGeo, footMat, lx, -TABLE.t - legH + 0.6, lz));
  }
  const barLong = track(new THREE.CylinderGeometry(tube * 0.8, tube * 0.8, TABLE.w - 2 * inset, 24));
  const barShort = track(new THREE.CylinderGeometry(tube * 0.8, tube * 0.8, TABLE.d - 2 * inset, 24));
  for (const sz of [-1, 1]) { const bar = mesh(barLong, steelMat, 0, -TABLE.t - tube, sz * (TABLE.d / 2 - inset)); bar.rotation.z = Math.PI / 2; table.add(bar); }
  for (const sx of [-1, 1]) { const bar = mesh(barShort, steelMat, sx * (TABLE.w / 2 - inset), -TABLE.t - tube, 0); bar.rotation.x = Math.PI / 2; table.add(bar); }
  const floor = new THREE.Mesh(track(new THREE.PlaneGeometry(800, 800)), floorMat);
  floor.rotation.x = -Math.PI / 2; floor.position.y = -TABLE.t - legH; floor.receiveShadow = true;
  scene.add(table, floor);

  /* Klammer: Auflage mit Langloch, vorne hohe Lippe mit Schlüsselloch, hinten kurze Lippe, unten Rundbogen und Federzunge in S-Form */
  const EDGE = TABLE.d / 2;
  const clamp = new THREE.Group();
  const sb = 0.08;
  clamp.add(rbox(CLAMP.w, CLAMP.s, CLAMP.top, redMat, 0, CLAMP.s / 2, -CLAMP.top / 2, sb));
  {
    const o = new THREE.Mesh(track(new THREE.CylinderGeometry(0.55, 0.55, CLAMP.s + 0.02, 24)), redDarkMat);
    o.scale.x = 1.6; o.position.set(0, CLAMP.s / 2, -CLAMP.top * 0.5); clamp.add(o);
  }
  const lipZ = -CLAMP.top + CLAMP.s / 2, half = (CLAMP.w - CLAMP.gap) / 2;
  {
    const W = CLAMP.w, H = CLAMP.rise + CLAMP.s, r = CLAMP.holeR + sb, g = CLAMP.gap / 2 + sb;
    const yc = CLAMP.s + CLAMP.holeAbove + CLAMP.holeR;
    const a0 = Math.asin(g / r);
    const k = new THREE.Shape();
    k.moveTo(-W / 2 + sb, sb); k.lineTo(W / 2 - sb, sb); k.lineTo(W / 2 - sb, H - sb); k.lineTo(g, H - sb);
    k.lineTo(g, yc + Math.cos(a0) * r);
    k.absarc(0, yc, r, Math.PI / 2 - a0, Math.PI / 2 + a0, true);
    k.lineTo(-g, H - sb); k.lineTo(-W / 2 + sb, H - sb); k.closePath();
    const geo = track(new THREE.ExtrudeGeometry(k, { depth: CLAMP.s - 2 * sb, bevelEnabled: true, bevelSize: sb, bevelThickness: sb, bevelSegments: 3, curveSegments: 24 }));
    geo.translate(0, 0, -(CLAMP.s - 2 * sb) / 2);
    clamp.add(mesh(geo, redMat, 0, 0, CLAMP.s / 2));
  }
  {
    const hgt = CLAMP.rise / 3;
    clamp.add(rbox(half, hgt + 0.02, CLAMP.s, redMat, -(CLAMP.gap / 2 + half / 2), CLAMP.s + hgt / 2, lipZ, sb));
    clamp.add(rbox(half, hgt + 0.02, CLAMP.s, redMat, +(CLAMP.gap / 2 + half / 2), CLAMP.s + hgt / 2, lipZ, sb));
  }
  const tongue = new THREE.Group(); tongue.position.set(0, 0, CLAMP.s / 2);
  {
    const R = CLAMP.bendR, F = CLAMP.face, pts = [];
    const ARC = CLAMP.arcDeg / 180 * Math.PI;
    const L = CLAMP.top - (R - R * Math.cos(ARC));
    pts.push(new THREE.Vector2(0, 0.25), new THREE.Vector2(0, -F * 0.5));
    for (let i = 0; i <= 24; i++) { const a = -i / 24 * ARC; pts.push(new THREE.Vector2(-R + R * Math.cos(a), -F + R * Math.sin(a))); }
    const e = pts[pts.length - 1];
    const wave = new THREE.CatmullRomCurve3([
      new THREE.Vector3(e.x, e.y, 0),
      new THREE.Vector3(e.x - 0.30 * L, e.y + 0.05 * L, 0),
      new THREE.Vector3(e.x - 0.55 * L, e.y + 0.16 * L, 0),
      new THREE.Vector3(e.x - 0.80 * L, e.y + 0.31 * L, 0),
      new THREE.Vector3(e.x - 1.00 * L, e.y + 0.24 * L, 0),
    ], false, "catmullrom", 0.5);
    wave.getPoints(40).slice(1).forEach(q => pts.push(new THREE.Vector2(q.x, q.y)));
    const hs = CLAMP.s / 2 - sb;
    const off = (i, sgn) => { const p0 = pts[Math.max(0, i - 1)], p1 = pts[Math.min(pts.length - 1, i + 1)]; const nx = -(p1.y - p0.y), ny = p1.x - p0.x, n = Math.hypot(nx, ny); return new THREE.Vector2(pts[i].x + sgn * hs * nx / n, pts[i].y + sgn * hs * ny / n); };
    const upper = pts.map((_, i) => off(i, 1)), lower = pts.map((_, i) => off(i, -1)).reverse();
    const strip = new THREE.Shape(); strip.moveTo(upper[0].x, upper[0].y); [...upper.slice(1), ...lower].forEach(q => strip.lineTo(q.x, q.y)); strip.closePath();
    const g = track(new THREE.ExtrudeGeometry(strip, { depth: CLAMP.w - 2 * sb, bevelEnabled: true, bevelSize: sb, bevelThickness: sb, bevelSegments: 3 }));
    const m = mesh(g, redMat); m.rotation.y = -Math.PI / 2; m.position.x = CLAMP.w / 2 - sb;
    tongue.add(m);
  }
  clamp.add(tongue);
  scene.add(clamp);

  /* Teilerplatte: steht quer zum Tisch, Schlitz nahe dem vorderen Ende rastet über der vorderen Lippe ein */
  const plate = new THREE.Group();
  {
    const { w, h, r } = PLATE, b = 0.08, sw = w - 2 * b, sh = h - 2 * b, rr = r - b;
    const sx = w / 2 - PLATE.slotFromEnd, g2 = PLATE.slotW / 2;
    const sp = new THREE.Shape();
    sp.moveTo(-sw / 2 + rr, b); sp.lineTo(sx - g2, b); sp.lineTo(sx - g2, b + PLATE.slotH); sp.lineTo(sx + g2, b + PLATE.slotH); sp.lineTo(sx + g2, b);
    sp.lineTo(sw / 2 - rr, b); sp.quadraticCurveTo(sw / 2, b, sw / 2, b + rr);
    sp.lineTo(sw / 2, b + sh - rr); sp.quadraticCurveTo(sw / 2, b + sh, sw / 2 - rr, b + sh); sp.lineTo(-sw / 2 + rr, b + sh);
    sp.quadraticCurveTo(-sw / 2, b + sh, -sw / 2, b + sh - rr); sp.lineTo(-sw / 2, b + rr); sp.quadraticCurveTo(-sw / 2, b, -sw / 2 + rr, b);
    const g = track(new THREE.ExtrudeGeometry(sp, { depth: PLATE.t - 2 * b, bevelEnabled: true, bevelSize: b, bevelThickness: b, bevelSegments: 3, curveSegments: 16 }));
    g.translate(-sx, 0, -(PLATE.t - 2 * b) / 2);
    const m = mesh(g, yellowMat); m.rotation.y = -Math.PI / 2;
    plate.add(m);
  }
  const plateHome = new THREE.Vector3(CLAMP.x, CLAMP.s, EDGE + CLAMP.s / 2);
  plate.position.copy(plateHome);
  scene.add(plate);

  /* Bewegung */
  const clampHome = new THREE.Vector3(CLAMP.x, 0, EDGE);
  const clampStart = new THREE.Vector3(CLAMP.x, 0, EDGE + 48);
  const plateStart = plateHome.clone().add(new THREE.Vector3(0, 34, 0));
  const plateAway = plateHome.clone().add(new THREE.Vector3(0, 70, 0));
  const TONGUE_CLAMPED = -0.09;
  const tongueByPos = z => TONGUE_CLAMPED * clamp01((EDGE + CLAMP.top - z) / (0.8 * CLAMP.top));

  function pose(t) {
    let cp;
    if (t < T.clampIn[0]) cp = clampStart.clone();
    else if (t < T.clampIn[1]) cp = clampStart.clone().lerp(clampHome, easeInOut(seg(t, T.clampIn)));
    else if (t < T.clampOut[0]) cp = clampHome.clone();
    else if (t < T.clampOut[1]) cp = clampHome.clone().lerp(clampStart, easeInOut(seg(t, T.clampOut)));
    else cp = clampStart.clone();
    let tongueA = tongueByPos(cp.z);
    if (t >= T.clampIn[1] && t < T.clampOut[0]) tongueA -= 0.05 * decay(seg(t, [T.clampIn[1], T.clampIn[1] + 0.5]), 2, 4);
    clamp.position.copy(cp); tongue.rotation.x = tongueA;
    clamp.visible = t > T.clampIn[0] - 0.05 && t < T.clampOut[1] + 0.05;

    let pp, pRot = 0;
    if (t < T.plateIn[0]) pp = plateStart.clone();
    else if (t < T.plateIn[1]) pp = plateStart.clone().lerp(plateHome, easeInOut(seg(t, T.plateIn)));
    else if (t < T.plateOut[0]) pp = plateHome.clone();
    else if (t < T.plateOut[1]) { const k = easeIn(seg(t, T.plateOut)); pp = plateHome.clone().add(new THREE.Vector3(0, 70 * k, 0)); pRot = -0.12 * k; }
    else pp = plateAway.clone();
    plate.position.copy(pp); plate.rotation.x = pRot;
    plate.visible = t > T.plateIn[0] - 0.05 && t < T.plateOut[1] + 0.05;
  }

  function resize() {
    const r = { width: container.clientWidth, height: container.clientHeight };   // Layoutgroesse, unabhaengig von CSS-Transforms
    if (r.width < 2 || r.height < 2) return;
    renderer.setSize(r.width, r.height, false); camera.aspect = r.width / r.height; camera.updateProjectionMatrix();
  }
  function render() { renderer.render(scene, camera); }
  function dispose() {
    geos.forEach(g => g.dispose()); mats.forEach(m => m.dispose()); texs.forEach(x => x.dispose());
    envTex.dispose(); pmrem.dispose(); renderer.dispose();
    if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
  }
  return { pose, render, resize, dispose };
}

/* ---------- React-Komponente ---------- */
export default function AufbauAnimation({ steps, label }) {
  const cardRef = useRef(null);
  const [mask, setMask] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const container = cardRef.current;
    if (!container) return undefined;
    let sceneObj;
    try { sceneObj = createScene(container); }
    catch (e) { setFailed(true); return undefined; }

    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0, visible = true, t0 = performance.now(), lastT = 0, lastMask = -1;
    const update = t => { const m = phaseMask(t); if (m !== lastMask) { lastMask = m; setMask(m); } };
    const frame = now => {
      if (!visible) { raf = 0; return; }
      lastT = ((now - t0) / 1000 / SPEED) % T.total;
      sceneObj.pose(lastT); sceneObj.render(); update(lastT);
      raf = requestAnimationFrame(frame);
    };

    sceneObj.resize();
    if (reduce) {                                                          // ohne Bewegung: fertiges Bild zeigen
      const t = T.done + 0.5; sceneObj.pose(t); sceneObj.render(); update(t);
    } else {
      raf = requestAnimationFrame(frame);
    }

    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(() => { sceneObj.resize(); if (reduce) sceneObj.render(); }) : null;
    if (ro) ro.observe(container);
    const io = !reduce && typeof IntersectionObserver !== "undefined" ? new IntersectionObserver(([e]) => {   // außerhalb des Bildschirms pausieren, danach an derselben Stelle weiter
      if (e.isIntersecting && !visible) { visible = true; t0 = performance.now() - lastT * 1000 * SPEED; if (!raf) raf = requestAnimationFrame(frame); }
      else if (!e.isIntersecting) { visible = false; }
    }, { threshold: 0.05 }) : null;
    if (io) io.observe(container);

    return () => {
      visible = false; if (raf) cancelAnimationFrame(raf);
      if (ro) ro.disconnect(); if (io) io.disconnect();
      sceneObj.dispose();
    };
  }, []);

  const on = failed ? [true, true, true] : [(mask & 1) > 0, (mask & 2) > 0, (mask & 4) > 0];
  const showCheck = !failed && (mask & 4) > 0;

  return (
    <div>
      {!failed && (
        <div ref={cardRef} role="img" aria-label={label} style={{ position: "relative", aspectRatio: "16 / 10", background: C.bgElevated, border: `1px solid ${C.border}`, overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", top: 20, right: 20, width: 56, height: 56, borderRadius: "50%", background: C.accent, display: "flex", alignItems: "center", justifyContent: "center", opacity: showCheck ? 1 : 0, transform: showCheck ? "scale(1)" : "scale(0.6)", transition: "opacity 0.3s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)", pointerEvents: "none" }}>
            <svg width="28" height="28" viewBox="0 0 28 28"><path d="M6 14l6 6 10 -12" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="square"/></svg>
          </div>
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2, marginTop: 2 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ background: C.bgCard, border: `1px solid ${C.border}`, padding: "28px 28px 30px", opacity: on[i] ? 1 : 0.35, transition: "opacity 0.4s" }}>
            <span style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 36, color: C.accentText, lineHeight: 1 }}>{s.nr}</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', 'Inter Tight', sans-serif", fontWeight: 600, fontSize: 24, color: C.text, margin: "10px 0 12px", letterSpacing: "0.02em", lineHeight: 1.05 }}>{s.title}</h2>
            <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: 14, color: C.textMuted, lineHeight: 1.65, margin: 0 }}>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
