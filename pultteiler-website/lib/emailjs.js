export const loadEmailJS = () => {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.emailjs) return Promise.resolve();
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    s.onload = () => { window.emailjs.init("xV1NC72BHupwuOiKH"); resolve(); };
    document.head.appendChild(s);
  });
};
