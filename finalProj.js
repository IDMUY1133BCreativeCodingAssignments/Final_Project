//galaxy builder: http://29a.ch/sandbox/2011/neonflames/# for inspo
//the person also put up a github of his code for that ^ look at it for help
// give person the option of adding little stars too: http://billsnyderastrophotography.com/wp-content/uploads/2012/10/M31-Andromeda-Galaxy_color-from-Martin-Resize.jpg 
//luminescent stars and stuff
//when they press down the mouse different bits of music play (but only when they press)  
//work on drawing when the person clicks 
//let them draw their own constellations? :http://p5js.org/examples/demos/Hello_P5_Drawing.php 
//http://zenbullets.com/book.php 

// 4 7 8 breathing

//GOAL: GET BRUSHSTROKES TO COME OUT WHEN MOUSE PRESSED 

function setup(){
    createCanvas(500, 500);
    background(0);
    
    //the colors that you can choose from
    var red = color(255, 0, 0);
    var orange = color(204, 102, 0);
    var yellow = color(204, 153, 0);
    var green = color(0, 255, 0);
    var blue = color(0, 0, 255);
    var violet = color(255, 0, 255);
    var white = color(255, 255, 255);
    var black = color(0, 0, 0);

}

function draw(){
    noStroke();
    fill(green);
}

function palette(){ 
    for(var i = 0; i < 8; i ++){
     ellipse(25, 25, 10, 10);  //use this to draw the palette colors?  
        
    }
}
function mouseDragged(){
  ellipse(mouseX, mouseY, 20, 20);  
    
}