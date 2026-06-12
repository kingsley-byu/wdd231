/* ============================================
   MAIN.MJS — Shared module
   Import this into every page script
   FreshFold Laundry Co.
   ============================================ */

/* ── Hamburger menu toggle ── */
const menuBtn = document.getElementById("menu-btn");
const navBar  = document.getElementById("nav-bar");

menuBtn.addEventListener("click", () => {
  const isOpen = navBar.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

/* Close nav when a link is clicked (mobile UX) */
navBar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", false);
    menuBtn.textContent = "☰";
  });
});

/* ── Mark active nav link ── */
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navBar.querySelectorAll("a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

/* ── Footer: current year ── */
const yearSpan = document.getElementById("currentyear");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

/* ── Footer: last modified ── */
const lastModEl = document.getElementById("lastModified");
if (lastModEl) lastModEl.textContent = `Last updated: ${document.lastModified}`;
