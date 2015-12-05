var leo;  //hero
var lev = 1;

var SCENE_W = 1600;  //scene size
var SCENE_H = 800;

var hero_lev1_size = 30;  //size of the hero in level 1



function setup(){
	createCanvas(800, 600);
	leo = new Hero(10, hero_lev1_size); 


    orange = color(200, 100, 10);  //colors for heroes and others
    blue = color(25, 164, 250);
        

}

function draw(){
	background(250, 200, 180);
    
    //hero methods on level 1
    if(lev = 1){
        /*help beat Social Anxiety Disorder
        decrease the percentage of people suffering
        from SAD by 
        getting from A to B following the rules   
        */
        leo.borders();
        leo.update();  
        leo.display();
    }
}

