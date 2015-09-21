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
- just login fool!

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
