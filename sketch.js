var pos = 10;
var sky;
var user;
var enemies;
var score=0;
var userImg,enemyImg,cloudsImg;
var gameover;

function setup(){
	createCanvas(600,600);
    
    userImg=loadImage("data/balloons-36236_960_720.png");
    enemyImg=loadImage("data/9cprBLgcE.png");
    cloudsImg=loadImage("data/bg.png");
    
    user=createSprite(width/2,500,50,50);
    //user.addImage(userImg);
    user.shapeColor=color(255);
    user.velocity.y=-6
    
    sky=createSprite(width/2,height/2,width,height);
    sky.addImage(cloudsImg);
        //img 500x362
    
    enemies= new Group();
    
    camera.position.x=width/2;
    
    updateSprites(true);
}//close setup

function draw(){
    background(182,237,252);
    
    if (keyDown(LEFT_ARROW)){
        user.position.x-=pos;
    }
    if (keyDown(RIGHT_ARROW)){
        user.position.x+=pos;    
    }
    if(user.position.x<0){//aka constraining to keep user within width bounds
        user.position.x=user.width/2;
    }
    if(user.position.x>width){
        user.position.x=width-user.width/2;
    }
    if (frameCount%70===0){
        var enemy=createSprite(random(width),user.position.y-height,50,50);
        enemy.addImage(enemyImg);
        enemies.add(enemy);
    }
    for (var i = 0; i<enemies.length;i++){
        if(enemies[i].position.y>height+25){
            enemies[i].remove();
        }//close if
    }//close for
    console.log(user.position.x);
    camera.position.y=user.position.y-100;
    
    //sky vertical scroll
    if (camera.position.y<sky.position.y-100-sky.height){
        sky.position.y=-sky.height;
    }
    
    drawSprites(enemies);
    drawSprite(user);
    drawSprite(sky);
    ;
}//close draw
