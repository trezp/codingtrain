var x; 
var y; 

function setup(){
  createCanvas(400, 400);
  x = 200;
  y = 200;
  background(51);
}

function draw(){
  //var colors = ['blue', 'purple', 'pink', 'orange', 'yellow'];
  //console.log(colors[randColorNum])
  
  //stroke(colors[randColorNum]);
  
  var randWalkerNum = floor(random(4));
  //var randColorNum = floor(random(colors.length - 4));
  var location = floor(random(200));
  var movement = floor(random(4));
  //console.log(randColorNum)
  strokeWeight(4);
  stroke(255);
  point(x,y); 

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
