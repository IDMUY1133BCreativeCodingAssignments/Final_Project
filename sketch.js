//Sharon Lee Final Project

//REFERENCES USED:
//http://p5play.molleindustria.org/examples/index.html?fileName=sprite3.js
//http://p5play.molleindustria.org/examples/index.html?fileName=breakout.js
//http://p5play.molleindustria.org/examples/index.html?fileName=flappyBird.js
//http://p5play.molleindustria.org/docs/index.html
//http://p5js.org/reference/

//original sprite images inspired by...
//https://40.media.tumblr.com/d85caf6012eea80bd824acaf42cba3b0/tumblr_nf6oryfVDy1rmg39ko1_500.png
//http://www.clipartbest.com/cliparts/9cp/rBL/9cprBLgcE.png

var pos = 10;
var user;
var userballoons;
var b1,b2,b3,b4,b5;
var clouds;
var enemies;
var userImg,enemyImg,cloudsImg,balloon1Img,balloon2Img,balloon3Img,balloon4Img,balloon5Img,trumpImg;
var gameover;
var birdrate=100;
var points=0;
var ballooncolors;
var fakeEnemy;
var unpaused;
var trump;

function setup(){
	createCanvas(400,600);
    
    userImg=loadImage("data/basket.png");
    cloudsImg=loadImage("data/cloud.png");
    balloon1Img=loadImage("data/balloon1.png");
    balloon2Img=loadImage("data/balloon2.png");
    balloon3Img=loadImage("data/balloon3.png");
    balloon4Img=loadImage("data/balloon4.png");
    balloon5Img=loadImage("data/balloon5.png");//diff color balloon for specific balloon placed
    bgImg=loadImage("data/bg.png");//background image
    trumpImg=loadImage("data/trump.png");//secret
    
    user=createSprite(width/2,500,50,50); //USER SPRITE
    user.addImage(userImg);
    user.velocity.y=-6;// the rate of user going up
   
    userballoons = new Group();//group of sprites, my balloons
    b1 = createSprite(user.position.x-30,user.position.y-100,30,30);//bottom left, across to right
    b1.addImage(balloon1Img);
    userballoons.add(b1);
    b2 = createSprite(user.position.x,user.position.y-100,30,30);
    b2.addImage(balloon2Img);
    userballoons.add(b2);
    b3 = createSprite(user.position.x+30,user.position.y-100,30,30);
    b3.addImage(balloon3Img);
    userballoons.add(b3);
    b4 = createSprite(user.position.x-15,user.position.y-115,30,30);//top left, across to right
    b4.addImage(balloon4Img);
    userballoons.add(b4);
    b5 = createSprite(user.position.x+15,user.position.y-115,30,30);
    b5.addImage(balloon5Img);
    userballoons.add(b5);
    
    for (i=0;i<userballoons.length;i++){//set balloon speed same as user
        userballoons[i].velocity.y=user.velocity.y;
    }
    
    clouds= new Group();//group for clouds
    enemies= new Group();//group for enemies
    gameover=true;//start off as true in order to have user prompt when to begin
    updateSprites(false);//^
    onetimeonly=true;//control for how bird rate management
    unpaused=true;//game starts out not paused
    trump=false;
    
    camera.position.x=width/2;
    
}//close setup

