"use strict";

/* Footer year */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* =====================================================
   Mobile nav toggle
   ===================================================== */

const toggleBtn = document.querySelector(".top__toggle");
const navEl = document.querySelector(".top__nav");

if (toggleBtn && navEl) {
  const setMenu = (open) => {
    toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
    navEl.setAttribute("data-open", open ? "true" : "false");
  };

  // Explicit initial state, in case the HTML attribute drifts
  setMenu(false);

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  // Close on menu link click
  navEl.querySelectorAll("ul a").forEach((a) => {
    a.addEventListener("click", () => setMenu(false));
  });

  // Close when clicking/tapping outside the open menu
  document.addEventListener("click", (e) => {
    if (navEl.getAttribute("data-open") !== "true") return;
    if (navEl.contains(e.target) || toggleBtn.contains(e.target)) return;
    setMenu(false);
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navEl.getAttribute("data-open") === "true") {
      setMenu(false);
      toggleBtn.focus();
    }
  });
}

/* =====================================================
   Sticky bar hairline border once scrolled
   ===================================================== */

// Note: variable deliberately named topBar — `top` collides with
// window.top in some browsers and can break top-level const declarations
const topBar = document.querySelector(".top");
const onScroll = () => {
  if (!topBar) return;
  if (window.scrollY > 24) topBar.classList.add("is-stuck");
  else topBar.classList.remove("is-stuck");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* =====================================================
   Active section highlighting (strata + top-nav)
   ===================================================== */

const sections = document.querySelectorAll("main section[id]");
const strataLinks = document.querySelectorAll(".strata__layer");
const navLinks = document.querySelectorAll(".top__nav a");

const setActive = (id) => {
  strataLinks.forEach((el) =>
    el.classList.toggle("is-active", el.dataset.section === id)
  );
  navLinks.forEach((el) => {
    const href = el.getAttribute("href") || "";
    el.classList.toggle("is-active", href === `#${id}`);
  });
};

if ("IntersectionObserver" in window && sections.length) {
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible && visible.target.id) setActive(visible.target.id);
    },
    {
      rootMargin: "-30% 0px -50% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  );
  sections.forEach((s) => io.observe(s));
}
