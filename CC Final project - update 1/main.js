// main file that will bring everything together
// call all other classes here 
var stage1;

function setup(){
    createCanvas(windowWidth,windowHeight);
    stage1 = new Stage();
}

function draw(){
  stage1.display();
   //ellipse(100, 100, 50, 50);
}