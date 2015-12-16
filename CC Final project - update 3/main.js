// main file that will bring everything together
// call all other classes here 
var stage1;
var char1;


function setup(){
    createCanvas(windowWidth,windowHeight);
    stage1 = new Stage();
    char1 = new Character();
    
}

function draw(){
  stage1.display();
  char1.strawberry(windowWidth/2, (8/10)*windowHeight);    
   //ellipse(100, 100, 50, 50);
}