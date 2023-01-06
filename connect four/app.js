document.addEventListener('DOMContentLoaded',() =>{
  const square = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const currplayer = document.querySelector('#currplayer')

  let cupl = 1

  for(var i=0; i<square.length; i++){

  (function(index){
    //add an onclick function to each square in your grid
    square[index].onclick = function(){
      if(square[index + 7].classList.contains('taken') ){
        if(cupl===1){
          square[index].classList.add('taken')
          square[index].classList.add('plone')
          cupl=2
          currplayer.innerHTML=cupl
        }
        else{
          square[index].classList.add('taken')
          square[index].classList.add('pltwo')
          cupl=1
          currplayer.innerHTML=cupl
        }
      }
      else alert ('Nooo!!!')

      }
    })(i)
}

    function checkBoard(){

      const winArrays = [
        [0,1,2,3],
        [1,2,3,4],
        [2,3,4,5],
        [3,4,5,6],
        [7,8,9,10],
        [8,9,10,11],
        [,,,],
        [,,,],
        [,,,],
        [,,,],
        [,,,],
        [,,,],
        [,,,],
      ]
    }

  })
