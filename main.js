const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll("[data-nav]");

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open menu");
  });
});

const sections = ["home", "products", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const setActive = () => {
  const fromTop = window.scrollY + 96;
  let current = "home";

  sections.forEach((section) => {
    if (section.offsetTop <= fromTop) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    link.classList.toggle("is-active", href === `#${current}`);
  });
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();
