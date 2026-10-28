// Mobile navigation
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');

  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? 'Close ✕' : 'Menu ☰';
});

// Close mobile menu after clicking a navigation link
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'Menu ☰';
  });
});

// Scroll reveal animations
document.documentElement.classList.add('js-reveal');

const revealItems = document.querySelectorAll('.reveal');

if (
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => {
    item.classList.add('is-visible');
  });
}

// Automatically update copyright year
document.querySelector('#year').textContent = new Date().getFullYear();
