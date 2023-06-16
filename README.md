# React-ts-eslint-prettier-tailwindcss boilerplate

My very own boilerplate configured [ReactJS](https://reactjs.org), [TypeScript](https://www.typescriptlang.org), [Tailwindcss](https://tailwindcss.com), [Eslint](https://eslint.org), [Prettier](https://prettier.io)


# Getting Started
```bash
# clone the template
npx degit cedriccastro99/react-ts-eslint-prettier-tailwind my-awesome-app-name

# go to app directory
cd my-awesome-app-name

# open in vscode (optional) 
code .

# intialize git
git init

# install all dependencies
yarn install
```
## Please add these additional files.

**Create `.eslintignore` file**
<br/>
*Insert this*
```
/node_modules
/scripts
/config
/pnpm-lock.yaml
/pnpm-workspace.yaml
.DS_Store

/package.json
/tsconfig.json
**/*.md
build

.eslintrc.js
tailwind.config.js
postcss.config.js
```
<br/>

**Create `.eslintrc.js` file**
<br/>
*Insert this*
```
module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint',
    'simple-import-sort',
    'tailwindcss'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
}
```
**Create `.gitignore` file**
<br/>
*Insert this*
```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
<br/>

**Create `.prettierignore` file**
<br/>
*Insert this*
```
**/*.md
**/*.svg
**/*.ejs
**/*.html


/node_modules

/config
/pnpm-lock.yaml
/pnpm-workspace.yaml
build
dist

.DS_Store
```
<br/>

**Create `.prettierrc.js` file**
<br/>
*Insert this*
```
module.exports = {
    trailingComma: 'none',
    tabWidth: 2,
    printWidth: 80,
    useTabs: false,
    semi: false,
    singleQuote: true,
    quoteProps: 'as-needed',
    bracketSpacing: true,
    arrowParens: 'always',
    jsxBracketSameLine: false,
    endOfLine: 'lf',
    tailwindConfig: './tailwind.config.js',
    overrides: [
      {
        files: '.prettierrc',
        options: {
          parser: 'json',
        },
      },
    ],
    plugins: [require('prettier-plugin-tailwindcss')],
  };
```
<br/>


# After adding all these files, you can now run and start the app
```
yarn start
```


### Happy hacking! Enjoy :wink::smile:
