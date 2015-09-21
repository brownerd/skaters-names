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

## Versioning with Tags on Git
- `git tag 1.0.0`
- `git push --tags`
- Goto releases on GitHub
- Draft new release and save (version number, title, desc)

## Versioning with NPM
- `npm publish`


## Publish Beta version
- Update package.json to 1.2.0-beta.0 -its a new minor release so bump that up
- `git tag 1.1.0-beta.0`
- `git push --tags`
- `npm publish --tag beta`

- to install after publish `npm intall skaters-names@beta`

- When beta is over just delete the beta signature and republish and push

## Setup Testing
- `npm i -D chia mocha`
- `touch index.test.js` put file in src folder

```js
var expect = require('chai').expect
var skatersNames = require('./index')

describe('skaters-names', function() {
  it('should work!', function() {
    expect(true).to.be.true
  })
})

describe('skaters-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(skatersNames.all).to.satisfy(isArrayOfStrings)
      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string'
        })
      }
    })
    it('should contain `Mark Gonzales`', function() {
      expect(skatersNames.all).to.include('Mark Gonzales')
    })
  })
  describe('random', function() {
    it('should return a random item for the skatersNames.all', function() {
      var randomItem = skatersNames.random();
      expect(skatersNames.all).to.include(randomItem)
    })
  })
})

```

## Semantic Version automatic
- `npm i -D semantic-release-cli` (had to agree to some Xcode bs)
- `semantic-release-cli setup`
- Enter details

- If you want to use CodeShip, select "Other (print tokens)"
- Select single node

- .travis.yml will be added and Version info will be removed from  Package
- add that back in `  "version": "0.0.0-semantically-released", `

- it also adds a semantic release script!


## Using Commitizen
- `npm i -D commitizen cz-conventional-changlog`
