var uniqueRandomArray = require('unique-random-array')
var skatersNames = require('./skaters-names.json')

module.exports = {
  all: skatersNames,
  random: uniqueRandomArray(skatersNames)
}
