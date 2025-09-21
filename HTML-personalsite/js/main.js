const linkedinExperiences = [
  {
    role: 'Lead Product Engineer',
    company: 'Tech Innovators',
    date: '2021 — Present',
    description:
      'Driving the product engineering vision for a data experience suite while partnering with design and research to deliver measurable outcomes.',
    highlights: [
      'Scaled the design system and component library used across six product teams.',
      'Championed accessibility audits that lifted WCAG compliance scores by 25%.',
    ],
    link: 'https://www.linkedin.com/in/your-linkedin/details/experience/',
  },
  {
    role: 'Senior Software Engineer',
    company: 'Creative Cloud Co.',
    date: '2018 — 2021',
    description:
      'Partnered with cross-functional squads to launch collaborative tooling for design and marketing teams.',
    highlights: [
      'Introduced performance budgets that reduced bundle sizes by 35%.',
      'Mentored five engineers through promotions by pairing and code reviews.',
    ],
    link: 'https://www.linkedin.com/in/your-linkedin/details/experience/',
  },
  {
    role: 'Frontend Developer',
    company: 'StartUp Labs',
    date: '2016 — 2018',
    description:
      'Built interactive product demos and marketing experiences that helped secure Series A funding.',
  },
];

const linkedinRecommendations = [
  {
    name: 'Jordan Blake',
    title: 'Director of Product Design · Tech Innovators',
    relationship: 'Led the cross-functional squad I partnered with',
    quote:
      'Their ability to translate ambiguous user insights into polished, production-ready experiences is second to none. Every sprint felt calmer and more focused thanks to their leadership.',
    link: 'https://www.linkedin.com/in/your-linkedin/details/recommendations/',
  },
  {
    name: 'Priya Desai',
    title: 'Senior Product Manager · Creative Cloud Co.',
    relationship: 'Direct collaborator on the collaboration suite launch',
    quote:
      'They bring a rare blend of strategic thinking and hands-on execution. From roadmap alignment to rollout, they were the glue that held engineering and product together.',
    link: 'https://www.linkedin.com/in/your-linkedin/details/recommendations/',
  },
  {
    name: 'Alex Romero',
    title: 'Founder · StartUp Labs',
    relationship: 'Former manager',
    quote:
      'If you need someone to craft immersive, high-impact interfaces quickly, look no further. Their craftsmanship helped us close pivotal investors.',
    link: 'https://www.linkedin.com/in/your-linkedin/details/recommendations/',
  },
];

const setEmptyState = (container, message, className, elementTag = 'p') => {
  if (!container) return;
  container.innerHTML = '';
  const empty = document.createElement(elementTag);
  empty.className = className;
  empty.textContent = message;
  container.appendChild(empty);
};

const initExperienceTimeline = () => {
  const timeline = document.querySelector('[data-experience-list]');
  if (!timeline) return;

  if (!linkedinExperiences.length) {
    setEmptyState(
      timeline,
      'Add your LinkedIn experience entries in js/main.js to populate this timeline.',
      'timeline__empty'
    );
    return;
  }

  timeline.innerHTML = '';

  linkedinExperiences.forEach((experience) => {
    const item = document.createElement('article');
    item.className = 'timeline__item';

    const marker = document.createElement('div');
    marker.className = 'timeline__marker';
    marker.setAttribute('aria-hidden', 'true');

    const content = document.createElement('div');
    content.className = 'timeline__content';

    const meta = document.createElement('div');
    meta.className = 'timeline__meta';

    if (experience.role) {
      const role = document.createElement('span');
      role.className = 'timeline__role';
      role.textContent = experience.role;
      meta.appendChild(role);
    }

    if (experience.company) {
      const company = document.createElement('span');
      company.className = 'timeline__company';
      company.textContent = experience.company;
      meta.appendChild(company);
    }

    if (experience.date) {
      const date = document.createElement('span');
      date.className = 'timeline__date';
      date.textContent = experience.date;
      meta.appendChild(date);
    }

    content.appendChild(meta);

    if (experience.description) {
      const description = document.createElement('p');
      description.textContent = experience.description;
      content.appendChild(description);
    }

    if (Array.isArray(experience.highlights) && experience.highlights.length) {
      const highlights = document.createElement('ul');
      highlights.className = 'timeline__highlights';
      experience.highlights.forEach((highlight) => {
        const listItem = document.createElement('li');
        listItem.textContent = highlight;
        highlights.appendChild(listItem);
      });
      content.appendChild(highlights);
    }

    if (experience.link) {
      const link = document.createElement('a');
      link.className = 'timeline__link';
      link.href = experience.link;
      link.target = '_blank';
      link.rel = 'noreferrer';
      const labelParts = [experience.role, experience.company].filter(Boolean).join(' at ');
      link.setAttribute('aria-label', `View ${labelParts || 'experience'} on LinkedIn`);
      link.textContent = 'View on LinkedIn';
      content.appendChild(link);
    }

    item.append(marker, content);
    timeline.appendChild(item);
  });
};

