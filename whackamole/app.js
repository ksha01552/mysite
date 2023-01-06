document.addEventListener('DOMContentLoaded',()=>{

  const square = document.querySelectorAll('.square')
  const mole = document.querySelectorAll('.mole')
  const timeleft = document.querySelector('#timeleft')
  let score = document.querySelector('#score')

  let result = 0
  let currentTime = timeleft.textContent

  function randomSquare(){
    square.forEach(className => {
      className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id
  }
square.forEach(id =>{
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition){
      result=result+1
      score.textContent=result
    }
  })
})

    let timeId=null

function moveMole(){

  timeId=setInterval(randomSquare,1000)
}

function countDown(){
  if(currentTime===0){
    clearInterval(timerId)
    clearInterval(timeId)
    alert('GAME OVER! Your final score is' + result)
  }
    currentTime=currentTime-1
    if(currentTime>-1){
    timeleft.textContent=currentTime;}
}

let timerId = setInterval(countDown, 1000)

moveMole()


})
