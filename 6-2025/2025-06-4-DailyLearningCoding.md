**JAVASCRIPT**

**17. Final Project: Post UI**

**17.1. Node Package Manager – Library management in JavaScript**

**17.1.1. Overview**

* When working with a project, you will install many packages.
* Manually adding, removing, updating is very complicated.
* So we need a package manager like npm or yarn to manage easily.

**17.1.2. package.json file**
This file describes project info and used libraries.

Example:

```json
{
  "name": "learn-rtx-saga",
  "dependencies": {
    "yup": "^0.32.9"
  },
  "devDependencies": {
    "vite": "^2.6.0"
  },
  "scripts": {
    "start": "react-scripts start"
  }
}
```

Distinction:

* dependencies: required for production
* devDependencies: used only in local development

**17.1.3. Semantic Versioning (semver)**
Format: major.minor.patch (e.g. 1.2.3)

| Type  | Description                       |
| ----- | --------------------------------- |
| Major | Major changes, may break old code |
| Minor | Add features, still compatible    |
| Patch | Fix bugs, fully compatible        |

Common prefixes:

* ^: allow update of minor and patch
* \~: only allow patch updates

**17.1.4. npm vs yarn**

| Property     | npm                  | yarn                            |
| ------------ | -------------------- | ------------------------------- |
| Stands for   | Node Package Manager | Yet Another Resource Negotiator |
| Lock file    | package-lock.json    | yarn.lock                       |
| Installation | Auto with NodeJS     | npm i -g yarn                   |
| Operation    | Sequential           | Parallel (faster)               |

**17.1.5. Common commands**

| Goal                  | npm                      | yarn                    |
| --------------------- | ------------------------ | ----------------------- |
| Install global        | npm i -g package         | yarn global add package |
| Install all           | npm i                    | yarn                    |
| Add package           | npm i package            | yarn add package        |
| Add dev package       | npm i --save-dev package | yarn add --dev package  |
| Remove package        | npm uninstall package    | yarn remove package     |
| Check vulnerabilities | npm audit                | yarn audit              |
| Fix security issues   | npm audit fix            | Not directly supported  |

**17.1.6. Run script commands**

| Function         | npm           | yarn       |
| ---------------- | ------------- | ---------- |
| Run dev          | npm run dev   | yarn dev   |
| Build            | npm run build | yarn build |
| Start            | npm start     | yarn start |
| Test             | npm test      | yarn test  |
| View all scripts | npm run       | yarn run   |

---

**17.2. MODULE BUNDLER – MODERN CODE FLOW**

**17.2.1. What is a Module?**
When one JavaScript file imports another, it becomes a module.

Example:

```
root/
├── utils.js       // export function sayHello() {}
├── main.js        // import { sayHello } from './utils.js'
└── index.html     // <script type="module" src="./main.js" />
```

Common module types:

| Name             | Description                        |
| ---------------- | ---------------------------------- |
| CommonJS         | Used in Node.js                    |
| AMD/UMD          | For old browsers                   |
| ESM (ES Modules) | Modern standard, browser supported |

**17.2.2. Why need Module Bundler?**
Common problems in web app:

* Code is not minified or optimized (minify, remove unused, ...)
* Browsers don’t support new syntax (ES6+)

→ Use Task Runner or Module Bundler.

**17.2.3. Task Runner vs Module Bundler**

*Task Runner (less used now):*

| Tool         | Note                                                 |
| ------------ | ---------------------------------------------------- |
| Grunt / Gulp | Manually run tasks like file copy, image compression |
| Setup        | Must define each task manually                       |
| Status       | Outdated in modern projects                          |

*Module Bundler (popular):*

* Webpack / Rollup / Parcel / Snowpack: Auto bundle code, support HMR, Tree shaking, ...
* Popular since: 2015 – 2017
* Pros: Performance optimized, static build files are small

Important features:

* Tree shaking: remove unused code
* Hot Module Replacement (HMR): fast reload when editing
* Code transformation: compile new → old syntax

**17.2.4. ViteJS – Modern Module Bundler**
Vite is a rising, super-fast tool used by default in many React/Vue projects.

| Advantage                             | Description             |
| ------------------------------------- | ----------------------- |
| Fast start                            | No full build needed    |
| Super fast HMR                        | Native-like interaction |
| Use ES Modules                        | No complex config       |
| Built-in support for React/Vue/Svelte | Setup with one command  |

---

**17.3. SETUP VANILLA JS PROJECT WITH VITEJS**

**17.3.1. Run project init command**

* For npm:

| npm version | Command                                                                                |
| ----------- | -------------------------------------------------------------------------------------- |
| npm 6.x     | `npm init vite@latest js-post-ui --template vanilla`                                   |
| npm 7+      | `npm init vite@latest js-post-ui -- --template vanilla` (*Note: use `--` with npm 7+*) |

* For yarn:

```bash
yarn create vite js-post-ui --template vanilla
```

**17.3.2. Project folder structure**

```
root/
├── dist/             # Build output
├── images/           # Image files
├── js/               # All JS files
│   ├── api/          # API calls
│   ├── constants/    # Constants
│   ├── utils/        # Reusable functions
│   └── ...           # Other modules
├── node_modules/     # Installed packages
├── public/           # Static files copied to dist
├── styles/           # CSS files
├── index.html        # Main entry
├── package.json      # Project info & dependencies
├── vite.config.js    # Vite config
└── yarn.lock         # Lock file (if using yarn)
```

