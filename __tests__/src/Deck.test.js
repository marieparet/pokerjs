const Deck = require('../../src/Deck')

const exampleDeck = [
  {
    suit: 'hearts',
    value: 2
  },
  {
    suit: 'hearts',
    value: 3
  },
  {
    suit: 'hearts',
    value: 4
  }
]

describe('Deck', () => {
  describe('randomize', () => {
    it('randomizes deck', () => {
      const deck = new Deck(exampleDeck)
      const randomizedDeck = deck.randomize()

      expect(Array.isArray(randomizedDeck)).toBe(true)
      expect(randomizedDeck[0].suit).toEqual('hearts')
    })
  })

  describe('distribute', () => {
    it('returns and removes the two first cards', () => {
      const deck = new Deck(exampleDeck)

      expect(deck.distribute()).toStrictEqual([
        {
          suit: 'hearts',
          value: 2
        },
        {
          suit: 'hearts',
          value: 3
        }
      ])

      expect(deck.deck).toHaveLength(1)
    })
  })

  describe('displayFirstRound', () => {
    it('returns and removes 3 cards', () => {
      const deck = new Deck(exampleDeck)

      expect(deck.displayFirstRound()).toStrictEqual([
        {
          suit: 'hearts',
          value: 2
        },
        {
          suit: 'hearts',
          value: 3
        },
        {
          suit: 'hearts',
          value: 4
        }
      ])

      expect(deck.deck).toHaveLength(0)
    })
  })

  describe('displayRound', () => {
    it('returns and removes 1 card', () => {
      const deck = new Deck(exampleDeck)

      expect(deck.displayRound()).toStrictEqual([
        {
          suit: 'hearts',
          value: 2
        }
      ])

      expect(deck.deck).toHaveLength(2)
    })
  })
})
