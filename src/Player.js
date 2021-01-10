const { default: Suite } = require('jest-jasmine2/build/jasmine/Suite')

class Player {
  constructor (hand) {
    this.hand = hand
  }
}

module.exports = Player
