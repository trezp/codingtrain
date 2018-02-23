let bubble;
let bubbles = [];


function makeBubbles(quantity){
  for(let i = 0; i < quantity; i++){
    let bubble = new Bubble();
    bubbles.push(bubble);
  }
}

function setup(){
  createCanvas(600,400);
  makeBubbles(100);
}

function draw(){
  background(0);

  bubbles.forEach(function(bubble){
    bubble.move();
    bubble.show();
  })
}

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

