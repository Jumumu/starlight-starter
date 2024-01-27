# Starlight Starter Kit: Basics

Note that the CI pipeline in this repository **does not** publish the generated
HTML to a `gh-pages` branch. It uses GitHub's new [actions
workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
with
[actions/deploy-pages](https://github.com/actions/deploy-pages?tab=readme-ov-file).
This feature is in beta. Instead of publishing to a `gh-pages` branch, it
creates a `github-pages` deployment that can be seen
[here](https://github.com/Jumumu/starlight-starter/deployments/github-pages) if
you are the owner of the repository.

## Gotchas
- Markdown file is required to have title in
  [frontmatter](https://starlight.astro.build/reference/frontmatter/). For
  example:
    ```md
    ---
    title: Welcome to Starlight ✨
    ---
    ```
    Can automatically add frontmatter to all Markdown files by running the
    [append_frontmatter.sh](./append_frontmatter.sh) script.

- Relative image paths must include `./` at the beginning. For example,
   `![](./assets/Dual-Narrowband-Filters-image1.png)` will work, but
   `![](assets/Dual-Narrowband-Filters-image1.png)` will not. Similarly,
   `![](<./assets/Dual-Narrowband-Filters-image1.png>)` will work, but
   `![](<assets/Dual-Narrowband-Filters-image1.png>)` will not. Can fix this
   using a simple find and replace.

- Must update `site` and `base` config settings in
  [astro.config.mjs](./astro.config.mjs).

- If you are using a custom domain, update the [CNAME](./public/CNAME) file in
  the `./public` folder.

[![Built with
Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

[![Open in
StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/starlight/tree/main/examples/basics)
[![Open with
CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/starlight/tree/main/examples/basics)
[![Deploy with
Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwithastro%2Fstarlight%2Ftree%2Fmain%2Fexamples%2Fbasics&project-name=my-starlight-docs&repository-name=my-starlight-docs)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and
files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory.
Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative
link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro
documentation](https://docs.astro.build), or jump into the [Astro Discord
server](https://astro.build/chat).
