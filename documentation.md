# Skater's names


## GitHub
- make repo for project

## NPM Defaults
- set up defaults locally in terminal

```
npm set init-author-name 'Benjamin Gandhi-Shepard'
npm set init-author-email 'ben@brownerd.com'
npm set init-author-url 'http://brownerd.com'
npm set init-license 'MIT'
npm set save-exact true
```

- check defaults using `cat ~/.npmrc`

- run `npm init`

## NPM Login
- just login to NPM!
- then login via terminal
- `npm adduser` Username, Password, Email

## SRC
- make a `src` directory and put `index.js` in there
- `npm i -S unique-random-array`
- Export module
```
module.exports = {
  all: names,
  random: uniqueRandomArray(names)
}
```

## Push to GitHub
- git push


## Publish to NPM
- `npm publish`
- `npm info skaters-names`


## Test it
- make new directory
- npm i skaters-names
- index.js
- node index.js

## Versioning with Tags
- `git tag 1.0.0`
- `git push --tags`
- Goto releases on GitHub
- Draft new release and save (version number, title, desc)
