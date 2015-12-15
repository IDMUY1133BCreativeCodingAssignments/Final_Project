var pos = 10;
var sky;
var user;
var userballoons;
var b1,b2,b3,b4,b5;
var enemies;
var score=0;
var userImg,enemyImg,cloudsImg;
var gameover;
var birdrate=70;
var points=0;


function setup(){
	createCanvas(600,600);
    
    userImg=loadImage("data/balloons-36236_960_720.png");
    enemyImg=loadImage("data/9cprBLgcE.png");
    cloudsImg=loadImage("data/bg.png");
    
    user=createSprite(width/2,500,50,50); 
//    user.addImage(userImg);
    user.shapeColor=color(255);
    user.velocity.y=-6;
    
    userballoons = new Group();
    
    b1 = createSprite(user.position.x-30,user.position.y-100,30,30);
    userballoons.add(b1);
    b2 = createSprite(user.position.x,user.position.y-100,30,30);
    userballoons.add(b2);
    b3 = createSprite(user.position.x+30,user.position.y-100,30,30);
    userballoons.add(b3);
    b4 = createSprite(user.position.x-15,user.position.y-115,30,30);
    userballoons.add(b4);
    b5 = createSprite(user.position.x+15,user.position.y-115,30,30);
    userballoons.add(b5);
    userballoons.shapeColor=color(255);
    
    for (i=0;i<userballoons.length;i++){
        userballoons[i].velocity.y=-6;
    }
    
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
            user.position.x=constrain(user.position.x-pos,15+user.width/2,width-user.width/2);
            b1.position.x=constrain(b1.position.x-pos,b1.width/2,width-b1.width/2);
            b2.position.x=constrain(b2.position.x-pos,30+b2.width/2,width-b2.width/2);
            b3.position.x=constrain(b3.position.x-pos,60+b3.width/2,width-b3.width/2);
            b4.position.x=constrain(b4.position.x-pos,15+b4.width/2,width-b4.width/2);
            b5.position.x=constrain(b5.position.x-pos,45+b5.width/2,width-b5.width/2);
        }
        if (keyDown(RIGHT_ARROW)){
            user.position.x=constrain(user.position.x+pos,user.width/2,width-15-user.width/2);
            b1.position.x=constrain(b1.position.x+pos,b1.width/2,width-60-b1.width/2);
            b2.position.x=constrain(b2.position.x+pos,b2.width/2,width-30-b2.width/2);
            b3.position.x=constrain(b3.position.x+pos,b3.width/2,width-b3.width/2);
            b4.position.x=constrain(b4.position.x+pos,b4.width/2,width-45-b4.width/2);
            b5.position.x=constrain(b5.position.x+pos,b5.width/2,width-15-b5.width/2);
        }
        
        if (userballoons.length===0){
            gameover = true;
            println("game is over");
        }

//        if(user.position.x<0){//aka constraining to keep user within width bounds
//            user.position.x=user.width/2;
//        }
//        if(user.position.x>width){
//            user.position.x=width-user.width/2;
//        }
        if (frameCount%birdrate===0){//creating bird enemies every 70 frames
            var enemy=createSprite(random(width),user.position.y-height,50,50);
            enemy.addImage(enemyImg);
            if (enemy.position.x<width/2){
                enemy.addSpeed(10,random(-90,45));
            }
            else enemy.addSpeed(10,random(225,270));
            enemies.add(enemy);
        }
        if(frameCount%5===0){
            points+=1;
        }
        if (points<50){
            birdrate=85;
        }
        else if(points<100){
            birdrate=100;
        }
        else if(points<150){
            birdrate=200;
        }
        for (var i = 0; i<enemies.length;i++){//deleting enemies that have passed
            if(enemies[i].position.y>height+25){
                enemies[i].remove();
            }//close if
        }//close for
    }
    
    console.log(user.position.y);
    camera.position.y=user.position.y-100;
    
    if (camera.position.y<sky.position.y-sky.height+height/2){
        sky.position.y=-sky.height;
    }//vert scroll
    
    background(182,237,252);
    
    userballoons.bounce(enemies,birdHit);

    drawSprites(enemies);
    drawSprite(user);
    drawSprite(sky);
    drawSprites(userballoons);
    
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

function birdHit(userballoons,enemy){
    userballoons.remove();
    enemy.remove();
}