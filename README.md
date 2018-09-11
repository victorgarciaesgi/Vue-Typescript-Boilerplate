# Vuex boilerplate

<p align="center">
<img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo">

</p>

# Installation

```bash
yarn
```

or

```bash
npm install
```

# Change API url endpoint

go to `./environment`

`dev.env.js` -> API_URL constant for development
`prod.env.js` -> API_URL constant for production

## Config

Webpack config in `./config`

# Developpment

```bash
yarn dev
```

A page will open on [localhost:5000](http://localhost:5000).

Build ~ 60s

Live reload, Hot Module Replacement and Vue devtools

```bash
yarn dev2
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
yarn prod
```

- pm2
- minified bundle size
- uglified code
- gzipped
- chunks vendors
- Vue production mode
- drop console logs and comments

```bash
yarn prod2
```

Same as prod but with **Nodemon**

```bash
yarn build:prod
```

Regenerate the assets
