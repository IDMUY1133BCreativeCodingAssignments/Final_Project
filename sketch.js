var startpos=300;//start character at the middle of screen
var x;
var yspeed=6;
var clouds=[];
var cloudpos=-75;
var enemies;
var enemy1pos=-100;
var score=0;
var x;
var newEnemy=false;

function setup(){
	createCanvas(600,600);
    
    userImg=loadImage("data/balloons-36236_960_720.png");
    enemyImg=loadImage("data/9cprBLgcE.png");
    
    user=createSprite(x,600,50,50);
    user.addImage(userImg);
    user.velocity.y=-6
    
    rectMode(CENTER);
    for(var i=0;i<4;i++){
        clouds[i]=new Cloud(cloudpos,yspeed);//array of cloud objects
        cloudpos-=150;
    }//close for
    enemies= new Group();
//    textFont("Georgia",52);
}//close setup

function draw(){
    background(0,120,130);
    noStroke();
    x=constrain(startpos,25,width-25);//keep character within bounds
    for (var i=0;i<clouds.length;i++){//loop through cloud objects
        clouds[i].move();
        clouds[i].display();
        score+=1;
    }//close for loop
    //console.log(score);
//    fill(0,0,255);
//    text(score,100,100);
//    fill(255);
//    rect(x,500,50,50);//user character
    if (score%200===0){
        var enemy=createSprite(random(width),user.position.y-height,50,50);
        enemy.addImage(enemyImg);
        enemies.add(enemy);
    }
    for (var i = 0; i<enemies.length;i++){
        if(enemies[i].position.y>height+25){
            enemies[i].remove();
        }//close if
    }//close for
    
    drawSprites(enemies);
    drawSprites(user);
}//close draw

function keyPressed(){
    if (keyCode === LEFT_ARROW){//user control to steer character
        startpos-=10//left, right arrows steer
    }//close left if
    if (keyCode === RIGHT_ARROW){
        startpos+=10;
    }//close right if
}
//vertical scroll
function Cloud(cloudpos,yspeed){
    this.xpos=random(width);
    this.ypos=cloudpos;
    this.cloudhe=75;
    this.cloudwi=100;
    this.speed=yspeed;//clouds go down, illusion of character going up
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

function Enemy1(enemy1pos,yspeed,show){
    this.xpos=random(width);
    this.ypos=enemy1pos;
    this.speed=yspeed;
    this.enemy1he=50;
    this.enemy1wi=50;
    this.show=show;
}//close enemy1

Enemy1.prototype.move=function(){
    this.ypos+=this.speed;
    if (this.ypos>height+this.enemy1he/2){
        this.show=false;
    }
}

Enemy1.prototype.display=function(){
    fill(255,0,0);
    rect(this.xpos,this.ypos,this.enemy1he,this.enemy1wi);//temp rect
}//close display method






