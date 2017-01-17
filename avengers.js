const avengers = [
  {
    name: 'Homem de ferro',
    id: 1009368,
    picture: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg'
  }, {
    name: 'Capitão America',
    id: 0,
    picture: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087.jpg'
  }, {
    name: 'Hulk',
    id: 0,
    picture: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg'
  }, {
    name: 'Thor',
    id: 0,
    picture: 'http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg'
  }, {
    name: 'Viúva Negra',
    id: 0,
    picture: 'http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b.jpg'
  }, {
    name: 'Gavião Arqueiro',
    id: 0,
    picture: 'http://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b.jpg'
  }
]

exports.getAvenger = function () {
  return avengers[Math.floor(Math.random() * avengers.length)];
}
