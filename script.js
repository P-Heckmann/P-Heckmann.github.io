"use strict";

/* Footer year */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* Mobile nav toggle */
const toggle = document.querySelector(".top__toggle");
const navWrap = document.querySelector(".top__nav");

if (toggle && navWrap) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    navWrap.setAttribute("data-open", String(!open));
  });

  // Close on link click
  navWrap.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      navWrap.setAttribute("data-open", "false");
    });
  });
}

/* "Stuck" state on the top bar — adds a hairline border after scroll */
const top = document.querySelector(".top");
const onScroll = () => {
  if (!top) return;
  if (window.scrollY > 24) top.classList.add("is-stuck");
  else top.classList.remove("is-stuck");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* Active section: highlight strata layer + top-nav link */
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
      // Pick the entry with the largest intersection ratio that's intersecting
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
