
var sample = new Character(50, 50);
var img;
//sample = new Character(50, 50);

function Character(x, y){
    this.x = x;
    this.y = y;
//    this.img = img;
    
    function display(wid, hei){
        image(this.img, this.x, this.y, wid, hei);
    }
    
    function jump(){
        this.y -= 5;
    }
    
    function fall(){
        this.y += 5;
    }
}

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


function preload(){
    img = loadImage("data/sprite.png");
}

function setup(){
    createCanvas(400, 400);
    background(127);
}

function draw(){
    sample.display();
}