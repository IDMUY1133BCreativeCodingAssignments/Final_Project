var pos = 10;
var sky;
var user;
var userballoons;
var b1,b2,b3,b4,b5;
var clouds;
var enemies;
var score=0;
var userImg,enemyImg,cloudsImg,balloonsImg;
var gameover;
var birdrate=100;
var points=0;
var ballooncolors;


function setup(){
	createCanvas(400,600);
    
    userImg=loadImage("data/balloons-36236_960_720.png");
    enemyImg=loadImage("data/9cprBLgcE.png");
    cloudsImg=loadImage("data/cloud.png");
    balloonsImg=loadImage("data/balloons.png");
    
    user=createSprite(width/2,500,50,50); //USER SPRITE
//    user.addImage(userImg);
    user.shapeColor=color(255);
    user.velocity.y=-6;// the rate of user going up
    
    ballooncolors={b1:color(139,94,178,200),
                   b2:color(49,131,255,200),
                   b3:color(225,255,84),
                   b4:color(255,100,59,200),
                   b5:color(82,255,97,200)}
    
    userballoons = new Group();
    b1 = createSprite(user.position.x-30,user.position.y-100,30,30);
    b1.addImage(balloonsImg);
    tint(139,94,178,200);
    userballoons.add(b1);
    //noTint();
    b2 = createSprite(user.position.x,user.position.y-100,30,30);
    b2.addImage(balloonsImg);
    tint(49,131,255,200);
    userballoons.add(b2);
    //noTint()
    b3 = createSprite(user.position.x+30,user.position.y-100,30,30);
    b3.addImage(balloonsImg);
    tint(225,255,84);
    userballoons.add(b3);
    //noTint();
    b4 = createSprite(user.position.x-15,user.position.y-115,30,30);
    b4.addImage(balloonsImg);
    tint(255,100,59,200);
    userballoons.add(b4);
    //noTint();
    b5 = createSprite(user.position.x+15,user.position.y-115,30,30);
    b5.addImage(balloonsImg);
    tint(82,255,97,200);
    userballoons.add(b5);
    //noTint();
    //userballoons.addImage(balloonsImg);
    //userballoons.shapeColor=color(255);//random colors for each balloon
    
    for (i=0;i<userballoons.length;i++){
        userballoons[i].velocity.y=-6;//same rate as the user
    }
    
    //sky=createSprite(width/2,height/2);
    //sky.shapeColor=color(0);
    //sky.addImage(cloudsImg);
        //img 500x362
    
    clouds= new Group();
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
        if (frameCount%50===0){
            var cloud=createSprite(random(width),user.position.y-height,100,50);
            cloud.addImage(cloudsImg);
            //cloud.shapeColor=color(255,150);
            clouds.add(cloud);
        }
        
        if (frameCount%birdrate===0){//creating bird enemies every 70 frames
            var enemy=createSprite(random(width),user.position.y-height,50,50);
            enemy.addImage(enemyImg);
            var s=int(random(userballoons.length));
            //console.log(s);
            enemy.attractionPoint(5,userballoons[s].position.x,userballoons[s].position.y);
//            }
//            else enemy.attractionPoint(5,random(-90,-70));
            enemies.add(enemy);
        }
        if(frameCount%5===0){
            points+=1;
        }
        if (points%50!=0){
            var onetimeonly=true;
        }
        if (points%50===0 && point!=0 && onetimeonly){//possible leveling of birds
            birdrate-=10
            onetimeonly=false;
            console.log('HEY');
        }
        console.log(onetimeonly);
        console.log(birdrate);
//        else if(points<100){
//            birdrate=90;}
//        else if(points<150){
//            birdrate=80;}
//        else if(points<200){
//            birdrate=}
//        else if(point<250){}
//        else if(points<300){}
//        else if (points<250){}
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
    
    //console.log(user.position.y);
    camera.position.y=user.position.y-190;
//    if (camera.position.y<sky.position.y-sky.height+height/2){
//        sky.position.y=-sky.height;
//    }//vert scroll
//    
    background(182,237,252);
    
    enemies.bounce(userballoons,birdHit);
    
    noTint();
    drawSprites(clouds);
    drawSprites(enemies);
    drawSprite(user);
//    drawSprite(sky);
    for (i=0;i<userballoons.length;i++){
        //tint(ballooncolors[]);
        drawSprite(userballoons[i]);
    }
//    tint(random(255),random(255),random(255),200);
    //drawSprites(userballoons);
    
    noStroke();//ground floor
    fill(122,232,94);
    rect(0,525,width,100);
    
    fill(0);
    textSize(36);
    textAlign(CENTER);
    text(str(points),width/2,user.position.y-400);


}//close draw


function newGame() {
    enemies.removeSprites();
    gameover = false;
    updateSprites(true);
    user.position.x = width/2;
    user.position.y = 500;
//    sky.position.x = width/2;
//    sky.position.y = height/2;
    
}

function birdHit(enemy,userballoons){
    userballoons.remove();
    enemy.remove();
    
}