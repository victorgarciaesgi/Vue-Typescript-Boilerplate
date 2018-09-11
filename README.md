# Packdiff Front

<p align="center">
<img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo">
<img width="100" src="https://upload.wikimedia.org/wikipedia/fr/3/3b/Logo_Carrefour.svg" alt="Carrefour logo">

</p>

# Installation

```bash
npm install
```

or

```bash
yarn
```

# Change API url endpoint

go to `./environment`

`dev.env.js` -> API_URL constant for development
`prod.env.js` -> API_URL constant for production

## Config

Webpack config in `./config`

# Developpment

```bash
npm run dev
```

A page will open on [localhost:5000](http://localhost:5000).

Build ~ 60s

Live reload, Hot Module Replacement and Vue devtools

```bash
npm run dev2
```

Same as dev but with **Webpack-Dashboard**

# Extensions

- For Vscode
  - Vetur
  - Prettier
  - Typescript
  - Eslint
  - Sass
- SublimeText
  - Vue-syntax-highlight
  - Prettier
  - Eslint
  - Sass
- WebStorm/PhpStorm/InteliJ
  - Vue
  - Prettier
  - Eslint

# Get Vue devtools extension

- [Lien pour Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Lien pour Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

# Production

```bash
npm run prod
```

- pm2
- minified bundle size
- uglified code
- gzipped
- chunks vendors
- Vue production mode
- drop console logs and comments

```bash
npm run prod2
```

Same as prod but with **Nodemon**

```bash
npm run build:prod
```

Regenerate the assets
