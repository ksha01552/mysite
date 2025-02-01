document.addEventListener('DOMContentLoaded', () => {

  //images ka array banana

  const cardArray = [
    {
      name: 'i1',
      img: 'images/i1.png'
    },
    {
      name: 'i1',
      img: 'images/i1.png'
    },
    {
      name: 'i2',
      img: 'images/i2.png'
    },
    {
      name: 'i2',
      img: 'images/i2.png'
    },
    {
      name: 'i3',
      img: 'images/i3.png'
    },
    {
      name: 'i3',
      img: 'images/i3.png'
    },
    {
      name: 'i4',
      img: 'images/i4.png'
    },
    {
      name: 'i4',
      img: 'images/i4.png'
    },
    {
      name: 'i5',
      img: 'images/i5.png'
    },
    {
      name: 'i5',
      img: 'images/i5.png'
    },
    {
      name: 'i6',
      img: 'images/i6.png'
    },
    {
      name: 'i6',
      img: 'images/i6.png'
    }
  ]

  //create board
  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  var r = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //blank borad ke liye:

  function createBoard() {
    for (let i = 0; i < 12; i++){
      var card = document.createElement('img')
      card.setAttribute('src', 'images/back.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
  }


function checkForMatch(){
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]) {//this array has the name of the images
    alert('You found a match!!')
    cards[optionOneId].setAttribute('src','images/white.png')
    cards[optionTwoId].setAttribute('src','images/white.png')
    cardsWon.push(cardsChosen)
  }
  else{
  cards[optionOneId].setAttribute('src','images/back.png')
  cards[optionTwoId].setAttribute('src','images/back.png')
  alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  r.textContent = cardsWon.length
  if(cardsWon.length === 6){
    alert('Wow you won!!:)')
    r.textContent = 'Congratulations!!!:)'
  }
}

//flipcard ka function

function flipcard(){
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src',cardArray[cardId].img)
  if (cardsChosen.length === 2){
    setTimeout(checkForMatch, 500)
  }
}

createBoard()


















})
