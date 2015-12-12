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
    user.addImage(userImg);
//    user.shapeColor=color(255);
    user.velocity.y=-6;
    
    sky=createSprite(width/2,height/2);
    //sky.shapeColor=color(0);
    sky.addImage(cloudsImg);
        //img 500x362
    
    enemies= new Group();
    gameover=true;
    updateSprites(false);
    
    camera.position.x=width/2;
    
}//close setup

function draw(){
    
    if(gameover && keyWentDown(ENTER))
        newGame();
    
    if(!gameover) {
    
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
        if(user.overlap(enemies)){
            die();
        }
        if (frameCount%70===0){//creating bird enemies every 70 frames
            var enemy=createSprite(random(width),user.position.y-height,50,50);
            enemy.addImage(enemyImg);
            enemies.add(enemy);
        }
        for (var i = 0; i<enemies.length;i++){//deleting enemies that have passed
            if(enemies[i].position.y>height+25){
                enemies[i].remove();
            }//close if
        }//close for
    }
    
    camera.position.y=user.position.y-100;
    
    if (camera.position.y<sky.position.y-sky.height){
        sky.position.y=-sky.height;
    }//vert scroll
    
    background(182,237,252);

    drawSprites(enemies);
    drawSprite(user);
    drawSprite(sky);
    
}//close draw

function die(){
    updateSprites(false);
    gameOver=true;
}

function newGame() {
    enemies.removeSprites();
    gameover = false;
    updateSprites(true);
    user.position.x = width/2;
    user.position.y = 500;
    sky.position.x = width/2;
    sky.position.y = height/2;
}

