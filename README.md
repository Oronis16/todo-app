# Installing

### Install dependencies

- `$ npm install`

# About SASS

We added the Sass Css preprocessor to the project because it gives us benefits when writing CSS code. We can group tightly coupled featured by nesting. We can create variables in CSS to achieve theming and code reuse.

To add SASS to a project:

`$ npm install node-sass --save-dev`

Then we need to create some scripts to convert .scss files into .css. In package.json:

```
"precss-compile": "rm -rf src/styles.css",
"css-compile": "./node_modules/node-sass/bin/node-sass --output src src/styles.scss",
"css-watch": "npm run css-compile && npm run css-compile -- -w"
```

`css-compile` compiles `src/styles.scss` into `src/styles.css`
`precss-compile` runs automatically before `css-compile` hence the `pre` prefix and it deletes the old version of `src/styles.css` so that we won't get the error that the file already exists
`css-watch` runs our `css-compile` AND after that it runs it again but this time in watch mode, so that SASS will always watch for changes and run compile automatically

We need to run this command in the terminal:

`$ npm run css-watch`
