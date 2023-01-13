document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const scoreDisplay = document.querySelector('#score');
  const startButton = document.querySelector('#start');
  const arup = document.querySelector('.aup');
  const ardown = document.querySelector('.adown');
  const arright = document.querySelector('.aright');
  const arleft = document.querySelector('.aleft');

  const width = 20
  let currentIndex = 0
  let appleIndex = 0
  let currentSnake = [2, 1, 0]
  let direction = 1
  let score = 0
  let speed = 0.97
  let intervalTime = 0
  let interval = 0

  function aLeft() {

    if (direction != 1) {
      direction = -1;
    }
  }

  function aUp() {

    if (direction != width) {
      direction = -width;
    }
  }

  function aRight() {
    
    if (direction != -1) {
      direction = 1;
    }
  }

  function aDown() {

    if (direction != -width) {
      direction = width
    }
  }
  document.addEventListener('keydown', control)
  startButton.addEventListener('click', startGame)
  ardown.addEventListener('click', aDown)
  arleft.addEventListener('click', aLeft)
  arup.addEventListener('click', aUp)
  arright.addEventListener('click', aRight)



  function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'));
    squares[appleIndex].classList.remove('apple');
    clearInterval(interval);
    score = 0;
    direction = 1;
    scoreDisplay.innerHTML = score;
    intervalTime = 300;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach(index => squares[index].classList.add('snake'));
    randomApple();
    interval = setInterval(moveOutcomes, intervalTime);
  }


  function moveOutcomes() {
    if (
      (currentSnake[0] + width >= (width * width) && direction === width) || (currentSnake[0] % width === width - 1 && direction === 1) ||
      (currentSnake[0] % width === 0 && direction === -1) ||
      (currentSnake[0] - width < 0 && direction === -width) ||
      squares[currentSnake[0] + direction].classList.contains('snake')
    ) {
      return clearInterval(interval);
    }

    const tail = currentSnake.pop();
    squares[tail].classList.remove('snake');
    currentSnake.unshift(currentSnake[0] + direction);

    if (squares[currentSnake[0]].classList.contains('apple')) {
      squares[currentSnake[0]].classList.remove('apple');
      squares[tail].classList.add('snake');
      currentSnake.push(tail);
      score = score + 1;
      randomApple();
      scoreDisplay.innerHTML = score;
      clearInterval(interval);
      intervalTime = intervalTime * speed;
      interval = setInterval(moveOutcomes, intervalTime);
    }
    squares[currentSnake[0]].classList.add('snake');
  }


  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length);
    }
    while (squares[appleIndex].classList.contains('snake'));

    squares[appleIndex].classList.add('apple');
  }

  function control(e) {



    if (e.keyCode === 39 && direction !== -1) {
      direction = 1 //right arrow
    } else if (e.keyCode === 38 && direction !== width) {
      direction = -width //up
    } else if (e.keyCode === 37 && direction !== 1) {
      direction = -1 //left
    } else if (e.keyCode === 40 && direction !== -width) {
      direction = width //down
    }
  }

})
