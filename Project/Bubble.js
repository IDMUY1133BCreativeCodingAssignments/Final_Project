function Bubble(){
    this.bubbLocX = windowWidth/2;
    this.bubbLocY = windowHeight/2;
    this.run = 1;
}

Bubble.prototype.breathe = function(){ //maybe accept parameter that tells it how to update the location?
    
if(this.run == 1){ //prevents fourSecond, sevenSecond, and eightSecond from constantly updating
    this.milliseconds = millis();  
    this.fourSecond = this.milliseconds + 4000;
    this.sevenSecond = this.fourSecond + 7000;
    this.eightSecond = this.sevenSecond + 8000;
    this.run = 2;
    }
    
    if(millis()<this.fourSecond){
        this.bubbLocY = this.bubbLocY - 1 ;
    }
    else if(millis() < this.sevenSecond){
        this.bubbLocY = this.bubbLocY;
    }
   else if(millis() < this.eightSecond){
        this.bubbLocY = this.bubbLocY + .5;
    }
     else if(millis() > this.eightSecond){
        this.milliseconds = millis();
        this.fourSecond = this.milliseconds + 4000;
        this.sevenSecond = this.fourSecond + 7000;
        this.eightSecond = this.sevenSecond + 8000; 
     //runAgain(); 
    }
}

Bubble.prototype.breatheDisplay = function(bckgFill, colorFill){
    background(bckgFill);
    fill(colorFill);
    noStroke();
    ellipse(this.bubbLocX, this.bubbLocY, 50, 50);
    this.offset = random(-1, 1);
    //bubbLocY++;
    this.bubbLocX = this.offset + this.bubbLocX;
}

Bubble.prototype.playSong = function(song){
    song.play();
    song.loop();
}

Bubble.prototype.stopSong = function(song){
    song.stop();
}
Bubble.prototype.reset = function(){
    this.bubbLocX = windowWidth/2;
    this.bubbLocY = windowHeight/2;
    this.run = 1;
}
function runAgain(){
    this.milliseconds = millis();
    this.fourSecond = this.milliseconds + 4000;
    this.sevenSecond = this.fourSecond + 7000;
    this.eightSecond = this.sevenSecond + 8000; 
}