const initRecommendationsCarousel = () => {
  const carousel = document.querySelector('[data-recommendations-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('[data-recommendations-track]');
  const dotsWrapper = carousel.querySelector('[data-recommendations-dots]');
  const prevButton = carousel.querySelector('[data-carousel-prev]');
  const nextButton = carousel.querySelector('[data-carousel-next]');
  const viewport = carousel.querySelector('.recommendations__viewport');

  if (!track) return;

  if (!linkedinRecommendations.length) {
    setEmptyState(
      track,
      'Add your LinkedIn recommendations in js/main.js to display them here.',
      'recommendations__empty',
      'li'
    );
    if (prevButton) prevButton.hidden = true;
    if (nextButton) nextButton.hidden = true;
    if (dotsWrapper) dotsWrapper.hidden = true;
    return;
  }

  track.innerHTML = '';
  if (dotsWrapper) {
    dotsWrapper.innerHTML = '';
  }

  const slides = linkedinRecommendations.map((recommendation, index) => {
    const item = document.createElement('li');
    item.className = 'recommendation-card';
    item.setAttribute('aria-roledescription', 'slide');
    item.setAttribute('aria-label', `Recommendation ${index + 1} of ${linkedinRecommendations.length}`);

    const quote = document.createElement('blockquote');
    quote.className = 'recommendation-card__quote';
    quote.textContent = recommendation.quote;

    const footer = document.createElement('footer');
    footer.className = 'recommendation-card__footer';

    const person = document.createElement('div');
    person.className = 'recommendation-card__person';

    if (recommendation.name) {
      const name = document.createElement('p');
      name.className = 'recommendation-card__name';
      name.textContent = recommendation.name;
      person.appendChild(name);
    }

    if (recommendation.title) {
      const title = document.createElement('p');
      title.className = 'recommendation-card__title';
      title.textContent = recommendation.title;
      person.appendChild(title);
    }

    if (recommendation.relationship) {
      const relationship = document.createElement('p');
      relationship.className = 'recommendation-card__relationship';
      relationship.textContent = recommendation.relationship;
      person.appendChild(relationship);
    }

    footer.appendChild(person);

    if (recommendation.link) {
      const link = document.createElement('a');
      link.className = 'recommendation-card__link';
      link.href = recommendation.link;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.textContent = 'View on LinkedIn';
      footer.appendChild(link);
    }

    item.append(quote, footer);
    track.appendChild(item);
    return item;
  });

  const shouldHideControls = slides.length <= 1;
  if (prevButton) prevButton.hidden = shouldHideControls;
  if (nextButton) nextButton.hidden = shouldHideControls;

  let currentSlide = 0;

  let dots = [];

  const updateCarousel = (nextIndex) => {
    const total = slides.length;
    if (!total) return;
    currentSlide = (nextIndex + total) % total;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === currentSlide;
      slide.setAttribute('aria-hidden', String(!isActive));
      if (isActive) {
        slide.classList.add('is-active');
      } else {
        slide.classList.remove('is-active');
      }
    });

    dots.forEach((dot, dotIndex) => {
      if (dotIndex === currentSlide) {
        dot.classList.add('is-active');
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.classList.remove('is-active');
        dot.removeAttribute('aria-current');
      }
    });

    if (prevButton) prevButton.disabled = total <= 1;
    if (nextButton) nextButton.disabled = total <= 1;
  };

  dots = linkedinRecommendations.map((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'recommendations__dot';
    dot.setAttribute('aria-label', `Go to recommendation ${index + 1}`);
    dotsWrapper?.appendChild(dot);
    dot.addEventListener('click', () => updateCarousel(index));
    return dot;
  });

  if (dotsWrapper) dotsWrapper.hidden = shouldHideControls;

  if (prevButton) {
    prevButton.addEventListener('click', () => updateCarousel(currentSlide - 1));
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => updateCarousel(currentSlide + 1));
  }

  if (viewport) {
    viewport.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        updateCarousel(currentSlide + 1);
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        updateCarousel(currentSlide - 1);
      }
    });
  }

  updateCarousel(0);
};

initExperienceTimeline();
initRecommendationsCarousel();

const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
const header = document.querySelector('.site-header');
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

const revealTargets = document.querySelectorAll('.section, .skill-card, .timeline__item, .recommendation-card');

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

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => {
    target.classList.add('is-visible');
    if (target.classList.contains('skill-card')) {
      const level = Number(target.dataset.skillLevel) / 100;
      target.style.setProperty('--level', level.toString());
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
