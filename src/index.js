import uniqueRandomArray from 'unique-random-array'
import skatersNames from './skaters-names.json'

var getRandomItem = uniqueRandomArray(skatersNames);

module.exports = {
  all: skatersNames,
  random: random
}

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for ( var i = 0; i < number; i++ ) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
