# Software Developer Portfolio #

This project is dedicated to development and maintanance of my personal developer portfolio website and any related content/services/apis. I am currently using the Astro metaframework for the site and nix (with devenv) for development. Currently progress is underway in updating the UI and the projects section.

## 🚀 Project Structure ##

```text
 ├── /site
 │   ├── public/
 │   │   ├── images/
 │   │   │   ├── got2go.png
 │   │   │   ├── pokemon-egg-hunt.png
 │   │   │   ├── starred.jpg
 │   │   │   └── transcend-care.svg
 │   │   └── favicon.svg
 │   ├── src/
 │   │   ├── components/
 │   │   │   ├── FormattedDate.astro
 │   │   │   ├── Head.astro
 │   │   │   ├── Header.astro
 │   │   │   ├── HeroSection.astro
 │   │   │   └── ProjectCard.astro
 │   │   ├── layouts/
 │   │   │   └── Layout.astro
 │   │   ├── lib/
 │   │   │   └── constants.ts
 │   │   ├── pages/
 │   │   │   ├── about.astro
 │   │   │   ├── contact.astro
 │   │   │   ├── index.astro
 │   │   │   └── tools.astro
 │   │   └── styles/
 │   │       └── global.css
 │   └── package.json
 ├── .envrc
 ├── .gitignore
 ├── devenv.nix
 └── devenv.yaml
```

## 🧞 Commands ##

| Command                | Action                                           |
| :----------------------| :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
