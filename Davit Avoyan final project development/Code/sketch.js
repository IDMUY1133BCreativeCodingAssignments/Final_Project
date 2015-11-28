var leo;  //hero


function setup(){
	createCanvas(800, 600);
	leo = new Hero(10); 


    orange = color(200, 100, 10);  //colors for heroes and others
    blue = color(25, 164, 250);
    
    lev1_size = 30;  //size of the hero in level 1
    

}

function draw(){
	background(0);
    
    //hero methods on level 1
    leo.borders();
    leo.update();  
    leo.display(blue, lev1_size);
}

