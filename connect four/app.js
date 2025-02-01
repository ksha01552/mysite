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
    })(i);}


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
      [17, 18, 19, 20],
      [21,22,23,24],
      [22,23,24,25],
      [23,24,25,26],
      [24,25,26,27],
      [28,29,30,31],
      [29,30,31,32],
      [30,31,32,33],
      [31,32,33,34],
      [35,36,37,38],
      [36,37,38,39],
      [37,38,39,40],
      [38,39,40,41],
      [0,7,14,21],
      [7,14,21,28],
      [14,21,28,35],
      [1,8,15,22],
      [8,15,22,29],
      [15,22,29,36],
      [2,9,16,23],
      [9,16,23,30],
      [16,23,30,37],
      [3,10,17,24],
      [10,17,24,31],
      [17,24,31,38],
      [4,11,18,25],
      [11,18,25,32],
      [18,25,32,39],
      [5,12,19,26],
      [12,19,26,33],
      [19,26,33,40],
      [6,13,20,27],
      [13,20,27,34],
      [20,27,34,41]
    ]
    for (let y = 0; y < winArrays.length; y++) {
      const sq1 = square[winArrays[y][0]]
      const sq2 = square[winArrays[y][1]]
      const sq3 = square[winArrays[y][2]]
      const sq4 = square[winArrays[y][3]]

      if(sq1.classList.contains('plone') &&
      sq2.classList.contains('plone')
      &&sq3.classList.contains('plone') &&
    sq4.classList.contains('plone') ){
      result.innerHTML = 'Player one wins!!'
    }
    else if (sq1.classList.contains('pltwo') &&
    sq2.classList.contains('pltwo')
    &&sq3.classList.contains('pltwo') &&
  sq4.classList.contains('pltwo') ) {
    result.innerHTML = 'Player two wins!!'

    }
    }

  }
  //add an event listener to each square that will call the checkBoard function on click
square.forEach(squu => squu.addEventListener('click',checkBoard))








})
