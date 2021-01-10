const shuffle = require('./helpers/shuffle')

class Deck {
  constructor (deck) {
    this.deck = [...deck]
  }

  randomize () {
    return shuffle(this.deck)
  }

  distribute () {
    return this.deck.splice(0, 2)
  }

  displayFirstRound () {
    return this.deck.splice(0, 3)
  }

  displayRound () {
    return this.deck.splice(0, 1)
  }
}

module.exports = Deck
