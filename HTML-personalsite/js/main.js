const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('.site-header');
const sections = document.querySelectorAll('.section, .skill-card');
const currentYear = document.getElementById('current-year');

let lastScroll = 0;

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navList.classList.toggle('is-open', !isOpen);
  });

  navList.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('is-open');
    });
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          if (entry.target.classList.contains('skill-card')) {
            const level = Number(entry.target.dataset.skillLevel) / 100;
            entry.target.style.setProperty('--level', level.toString());
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
} else {
  sections.forEach((section) => {
    section.classList.add('is-visible');
    if (section.classList.contains('skill-card')) {
      const level = Number(section.dataset.skillLevel) / 100;
      section.style.setProperty('--level', level.toString());
    }
  });
}

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header?.classList.remove('is-hidden');
    return;
  }

  if (currentScroll > lastScroll && !header?.classList.contains('is-hidden')) {
    header?.classList.add('is-hidden');
  } else if (currentScroll < lastScroll) {
    header?.classList.remove('is-hidden');
  }

  lastScroll = currentScroll;
});

const navLinks = document.querySelectorAll('.nav-list a');

const highlightActiveLink = () => {
  const scrollPosition = window.scrollY;
  navLinks.forEach((link) => {
    const sectionId = link.getAttribute('href');
    if (!sectionId || !sectionId.startsWith('#')) return;
    const section = document.querySelector(sectionId);
    if (!section) return;

    const sectionTop = section.offsetTop - 120;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      link.classList.add('is-active');
    } else {
      link.classList.remove('is-active');
    }
  });
};

window.addEventListener('scroll', highlightActiveLink);
window.addEventListener('load', highlightActiveLink);
