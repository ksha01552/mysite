document.addEventListener('DOMContentLoaded', () => {
  const square = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const currentplayer = document.querySelector('#currentplayer')

  let cupl = 1

  for (var i = 0; i < square.length; i++) {

    (function(index) {
      //add an onclick function to each square in your grid
      square[index].onclick = function() {
        if (square[index + 7].classList.contains('taken')) {
          if (cupl === 1) {
            square[index].classList.add('taken')
            square[index].classList.add('plone')
            cupl = 2
            currentplayer.innerHTML = cupl
          } else {
            square[index].classList.add('taken')
            square[index].classList.add('pltwo')
            cupl = 1
            currentplayer.innerHTML = cupl
          }
        } else alert('Nooo!!!')

      }
    })


  function checkBoard() {

    const winArrays = [
      [0, 1, 2, 3],
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
      [7, 8, 9, 10],
      [8, 9, 10, 11],
      [9, 10, 11, 12],
      [10, 11, 12, 13],
      [14, 15, 16, 17],
      [15, 16, 17, 18],
      [16, 17, 18, 19],
      [17, 18, 19, 20]
    ]
    for (let y = 0; y < winArrays.length; y++) {
      const sq1 = square[winArrays[y][0]]
      const sq2 = square[winArrays[y][1]]
      const sq3 = square[winArrays[y][2]]
      const sq4 = square[winArrays[y][3]]

      if(sq1.classList.contains('plone') &&
      sq2.classList.contains('plone')
      &&sq3.classList.contains('plone') &&
    sq4.classList.contains('plone') &&){
      result.innerHTML = 'Player one wins!!'
    }
    else if (sq1.classList.contains('pltwo') &&
    sq2.classList.contains('pltwo')
    &&sq3.classList.contains('pltwo') &&
  sq4.classList.contains('pltwo') &&) {
    result.innerHTML = 'Player two wins!!'

    }
    }

  }(i)
  //add an event listener to each square that will call the checkBoard function on click
square.forEach(squu => squu.addEventListener('click',checkBoard))








})