function draw(){
    
    if(gameover && keyWentDown(ENTER))
        newGame();//allow user to begin by enter key
    
    if(!gameover) {
    
        if (keyDown(LEFT_ARROW) && unpaused){//user steer left
            user.position.x=constrain(user.position.x-pos,15+user.width/2,width-user.width/2);
            b1.position.x=constrain(b1.position.x-pos,b1.width/2,width-b1.width/2);
            b2.position.x=constrain(b2.position.x-pos,30+b2.width/2,width-b2.width/2);
            b3.position.x=constrain(b3.position.x-pos,60+b3.width/2,width-b3.width/2);
            b4.position.x=constrain(b4.position.x-pos,15+b4.width/2,width-b4.width/2);
            b5.position.x=constrain(b5.position.x-pos,45+b5.width/2,width-b5.width/2);
        }
        if (keyDown(RIGHT_ARROW) && unpaused){//user steer right
            user.position.x=constrain(user.position.x+pos,user.width/2,width-15-user.width/2);
            b1.position.x=constrain(b1.position.x+pos,b1.width/2,width-60-b1.width/2);
            b2.position.x=constrain(b2.position.x+pos,b2.width/2,width-30-b2.width/2);
            b3.position.x=constrain(b3.position.x+pos,b3.width/2,width-b3.width/2);
            b4.position.x=constrain(b4.position.x+pos,b4.width/2,width-45-b4.width/2);
            b5.position.x=constrain(b5.position.x+pos,b5.width/2,width-15-b5.width/2);
        }
        
        if (frameCount%50===0 && unpaused){//vertical scroll
            var cloud=createSprite(random(width),user.position.y-height,100,50);
            cloud.addImage(cloudsImg);
            clouds.add(cloud);
        }
        
        if (frameCount%birdrate===0 && unpaused){//creating bird enemies every 70 frames
            var enemy=createSprite(random(width),user.position.y-height);
            enemy.addImage("makeAmericaGreatAgain",trumpImg);//secret
            enemy.addAnimation("flying","data/birdie0001.png","data/birdie0006.png");//bird anim
            if (trump){
                enemy.changeAnimation("makeAmericaGreatAgain");//if t is pressed birdie goes to trump
            }
            else{
            enemy.changeAnimation("flying");
            }
            var s=int(random(userballoons.length));//birds will target balloons
            enemy.attractionPoint(5,userballoons[s].position.x,userballoons[s].position.y);
            if (enemy.getDirection()>=90 || enemy.getDirection()<=180){
                enemy.mirrorX(-1);//based on direction, the bird will face certain direction
            }
            if (enemy.getDirection()<90){
                enemy.mirrorX(1);
            }
            enemies.add(enemy);//bird as group of sprites
        }
        if(frameCount%5===0 && unpaused){//point increase every 5 frames
            points+=1;
        }
        if (points%50===0 && points>0 && onetimeonly){//leveling of birds
            birdrate-=5//every 50 points, # of frames per new bird creation will dec (rate faster)
            
            onetimeonly=false;//allow only once every 50 points
        }
        if (points%50!=0){
            onetimeonly=true;
        }

        for (var i = 0; i<enemies.length;i++){//deleting enemies that have passed
            if(enemies[i].position.y>height+25){
                enemies[i].remove();
            }//close if
        }//close for
        for (var i = 0; i<clouds.length;i++){//deleting clouds that have passed
            if(clouds[i].position.y>height+25){
                clouds[i].remove();
            }//close if
        }//close for
    }

    camera.position.y=user.position.y-190;//follow the user/balloons
    
    camera.off();//background image is still
    background(bgImg);
    camera.on();
    
    enemies.overlap(userballoons,birdHit);//detect overlap of bird with balloons
    
    drawSprites(clouds);//draw al sprite and sprite groups
    drawSprites(enemies);
    drawSprite(user);
    drawSprite(fakeEnemy);
    tint(255,180);//translucent balloons
    drawSprites(userballoons);
    
    noStroke();//ground floor
    fill(122,232,94);
    rect(0,515,width,100);
    
    fill(0);
    textSize(36);
    textAlign(CENTER);
    text(str(points),width/2,user.position.y-400);//display points
    textSize(12);
    text("Press SPACE or P to pause.",width/2,user.position.y-450);//pausing info
    fill(255);
    textSize(28);
    text("PRESS ENTER TO START",width/2,height-50);//enter to start info
    
    if (!unpaused){
        fill(0);
        textSize(18);
        textAlign(CENTER);
        text("PAUSED",width/2,user.position.y-100);
    }
    
    if (keyWentDown(32)||keyWentDown(80)){//actual pause function
        if (unpaused){//PAUSE
            updateSprites(false);
            unpaused=false;
        }
        else{//UNPAUSE
            updateSprites(true);
            unpaused=true;
        }
    }
    
    if (keyWentDown("t")){//secret 
        trump=true;
    }
    
    
    if (userballoons.length===0){//game over when all ballloons have "popped"
        updateSprites(false);
        gameover = true;
        var wait=millis();
        if (wait>2000){
            fill(255,0,0);
            textSize(36);
            textAlign(CENTER);
            text("GAME OVER",width/2,user.position.y-190);//game over text
            textSize(22);
            text("Play Again? Press Enter.",width/2,user.position.y-170);
            }
        }
    //console.log(user.velocity.y);


}//close draw

function newGame() {//resetting values for new game
    enemies.removeSprites();
    clouds.removeSprites();
    gameover = false;
    updateSprites(true);
    user.position.x = width/2;
    user.position.y = 500;
    user.velocity.y=-6;
    birdrate=100;
    points=0;
    if( userballoons.length===0){//if statement for the case of first game
    b1 = createSprite(user.position.x-30,user.position.y-100,30,30);
    b1.addImage(balloon1Img);
    userballoons.add(b1);
    b2 = createSprite(user.position.x,user.position.y-100,30,30);
    b2.addImage(balloon2Img);
    userballoons.add(b2);
    b3 = createSprite(user.position.x+30,user.position.y-100,30,30);
    b3.addImage(balloon3Img);
    userballoons.add(b3);
    b4 = createSprite(user.position.x-15,user.position.y-115,30,30);
    b4.addImage(balloon4Img);
    userballoons.add(b4);
    b5 = createSprite(user.position.x+15,user.position.y-115,30,30);
    b5.addImage(balloon5Img);
    userballoons.add(b5);
    for (i=0;i<userballoons.length;i++){
        userballoons[i].velocity.y=user.velocity.y;//same rate as the user
        }
    }
    unpaused=true;
}

function birdHit(enemy,userballoons){//if two collide, balloon pops, enemy disappears
    userballoons.remove();
    var dir=enemy.getDirection();
    var enemyX=enemy.position.x;
    var enemyY=enemy.position.y;
    enemy.remove();
    fakeEnemy=createSprite(enemyX,enemyY);//"enemy" flying away, though technically removed from sprite group
    if (trump){
        fakeEnemy.addImage("makeAmericaGreatAgain", trumpImg);//secret
    }
    else{
    fakeEnemy.addAnimation("flying","data/birdie0001.png","data/birdie0006.png");}
    fakeEnemy.setSpeed(20,-dir);
    if (dir>=90 || dir<=180){//fly opp direct it came from, facing correct side
        fakeEnemy.mirrorX(-1);
        }
    if (dir<90){
        fakeEnemy.mirrorX(1);
        }
}
