//Player sprites
var playerImage
var player

//Tile sprites
var tile;
var ground = [];

//Scenery sprites
var scene1;
var scenery = [];


 

function preload(){
    tile = loadImage("data/groundtile.png"); // loads a 50x29 pixel image
    scene1 = loadImage("data/bg1.png"); //loads a 146x350 pixel image
    playerImage = loadImage("data/sprite.png"); //loads a 50x40 pixel image
    
    for (var i = 0; i < 11; i++){
        ground.push(i*50);
    }
    
    for (var i = 0; i < 5; i++){
        scenery.push(i*146);
    }
}

function setup(){
    createCanvas(500, 350);
    background(220, 220, 255);
    player = new Character(50, 290, playerImage); 
}

function draw(){
	drawBackground()
    drawTiles()
    scrollBackground()

    //move player right if key is pressed
    if (player.getIsRight()){
    	console.log("Moving right")
    	player.moveRight()
    	
    }

    //move player left if key is pressed
    else if (player.getIsLeft()){
    	console.log("Moving left")
    	player.moveLeft()
    }

    //make player jump if key is pressed
    if (player.getIsJump()){
    	console.log("Jumping")
    	player.jump()
    }
    //Make player fall if key is released
    else{
    	if (player.y < 290){
    		player.fall()
    	}

    }

    player.draw()

}