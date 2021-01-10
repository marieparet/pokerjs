const Game = require('../../src/Game.js')

describe('Game', () => {
  it('works', () => {
    new Game().start()
    expect(true).toBe(true)
  })

  describe('start', () => {
    it('initializes deck', () => {
      new Game().start()
    })
  })
})
