//background sprites
var cloudStage;
var landscape1;
var landscape2;
var landscape3;
var landscape4;
var landscape5;
var landscape6;
var landscape7;
var landscape8;

var scenery;

//platform sprites
var babyObstacle;
var babyObstacle2;
var obstaclePath1 = "data/Blocks.png"; //60x15

var babyObstacle3;
var obstaclePath2 = "data/bigBlock.png";
 
//scene count
var count = 0;

//player sprites
var player;
var babyImagePath = "data/Baby.png"; //41x39
//var babyImagePath;
//var player2;



function preload(){
    cloudStage = loadImage("data/clouds.png"); //500x250
    landscape1 = loadImage("data/landscape1.png"); //500x250 
    landscape2 = loadImage("data/landscape2.png");
    landscape3 = loadImage("data/landscape3.png");
    landscape4 = loadImage("data/landscape4.png");
    landscape5 = loadImage("data/landscape5.png");
    landscape6 = loadImage("data/landscape6.png");
    landscape7 = loadImage("data/landscape7.png");
    black = loadImage("data/black.png");
    fall = loadImage("data/fall.png");
    //boyPlayer = loadImage("data/Boy.png"); //25x46
    //manPlayer = loadImage("data/Man.png"); //21x57
}

function setup(){
    createCanvas(500, 250);
    player = new Character(0, 160, babyImagePath);
    
    babyObstacle = createSprite(300, 195);
    babyObstacle.addImage(loadImage(obstaclePath1));
    
    babyObstacle2 = createSprite(360, 175);
    babyObstacle2.addImage(loadImage(obstaclePath1));
    
    babyObstacle3 = createSprite(280, 185);
    babyObstacle3.addImage(loadImage(obstaclePath2));
    
//    player.sprite.collide(babyObstacle);  
}

function draw(){
    stages();
    player.sprite.position.x = player.getX()
    player.sprite.position.y = player.getY()
//    player.sprite.collide(babyObstacle);  
    drawSprites();
//    if(count == 1){
//        babyImagePath = "data/Boy.png";
//        player.changePath(babyImagePath);
//    }
    
    
    //Move player right if key is pressed
    if (player.getIsRight()){
    	console.log("Moving right")
    	player.moveRight()  	
    }

    //Move player left if key is pressed
    else if (player.getIsLeft()){
    	console.log("Moving left")
    	player.moveLeft()
    }
 
    //Make player jump if key is pressed
    if (player.getIsJump() && player.y >= 160){
    	console.log("Jumping")
    	player.jump()
    }
    //Make player fall if key is released
    else{
    	if (player.y < 200){
    		player.fall()
    	}
    }
    
    //Creates a new stage after getting to the end of the screen 
    if (player.x >= 500){
        player.x = 0;
    }   
}