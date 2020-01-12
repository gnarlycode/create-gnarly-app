<p align="center"><img src="https://github.com/gnarlycode/gnarly-assets/blob/master/gnarly-logo-600.png?raw=true" /></p>

###### _GNARLY CODE PRESENTS_

###### _POWERED WITH [`@gnarlycode/react-app-tools`](https://github.com/gnarlycode/react-app-tools)_

# 💀 CREATE GNARLY APP 💀

Want to create **`universal`** web apps with **`SSR`** or just generate **`static site`** super easy and fast?

**The tool is here!**

## WHAT?

Those lovely tools of contemporary web development:

**[`⚛️ React`](https://reactjs.org/)** for sure!!!

**[`🔭 Astroturf`](https://github.com/4Catalyzer/astroturf)** for style!

**[`🚗 React Router`](https://reactjs.org/)** for traffic!

**[`🎯 Typescript`](https://www.typescriptlang.org)** for bulletproof!

**[`🌌 Redux`](https://redux.js.org/)** for state! \*

_The \* mark means optional_

## INSTALL?

To create an app, run:

```sh
npm init @gnarlycode/gnarly-app app-name
```

## COMMANDS?

🕹 **`npm run dev`** — dev server (hot reload, watch mode etc)

🕹 **`npm run build`** — build the app

🕹 **`npm run build-static`** — build the app with static html's

🕹 **`npm start`** — serve builded app

## WHAT'S NEXT?

📁 You got next file structure for your app:

```
📁 app-name
├── 📄 .browserlist
├── 📄 .editorconfig
├── 📄 .eslintignore
├── 📄 .eslintrc.js
├── 📄 .gitignore
├── 📄 .prettierignore
├── 📄 .prettierrc
├── 📄 gnarly.config.js
├── 📄 package.json
├── 📄 README.md
├── 📄 tsconfig.json
│
├── 📁 src
│   ├── 📄 config.ts
│   ├── 📄 routes.tsx
│   │
│   ├── 📁 components
│   │   └── 📄 <Components>.tsx
│   │
│   ├── 📁 entries
│   │   ├── 📄 client.tsx
│   │   └── 📄 server.tsx
│   │
│   ├── 📁 styles
│   │   ├── 📄 globalStyles.ts
│   │   └── 📄 styleVars.json
│   │
│   ├── 📁 types
│   │   └── 📄 svg.d.ts
│   │
│   └── 📁 utils
│       ├── 📄 index.ts
│       └── 📄 links.ts
│
└── 📁 static
    └── 📄 favicon.ico
```

⚙️ Configuration is inside of `gnarly.config.js`

```js
module.exports = {
  // Server listening
  host: '0.0.0.0',
  port: 8080,

  // Url prefix
  baseUrl: '/base-url',

  // For static renderer, used when you run `npm run build-static` or `build-all`
  routerConfig: './src/routes',

  // Serve static with express (do not enable if static served with nginx for example)
  serveStatic: true,
}
```

⚙️ You can create `gnarly.config.local.js` for local environment and don't commit it.

⚙️ Also you can create `_env` and `.env` for extra configurations.

⚙️ If you want to include an `api` to your app look **[this example](https://github.com/gnarlycode/react-app-tools/blob/master/test-example/src/entries/server.tsx)**.

## CREDITS 🙏

[`babel`](https://babeljs.io/)
[`commander`](https://github.com/tj/commander.js)
[`dotenv-webpack`](https://github.com/mrsteele/dotenv-webpack)
[`dotenv`](https://github.com/motdotla/dotenv)
[`express`](https://expressjs.com/)
[`inquirer`](https://github.com/SBoudrias/Inquirer.js/)
[`react-helmet`](https://github.com/nfl/react-helmet)
[`react-hot-loader`](https://github.com/gaearon/react-hot-loader)
[`react-router`](https://reactjs.org/)
[`react`](https://reactjs.org/)
[`redux`](https://redux.js.org/)
[`astroturf`](https://github.com/4Catalyzer/astroturf)
[`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader)
[`eslint`](https://eslint.org/)
[`typescript`](https://www.typescriptlang.org)
[`webpack-hot-server-middleware`](https://www.npmjs.com/package/webpack-hot-server-middleware)
[`webpack`](https://webpack.js.org/)

###### Author: Dmitry Podlesny
