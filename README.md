# Components for scrubs
scrubs-components is a group of functional, stateless react elements for building user interfaces.

## Developing new components
It is encouraged that when developing new components you use this repository so that we may continue to add and document more scrubs components over time.

To install:
``` javascript
npm install
```

To develop locally:
``` javascript
npm start
```

To create a new component:
- Create a new folder in `src` with an `index.js` file and a `docs.js` file.
- If the component has styling, add a `index.css` file in the same folder.
- Create a new named export in `src/index.js`:
```
export { default as NewComponent } from './NewComponent'
```
- Create a new named export in `docs/components.js`:
```
export { default as NewComponent } from '../NewComponent/docs'
```
- You should see your example component at [http://localhost:8080/newcomponent](http://localhost:8080/newcomponent)

## Setting up scrubs-components in a project
To get the most out of scrubs-components, including flow type annotations and theming it is encouraged that you use webpack with the babel loader and css modules. Be sure the `scrubs-components` module is not excluded with other `node_modules` when defining which files babel loads. Check the `example.webpack.config.js` and `.babelrc` as a starting point.

## Dependencies
Scrubs components rely on a few other modules:
– `theme`: Theme file for traits (default: scrubs-theme)
– `traits`: Utility classes for scrubs (default: scrubs-traits)
- `icons`: Icons for UI hints, actions and navigation

These can all be overwritten when imports scrubs components individually in a webpack configuration file using the `alias` option in `resolve`:
```javascript
alias: {
  traits: 'scrubs-traits',
  icons: 'scrubs-icons',
  theme: 'scrubs-theme',
}
```
