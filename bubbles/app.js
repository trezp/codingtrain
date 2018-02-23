let bubble;
let bubbles = [];
const submitBtn = document.querySelector('#submitBtn');
const bubbleNum = document.querySelector('#bubbleNum');
const messages = document.querySelector('#messages');

submitBtn.addEventListener('click', makeNewBubbles);

class Bubble {
  constructor(){
    this.x = random(600);
    this.y = random(400);
  }
  move(){
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show(){
    stroke(random(255), random(255), random(255));
    strokeWeight(3);
    noFill();
    ellipse(this.x, this.y, 34, 34);
  }
}

function makeNewBubbles(){
  const quantity = parseInt(bubbleNum.value);

  if (isNaN(quantity)){
    messages.innerHTML = 'Oops. Please enter a whole number!';
    bubbleNum.value = '';
  } else {
    bubbles = [];
    makeBubbles(quantity);
    messages.innerHTML = '';
    bubbleNum.value = '';
  }
}
function makeBubbles(quantity){
  var numOfBubbles = quantity || 150;
  for(let i = 0; i < numOfBubbles; i++){
    let bubble = new Bubble();
    bubbles.push(bubble);
  }
}
function setup(){
  const canvas = createCanvas(600,400);
  canvas.parent('bubbleContainer')
  makeBubbles();
}

function draw(){
  background(0);
  
  bubbles.forEach(function(bubble){
    bubble.move();
    bubble.show();
  })
}



