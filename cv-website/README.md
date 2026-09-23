# Alexsandra Portfolio Website

Creative portfolio website built with EJS and JSON-driven content, designed to be hosted on GitHub Pages.

## Project structure

```text
cv-website/
├── data/
│   └── siteData.json           # Main site content used by the templates
├── public/
│   └── styles.css              # Site styles
├── views/
│   ├── landing.ejs             # Landing page with p5.js animation
│   └── portfolio.ejs           # Main portfolio page
├── build.js                    # Generates static HTML for GitHub Pages
├── server.js                   # Local dev server for previewing
├── package.json                # project scripts and dependencies
└── README.md                  # This file
```

## Local development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

## Build for GitHub Pages

This project is designed to be built into a static folder for deployment on GitHub Pages.

Run:

```bash
npm run build
```

This generates the static site in the parent `docs` folder so it can be served by GitHub Pages using the `docs` folder option.

## GitHub Pages publishing setup

1. Push the project to a GitHub repository.
2. Go to the repository Settings.
3. Open Pages.
4. Select Source: Deploy from a branch.
5. Choose branch: `main`
6. Select folder: `/docs`
7. Save.

Your site will be published at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

## Content editing

All main text content is stored in the JSON file:

```text
cv-website/data/siteData.json
```

Edit the fields there to update:
- profile name and role
- about text
- experience
- education
- projects
- skills
- contact links

## Placeholder media

Where you see comments like `place image`, replace them with your own assets manually.

Recommended locations:
- portrait photo in the profile card
- hobby or lifestyle images
- project/experience visuals

## Notes for future edits

- Keep the visual language clean and readable.
- Use the JSON file as the source of truth for page content.
- Keep the EJS templates reusable.
- Use the build script before publishing to GitHub Pages.
- Prefer static export for public hosting; do not deploy the Express server directly to GitHub Pages.

## Future improvements to consider

- add a real CV/Resume PDF download button
- add project detail pages
- add animations or richer p5.js scenes
- add social icons and contact buttons
- add a downloadable CV in the docs folder
- swap placeholder image comments for actual media files

## License

This project is for personal portfolio use unless otherwise stated.
