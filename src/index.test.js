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
      var randomItem = skatersNames.random()
      expect(skatersNames.all).to.include(randomItem)
    })

    it('should return an array of random items if passed a number', function() {
      var randomItems = skatersNames.random(3)
      expect(randomItems).to.have.length(3)
      randomItems.forEach(function(item) {
        expect(skatersNames.all).to.include(item)
      })
    })
  })
})
