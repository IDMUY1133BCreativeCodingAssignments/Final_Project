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

function setup(){
	createCanvas(400,600);
    
    userImg=loadImage("data/basket.png");
    cloudsImg=loadImage("data/cloud.png");
    balloon1Img=loadImage("data/balloon1.png");
    balloon2Img=loadImage("data/balloon2.png");
    balloon3Img=loadImage("data/balloon3.png");
    balloon4Img=loadImage("data/balloon4.png");
    balloon5Img=loadImage("data/balloon5.png");
    bgImg=loadImage("data/bg.png");
    trumpImg=loadImage("data/trump.png");
    
    user=createSprite(width/2,500,50,50); //USER SPRITE
    user.addImage(userImg);
    user.velocity.y=-6;// the rate of user going up
   
    userballoons = new Group();
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
        userballoons[i].velocity.y=-6;//same rate as the user
    }
    
    clouds= new Group();
    enemies= new Group();
    gameover=true;
    updateSprites(false);
    onetimeonly=true;
    unpaused=true;
    
    camera.position.x=width/2;
    
}//close setup

function draw(){
    
    if(gameover && keyWentDown(ENTER))
        newGame();
    
    if(!gameover) {
    
        if (keyDown(LEFT_ARROW) && unpaused){
            user.position.x=constrain(user.position.x-pos,15+user.width/2,width-user.width/2);
            b1.position.x=constrain(b1.position.x-pos,b1.width/2,width-b1.width/2);
            b2.position.x=constrain(b2.position.x-pos,30+b2.width/2,width-b2.width/2);
            b3.position.x=constrain(b3.position.x-pos,60+b3.width/2,width-b3.width/2);
            b4.position.x=constrain(b4.position.x-pos,15+b4.width/2,width-b4.width/2);
            b5.position.x=constrain(b5.position.x-pos,45+b5.width/2,width-b5.width/2);
        }
        if (keyDown(RIGHT_ARROW) && unpaused){
            user.position.x=constrain(user.position.x+pos,user.width/2,width-15-user.width/2);
            b1.position.x=constrain(b1.position.x+pos,b1.width/2,width-60-b1.width/2);
            b2.position.x=constrain(b2.position.x+pos,b2.width/2,width-30-b2.width/2);
            b3.position.x=constrain(b3.position.x+pos,b3.width/2,width-b3.width/2);
            b4.position.x=constrain(b4.position.x+pos,b4.width/2,width-45-b4.width/2);
            b5.position.x=constrain(b5.position.x+pos,b5.width/2,width-15-b5.width/2);
        }
        
        if (frameCount%50===0 && unpaused){
            var cloud=createSprite(random(width),user.position.y-height,100,50);
            cloud.addImage(cloudsImg);
            clouds.add(cloud);
        }
        
        if (frameCount%birdrate===0 && unpaused){//creating bird enemies every 70 frames
            var enemy=createSprite(random(width),user.position.y-height);
            enemy.addImage("makeAmericaGreatAgain",trumpImg);
            enemy.addAnimation("flying","data/birdie0001.png","data/birdie0006.png");
            enemy.changeAnimation("flying");
            var s=int(random(userballoons.length));
            enemy.attractionPoint(5,userballoons[s].position.x,userballoons[s].position.y);
            if (enemy.getDirection()>=90 || enemy.getDirection()<=180){
                enemy.mirrorX(-1);
            }
            if (enemy.getDirection()<90){
                enemy.mirrorX(1);
            }
            console.log(enemy.getDirection());
            enemies.add(enemy);
        }
        if(frameCount%5===0 && unpaused){
            points+=1;
        }
        if (points%50===0 && points>0 && onetimeonly){//possible leveling of birds
            birdrate-=5
            
            onetimeonly=false;
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

    camera.position.y=user.position.y-190;
    
    camera.off();
    background(bgImg);
    camera.on();
    
    enemies.overlap(userballoons,birdHit);
    
    drawSprites(clouds);
    drawSprites(enemies);
    drawSprite(user);
    drawSprite(fakeEnemy);
    tint(255,180);
    drawSprites(userballoons);
    
    noStroke();//ground floor
    fill(122,232,94);
    rect(0,515,width,100);
    
    fill(0);
    textSize(36);
    textAlign(CENTER);
    text(str(points),width/2,user.position.y-400);
    textSize(12);
    text("Press SPACE or P to pause.",width/2,user.position.y-450);
    fill(255);
    textSize(28);
    text("PRESS ENTER TO START",width/2,height-50);
    
    if (keyWentDown(32)||keyWentDown(80)){
        if (unpaused){
            updateSprites(false);
            unpaused=false;
        }
        else{
            updateSprites(true);
            console.log("no");
            unpaused=true;
        }
    }
    
    if (keyWentDown("t")){
        for(i=0;i<enemies.length;i++){
            enemies[i].changeImage("makeAmericaGreatAgain");
            console.log('hi');
        }
    }
    
    
    if (userballoons.length===0){
        updateSprites(false);
        gameover = true;
        var wait=millis();
        if (wait>2000){
            fill(255,0,0);
            textSize(36);
            textAlign(CENTER);
            text("GAME OVER",width/2,user.position.y-190);
            textSize(22);
            text("Play Again? Press Enter.",width/2,user.position.y-170);
            }
        }


}//close draw

function newGame() {
    enemies.removeSprites();
    gameover = false;
    updateSprites(true);
    user.position.x = width/2;
    user.position.y = 500;
    user.velocity.y=-6;
    birdrate=100;
    points=0;
    if( userballoons.length===0){
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
        userballoons[i].velocity.y=-6;//same rate as the user
        }
    }
    unpaused=true;
}

function birdHit(enemy,userballoons){
    userballoons.remove();
    var dir=enemy.getDirection();
    var enemyX=enemy.position.x;
    var enemyY=enemy.position.y;
    console.log(enemies.contains(enemy));
    enemy.remove();
    fakeEnemy=createSprite(enemyX,enemyY);
    fakeEnemy.addAnimation("flying","data/birdie0001.png","data/birdie0006.png");
    fakeEnemy.setSpeed(20,-dir);
    if (dir>=90 || dir<=180){
        fakeEnemy.mirrorX(-1);
        }
    if (dir<90){
        fakeEnemy.mirrorX(1);
        }
}
