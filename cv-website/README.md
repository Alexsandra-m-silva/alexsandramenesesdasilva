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


## Future improvements to consider

- add a real CV/Resume PDF download button
- add project detail pages
- add social icons and contact buttons
- add a downloadable CV in the docs folder
- swap placeholder image comments for actual media files

## License

This project is for personal portfolio use unless otherwise stated.
