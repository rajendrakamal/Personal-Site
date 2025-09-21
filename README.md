# Portfolio

Responsive single-page portfolio website featuring:

- Sticky header with animated hamburger navigation for mobile
- Hero, about, education, skills, projects, recommendations, and contact sections
- Intersection Observer powered reveal animations and progress indicators
- Data-driven LinkedIn experience timeline and testimonial carousel managed in `js/main.js`
- Accessible, keyboard-friendly interactions and smooth scrolling

## Getting started

Open `HTML-personalsite/index.html` in your browser or run a local web server:

```bash
cd HTML-personalsite
python -m http.server 3000
```

Then visit <http://localhost:3000>.

Update the placeholder content (name, bio, links, experience, etc.) inside `index.html` to personalize the site. Styling lives in `css/styles.css`, and interactivity is handled in `js/main.js`.

### LinkedIn integrations

- **Experience timeline:** Edit the `linkedinExperiences` array in `js/main.js` with the roles, companies, dates, and highlights you want to surface. Optional properties like `link` let you point directly to the public LinkedIn entry.
- **Recommendations carousel:** Populate the `linkedinRecommendations` array with the name, title, relationship, quote, and optional LinkedIn link for each recommendation. The carousel automatically hides navigation controls if there's only one testimonial.
