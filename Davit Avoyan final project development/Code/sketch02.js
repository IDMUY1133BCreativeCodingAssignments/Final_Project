var leo;  //hero

var otherArray = []; //array for Others

var lev = 1;  //keeping track of the level

var SCENE_W = 1600;  //scene size
var SCENE_H = 800;

var hero_lev1_size = 30;  //size of the hero in level 1

var other_lev1_speed = 3;  //size of other 



function setup(){
	createCanvas(400, windowHeight);
	leo = new Hero(10, hero_lev1_size); 


    orange = color(200, 100, 10);  //colors for heroes and others
    blue = color(25, 164, 250);
    
    for(var i = 0; i < 25; i++){  //creating instances of Other and storing them in the array
        otherArray[i] = new Other(10, hero_lev1_size)
    }
        
}

function draw(){
	background(250, 200, 180);
    
    fill(255);
    textSize(24);
    //text("Press S to start! Lead Leo to freedom.", 20, 440);

    
    //function mousePressed(){
        text("Level "+lev, 160, 40);  //what level are we on


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
            leo.checkLives()
            text(leo.checkLives(), 100, 400);  //check if it prints true or false
            if(leo.checkLives() === false){  //if hero is out of lives, game is over
                background(250, 200, 180);
                fill(255);
                textSize(24);
                text("Game over", 135, 200);
                textSize(18);
                text("You had a good run", 115, 250);
                textSize(40);
                /*startButton = createButton("Start over"); 
                startButton.position(105, 350);
                startButton.mousePressed(draw());
                exit();*/ 
            };

            for(var i = 0; i < otherArray.length-20; i++){  //calling the methods for each stored Other instance from the array
                 otherArray[i].update(other_lev1_speed);
                leo.collisionCheck(otherArray[i]);
            }

        }
    
        /*if(lev = 2){  //for level 2: more powerful others and harder conditions
            leo.borders();
            leo.update();  
            leo.display();
            for(var i = 0; i < otherArray.length-18; i++){  //calling the methods for each stored Other instance from the array
                 otherArray[i].update(other_lev1_speed+2);
                leo.collisionCheck(otherArray[i]);
            }
        }*/
    
//}
        
        
    }

  
