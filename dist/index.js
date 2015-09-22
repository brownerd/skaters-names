'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _uniqueRandomArray = require('unique-random-array');

var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);

var _skatersNamesJson = require('./skaters-names.json');

var _skatersNamesJson2 = _interopRequireDefault(_skatersNamesJson);

var getRandomItem = (0, _uniqueRandomArray2['default'])(_skatersNamesJson2['default']);

module.exports = {
  all: _skatersNamesJson2['default'],
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
