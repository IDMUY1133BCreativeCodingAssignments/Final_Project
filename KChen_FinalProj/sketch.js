/* This code is made referencing from Khan Academy's 'Forest Environment'
example. : 
https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations/side-scroller/a/forest-environment */

//function Character(x, y){
//    this.x = x;
//    this.y = y;
//    this.img = sprite;
//}
//
//Character.prototype.display = function(){
//    image(this.img, this.x, this.y, 50, 50);
//}
//
//Character.prototype.jump = function(){
//    this.y -= 5;
//}
//
//Character.prototype.fall = function(){
//    this.y += 5;
//}

var tile;
var ground = [];

//var sprite;
//var sample = new Character(50, 50);

var scene1;
var scenery = [];


function preload(){
//    sprite = loadImage("data/sprite.png"); //loads a 50x40 pixel image
    tile = loadImage("data/groundtile.png"); // loads a 50x29 pixel image
    scene1 = loadImage("data/bg1.png"); //loads a 146x350 pixel image
    
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
}

function draw(){
//    background(200, 220, 255);
        
    for (var i = 0; i < scenery.length; i++){
       image(scene1, scenery[i], 0); 
        
        scenery[i] -=1;
        
        if (scenery[i] <= -146){
            scenery[i] = 584;
        }
    }
    
    
    for (var i = 0; i < ground.length; i++){
        image(tile, ground[i], 320);
        
        ground[i] -= 1;
        
        if (ground[i] <= -50){
            ground[i] = width;
        }
    }

    ellipse(50, 300, 50, 50);
//    sample.display();
}
