const cards = require('./assets/deck.json')
const Deck = require('./Deck')
const Player = require('./Player')

class Game {
  constructor () {
    this.deck = new Deck(cards)
  }

  start () {
    this.deck.randomize()

    this.players = [
      new Player(this.deck.distribute()),
      new Player(this.deck.distribute())
    ]

    console.log('First round', this.deck.displayFirstRound())
    console.log('Your hand', this.players[0].hand)
  }
}

module.exports = Game
