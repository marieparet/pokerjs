## Todo 

- [ ] improve player implementation
```javascript
new Player({
  name: 'Michael',
  hand: this.deck.distribute(),
  likesRisk: 6, // 0 à 10
  money: 10,
})
```

- [ ] add ability to know if hand is good
```javascript
player.hasGoodHand(table) // renvoie 0 à 10
```

- [ ] add ability to compare players hands