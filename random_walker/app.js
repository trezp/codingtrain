let x; 
let y;

function setup(){
  createCanvas(400, 400);
  x = 200;
  y = 200;
  background(51);
}

function draw(){
  makeWalker();
}

function getRand(max){
  return floor(random(max));
}

function getRandomColor(){
  const colors = ['blue', 'purple', 'pink', 'orange', 
  'yellow', 'aqua', 'tomato', 'teal', 'red', 'white', 'black'];
  return colors[floor(random(colors.length - 1))];
}

function makeWalker(randNum){
  const color = getRandomColor();
  const randWalkerNum = getRand(4);
  const randPointX = getRand(height);
  const randPointY = getRand(width)
  const movement = getRand(10)

  point(x,y);
  strokeWeight(getRand(8));
  stroke(color);

  if (randWalkerNum === 0){
    x = x + movement;
  } else if (randWalkerNum === 1) {
    x = x - movement;
  } else if (randWalkerNum === 2){
    y = y + movement;
  } else {
    y = y - movement;
  }
  
}
