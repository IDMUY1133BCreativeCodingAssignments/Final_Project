var startpos=300;//start character at the middle of screen
var x;
var clouds=[];
var cloudpos=-75

function setup(){
    frameRate=240;
	createCanvas(600,600);
    rectMode(CENTER);
    for(var i=0;i<4;i++){
        clouds[i]=new Cloud(cloudpos);//array of cloud objects
        cloudpos-=150;
    }//close for
}//close setup

function draw(){
    background(50,100,100);
    noStroke();
    fill(255);
    x=constrain(startpos,25,width-25);//keep character within bounds
    for (var i=0;i<clouds.length;i++){//loop through cloud objects
        clouds[i].move();
        clouds[i].display();
    rect(x,500,50,50);//user character
    }//close for loop
}//close draw

function keyPressed(){
    if (keyCode === LEFT_ARROW){//user control to steer character
        startpos-=10//left, right arrows steer
    }//close left if
    if (keyCode === RIGHT_ARROW){
        startpos+=10;
    }//close right if
}//vertical scroll
function Cloud(cloudpos){
    this.xpos=random(width);
    this.ypos=cloudpos;
    this.cloudhe=75;
    this.cloudwi=100;
    this.speed=3;//clouds go down, illusion of character going up
}//close cloud

Cloud.prototype.move=function(){
    if(this.ypos>height+this.cloudhe/2){//start again from top
        this.ypos=-this.cloudhe/2;
    }//close ypos if
    this.ypos+=this.speed;
}//cloud move method

Cloud.prototype.display=function(){
    fill(255,100);
    rect(this.xpos,this.ypos,this.cloudwi,this.cloudhe);//temp rect
}//close display method