Notes:

* `index.html` is where Vite starts rendering.
* `vite.config.js` allows advanced config (alias, plugin...).
* `js/` is divided into api, utils, constants to make code maintainable.

---

**17.4. Multi-Page setup in ViteJS**

* Default issue: Vite only builds `index.html` → single page only.

→ To support multi-page apps, you must customize `vite.config.js`.

```js
// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        postDetail: resolve(__dirname, 'post-detail.html'),
        addEditPost: resolve(__dirname, 'add-edit-post.html'),
      },
    },
  },
})
```

With above config:

* Vite will build 3 pages:

  * `index.html`
  * `post-detail.html`
  * `add-edit-post.html`
* Each page can have its own JS/CSS if needed.

---

**17.5. public folder in ViteJS**

**17.5.1. Role of public folder**

* This is for static files like:

  * `robots.txt`
  * `favicon.ico`
  * `sitemap.xml`
  * or images not imported via JavaScript
* On build (`yarn build` or `npm run build`), everything in public is copied to dist as-is.

Example structure:

```
root
├── dist/
├── public/
│   ├── robots.txt
│   ├── favicon.ico
│   └── sitemap.xml
```

**17.5.2. Add static image**

* When you want to use static images without JS import:

```html
<img src="images/recipe.jpg" class="card-img-top" alt="recipe" />
```

* Place image at: `/public/images/recipe.jpg`

→ After running `yarn build`, image will be in `dist/images`.

**17.5.3. Explanation about CDN cache**
When deploying web with CDN, static files from public (images, favicon, ...) can be cached on CDN servers to:

* Speed up page load
* Reduce load on origin server

---

**17.6. Setup Git and Deploy to Vercel**
**17.6.1. Install Git & Initialize Git**

* First-time Git setup:

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

* Initialize Git in your project folder:

```bash
git init
```

* Add `.gitignore` to exclude files you don't want to push:
  Use a template from:
  [https://www.toptal.com/developers/gitignore](https://www.toptal.com/developers/gitignore)

* Add SSH key to GitHub:
  Official guide: [https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh)

**17.6.2. Push Code to GitHub**

* Create an empty repository on GitHub:

- Connect your local repo to GitHub:

```bash
git remote add origin https://github.com/your-username/your-repo.git
```

* Push the code:

```bash
git add .
git commit -m "Init commit"
git checkout -b main       # if you're not already on the main branch
git push -u origin main
```

**17.6.3. Deploy the Project to Vercel**

1. Log in at [https://vercel.com](https://vercel.com)
2. Click "Import Project", select the repo from GitHub
3. Follow the instructions → Wait a few seconds
4. Your project is now online!
   You will get a URL like:
   [https://your-project-name.vercel.app](https://your-project-name.vercel.app)

**Quick Recap:**

| Step                  | Goal                   |
| --------------------- | ---------------------- |
| Git init              | Initialize local Git   |
| git remote add origin | Connect to GitHub      |
| git push              | Push code to GitHub    |
| Vercel import         | Deploy web from GitHub |

---

**17.7. Setup UI Template**
**17.7.1. Clone the Available UI Template**

* Sample UI is provided at: [https://github.com/paulnguyen-mn/post-ui-base](https://github.com/paulnguyen-mn/post-ui-base)
* If you want to edit the UI: Fork it to your personal GitHub account before cloning.

Clone the UI to your machine:

```bash
git clone https://github.com/paulnguyen-mn/post-ui-base
```

Open the folder in VS Code:

```bash
code post-ui-base
```

**17.7.2. Copy UI to ViteJS Project**
•  Open the `post-ui-base` folder
•  Copy the needed parts:
•  HTML → into `index.html`, `add-edit-post.html`, ...
•  CSS → into the `styles/` folder
•  Images → into the `images/` folder

**Result after copying:**

```
vite-project/
│
├── index.html
├── add-edit-post.html
├── images/
├── styles/
└── js/
```

**Note:** After copying HTML files, you may need to update file paths in `src` and `href` attributes to match Vite’s structure.

**Quick Recap:**

| Step         | Goal                          |
| ------------ | ----------------------------- |
| Clone repo   | Download sample UI            |
| Copy content | Integrate into ViteJS project |
| Update paths | Ensure files work properly    |

---

**17.8. Bootstrap 5.1.3**
**17.8.1. Add Bootstrap CSS to HTML Page**
Add the following inside the `<head>` of your HTML page:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
```

**17.8.2. Add JavaScript for Dynamic Components**
You have two options:

**Option 1: Use Bundle (simplest)**
Insert right before `</body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
  crossorigin="anonymous"></script>
```

→ This bundle includes both Bootstrap JS and Popper.js (used for tooltip, popover, dropdown, ...).

**Option 2: Separate Popper and Bootstrap**

```html
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
  integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
  crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
  integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
  crossorigin="anonymous"></script>
```

**17.8.3. Sample HTML5 Template with Bootstrap**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello, world!</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <h1 class="text-primary text-center mt-5">Hello, world!</h1>

    <!-- Bootstrap Bundle JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

**17.8.4. Important Settings**

| Element                  | Explanation                                    |
| ------------------------ | ---------------------------------------------- |
| `<!doctype html>`        | Required to use HTML5 and Bootstrap            |
| viewport meta tag        | Ensures responsive design                      |
| `box-sizing: border-box` | Makes width calculations easier (global apply) |
| Reboot                   | Resets CSS for consistent browser display      |