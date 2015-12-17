function Flower(){ //constructor
    this.floLocX = windowWidth/2;
    this.floLocY = windowHeight/2;
    this.run = 1;
}

Flower.prototype.breathe = function(bckgFill, colorFill){
    push();
    if(this.run == 1){
    background(bckgFill); 
    this.milliseconds = millis();  
    this.fourSecond = this.milliseconds + 4000;
    this.sevenSecond = this.fourSecond + 7000;
    this.eightSecond = this.sevenSecond + 8000;
    this.run = 2; //prevents seconds from constantly updating
    }
    fill(colorFill, 150);
    noStroke();
    translate(this.floLocX, this.floLocY); //makes sure it rotates around middle, not origin
     if(millis()< this.fourSecond){
        rotate(PI/3);
        ellipse(0, 30, 20, 80); //adds two petals per time intervals
        rotate(PI/3);
        ellipse(0, 30, 20, 80);
    }
    else if(millis() < this.sevenSecond){
        rotate(PI);
        ellipse(0, 30, 20, 80);
        rotate(PI);
        ellipse(0, 30, 20, 80);
    }
   else if(millis() < this.eightSecond){
       rotate(5*PI/3);
        ellipse(0, 30, 20, 80);
       rotate(5*PI/3);
       ellipse(0, 30, 20,80);
    }
     else if(millis() > this.eightSecond){
    background(mint);
     this.milliseconds = millis();
        this.fourSecond = this.milliseconds + 4000;
        this.sevenSecond = this.fourSecond + 7000;
        this.eightSecond = this.sevenSecond + 8000; 
    } 
    pop();
}
Flower.prototype.breatheDisplay = function(colorFill){
    push();
    fill(colorFill);
    noStroke();
    ellipse(this.floLocX, this.floLocY, 20, 20);
    pop();
}
Flower.prototype.reset = function(){ //normalizes values when buttons pressed
   this.floLocX = windowWidth/2;
    this.floLocY = windowHeight/2;
    this.run = 1; 
    
}