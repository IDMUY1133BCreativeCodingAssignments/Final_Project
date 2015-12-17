//The Nature of Code by Daniel Shiffman - http://natureofcode.com
//p5.js - the p5.play library's examples and references - http://p5play.molleindustria.org/
//I used the programs Photoshop and ASESPRITE to make the art assets!
//Undertale's soundtrack was used for the prebattle and battle music! (careful if you wanna play it, the music files spoil some of the game)
//1012 lines! (including spaces and comments) My hands are hurting as I type this! :,)
var hearticon; //heart
var skullicon; //skull
var battlebackground; //trippy background
var sfearstart; //the first stage of the boss
var sfearpissed; //the 2nd phase of the boss
var sfearinfuriated; //Final phase of the boss
var sfeardead; //Beat the boss!
var bosstheme; //unused other music
var sfearx = 300; //boss's x position
var sfeary = 150; //boss's y position
var floatlimit = 270; // what keeps the boss moving up and down
var speed = 1; //boss's vertical speed
var speed2 = 15; //boss's other vertical speed
var pixel; //pixel font
var bosshploss = 0; //gray "health loss" bar
var bhealth = "10/10"; //numerical boss hp value
var yourhp = "10/10"; //numerical hero hp value
var opening = "SFEAR attacks!"; //first text before battle
var pressthistofight = "Press 'z' to battle!"; //instructions to start battle text
var tips = "Magic only works on even turns! It will default to FIGHT on odd turns.";
var tips2 = "You only have 1 healing item! (Fully Heals!)";
var fight = "FIGHT"; //access to fight command text
var magic = "MAGIC"; //access to magic command text
var item = "ITEM"; //access to items text
var whichturn = "Turn 1";
var kombat = "FINISH HIM";
var position; //horizontal positioning
var velocity; //horizontal speed
var acceleration; //what keeps him moving side to side consistently
var theme2; //other unused theme
var asgore1; //current boss theme
var asgore2; //2nd phase current boss theme
var finalboss; //Final phase current boss theme
var battle = false; //battle start detector boolean
var backdrop = 255; //background variable
var fightx; //distance from FIGHT needed to click to activate
var magicx; //distance from MAGIC needed to click to activate
var itemx; //distance from ITEM needed to click to activate
var fightcolor = 255; //text color
var magiccolor = 255; //text color
var itemcolor = 255; //text color
var fightdetector1 = false;
var magicdetector1 = false;
var count = 1;
var turncorrecter = false;// FIX FOR 8 to 6!
var win = false;
var herohp = 0; //hero health
var itemused = false;
var itemavailable = "1 Nice Cream";
var itemgone = "0 Nice Cream";
var bossattack;
var test = 100; //I turned this test into the background spinny things for aesthetics!
var hpdetector = false; //so herohp works
var lose; //broken heart for lose screen

function preload(){
  hearticon = loadImage('data/heart.png');
  skullicon = loadImage('data/pixelskull.png');
  battlebackground = loadImage('data/Sfearbattle.png');
  sfearstart = loadAnimation("data/Sfear0001.png"); //yes the boss monster is named "Sfear", genius right?
  bosstheme = loadSound('data/toby fox - UNDERTALE Soundtrack - 79 Your Best Nightmare.mp3');
  pixel = loadFont('data/pixel.otf');
  theme2 = loadSound('data/toby fox - UNDERTALE Soundtrack - 80 Finale.mp3');
  asgore1 = loadSound('data/toby fox - UNDERTALE Soundtrack - 76 Bergentrückung.mp3');
  asgore2 = loadSound('data/toby fox - UNDERTALE Soundtrack - 77 ASGORE.mp3');
  finalboss = loadSound('data/toby fox - UNDERTALE Soundtrack - 87 Hopes and Dreams.mp3');
  sfearpissed = loadAnimation('data/Sfear0001.png', 'data/Sfear0010.png');
  sfearinfuriated = loadAnimation('data/Sfear0010.png', 'data/Sfear0014.png');
  sfeardead = loadAnimation('data/Sfear0015.png');
  lose = loadImage('data/brokenheart.png');
}

function setup(){ //setup is apparently where music comes from
  createCanvas(800,600);
  frameRate(60);
  smooth();
  keyTyped();
  music();
  position = createVector(-100, 0);
  velocity = createVector(1, 0);
  acceleration = createVector(1, 0);
}

function draw(){
  background(battlebackground);
  var test = random(1, 30);
  noStroke();
  fill(0, 200, 0);
  var bossattack = ellipse(270, 230, test, 100); //1 is 1DMG attack and 2 is 3DMG attack
  ellipse(100, 350, test, 100);
  ellipse(600, 320, test, 100);
  ellipse(740, 220, test, 100);
  //bossturn();
  allthestuffsodrawcanlookniceandclean();
  fill(255);
  fightx = dist(mouseX, mouseY, 205, 85);
  magicx = dist(mouseX, mouseY, 405, 85);
  itemx = dist(mouseX, mouseY, 605, 85);
  fightswitches();
  if(yourhp == "0/10"){
    fill(0);
    rect(0, 0, 800, 600);
    fill(255);
    textFont(pixel, 70);
    text("GAME OVER", 125, 150);
    image(lose, -20, 0);
    asgore2.stop();
  }//if lose
}//draw

function allthestuffsodrawcanlookniceandclean(){
  boss();
  bossmoving();
  topbox();
  bottombox();
  herohealth();
  bosshp();
  icons();
  allthetext();
}

function fightswitches(){
  switch(count){
    case 1:
      if(fightx < 50 && fightdetector1 == true){
        fightdetector1 = false;
      }
      if(magicx < 50 && magicdetector1 == true){
        magicdetector1 = false;
      }
      break;                //lol this is here so 9/10 boss hp works \(^.^)/
    case 2: //odd turn
    whichturn = "Turn 2";
      if(fightx < 50 && bhealth == "10/10"){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 25; //"lower" the boss's visual health
        bhealth = "9/10"; //lower the boss's numerical health
      }
      if(magicx < 50 && bhealth == "10/10"){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 25; //"lower" the boss's visual health
        bhealth = "9/10"; //lower the boss's numerical health
      }
      break;
    case 3: //even turn
    whichturn = "Turn 3";

      if(fightx < 50 && bhealth == "9/10"){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 50; //"lower" the boss's visual health
        bhealth = "8/10"; //lower the boss's numerical health
      }
      if(magicx < 50 && bhealth == "9/10"){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 75;
        bhealth = "7/10";
        sfearstart = sfearpissed;
        sfearpissed.looping = false;
      }
      break;
    case 4: //odd turn
    whichturn = "Turn 4";
      if(fightx < 50 && bhealth == "8/10"){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 75; //"lower" the boss's visual health
        bhealth = "7/10"; //lower the boss's numerical health
        turncorrecter = false;
        sfearstart = sfearpissed;
        sfearpissed.looping = false;
      }
      if(fightx < 50 && bhealth == "7/10"){
        if(turncorrecter == true){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 100; //"lower" the boss's visual health
        bhealth = "6/10"; //lower the boss's numerical health
        turncorrecter = false;
        }//turncorrecter if
      }//if
      if(magicx < 50 && bhealth == "8/10"){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 75;
        bhealth = "7/10";
        sfearstart = sfearpissed;
        sfearpissed.looping = false;
      }
      if(magicx < 50 && bhealth == "7/10"){
        if(turncorrecter == true){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 100;
        bhealth = "6/10";
        }
      }
      break;
    case 5: //even turn
    whichturn = "Turn 5";
      if(fightx < 50 && bhealth == "7/10"){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 100; //"lower" the boss's visual health
        bhealth = "6/10"; //lower the boss's numerical health
        turncorrecter = false;
      }
      if(fightx < 50 && bhealth == "6/10"){
        if(turncorrecter == true){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 125; //"lower" the boss's visual health
        bhealth = "5/10"; //lower the boss's numerical health
        turncorrecter = false;
        }//turncorrecter if
      }//if
      if(magicx < 50 && bhealth == "7/10"){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 125;
        bhealth = "5/10";
      }
      if(magicx < 50 && bhealth == "6/10"){
        if(turncorrecter == true){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 150;
        bhealth = "4/10";
        sfearstart = sfearinfuriated;
        sfearinfuriated.looping = false;
        }
      }
      break;
    case 6: //odd turn
    whichturn = "Turn 6";
      if(fightx < 50 && bhealth == "6/10"){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 125; //"lower" the boss's visual health
        bhealth = "5/10"; //lower the boss's numerical health
        turncorrecter = false;
      }
      if(fightx < 50 && bhealth == "5/10"){
        if(turncorrecter == true){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 150; //"lower" the boss's visual health
        bhealth = "4/10"; //lower the boss's numerical health
        sfearstart = sfearinfuriated;
        sfearinfuriated.looping = false;
        turncorrecter = false;
        }// turncorrecter if
      }// if
      if(fightx < 50 && bhealth == "4/10"){ //CHECK THIS
        if(turncorrecter == true){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 175; //"lower" the boss's visual health
        bhealth = "3/10"; //lower the boss's numerical health
        turncorrecter = false;
        }//turncorrecter if
      }// if
      if(magicx < 50 && bhealth == "6/10"){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 125;
        bhealth = "5/10";
      }
      if(magicx < 50 && bhealth == "5/10"){
        if(turncorrecter == true){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 150;
        bhealth = "4/10";
        sfearstart = sfearinfuriated;
        sfearinfuriated.looping = false;
        }
      }
      if(magicx < 50 && bhealth == "4/10"){
        if(turncorrecter == true){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 175;
        bhealth = "3/10";
        }
      }
      break;
    case 7: 
    whichturn = "Turn 7"; //even turn
      if(fightx < 50 && bhealth == "5/10"){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 150; //"lower" the boss's visual health
        bhealth = "4/10"; //lower the boss's numerical health
        sfearstart = sfearinfuriated;
        sfearinfuriated.looping = false;
        turncorrecter = false;
      }//if
      if(fightx < 50 && bhealth == "4/10"){
        if(turncorrecter == true){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 175; //"lower" the boss's visual health
        bhealth = "3/10"; //lower the boss's numerical health
        turncorrecter = false;
        }//turncorrecter if
      }//if
      if(fightx < 50 && bhealth == "3/10"){
        if(turncorrecter == true){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 200; //"lower" the boss's visual health
        bhealth = "2/10"; //lower the boss's numerical health
        turncorrecter = false;
        }//turncorrecter if
      }//if
      if(magicx < 50 && bhealth == "5/10"){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 175;
        bhealth = "3/10";
        sfearstart = sfearinfuriated;
        sfearinfuriated.looping = false;
      }
      if(magicx < 50 && bhealth == "4/10"){
        if(turncorrecter == true){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 200;
        bhealth = "2/10";
        }
      }
      if(magicx < 50 && bhealth == "3/10"){
        if(turncorrecter == true){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 225;
        bhealth = "1/10";
        }
      }
      break;
    case 8: //odd turn
    whichturn = "Turn 8"; 
      if(fightx < 50 && bhealth == "4/10"){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 175; //"lower" the boss's visual health
        bhealth = "3/10"; //lower the boss's numerical health
        turncorrecter = false;
      }//if
      if(fightx < 50 && bhealth == "3/10"){
        if(turncorrecter == true){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 200; //"lower" the boss's visual health
        bhealth = "2/10"; //lower the boss's numerical health
        turncorrecter = false;
        }//turncorrecter if
      }//if
      if(fightx < 50 && bhealth == "2/10"){
        if(turncorrecter == true){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 225; //"lower" the boss's visual health
        bhealth = "1/10"; //lower the boss's numerical health
        turncorrecter = false;
        }//turncorrecter if
      }//if
      if(fightx < 50 && bhealth == "1/10"){
        if(turncorrecter == true){
        fightdetector1 = false;
        magiccolor = 255;
        bosshploss = 250;
        bhealth = "0/10";
        fightcolor = 255;
        magiccolor = 0;
        itemcolor = 0;
      fight = kombat;
      textFont(pixel, 30);
        win = true;
        turncorrecter = false;
        }//turncorrecter if
      }//if
      if(magicx < 50 && bhealth == "4/10"){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 175;
        bhealth = "3/10";
      }
      if(magicx < 50 && bhealth == "3/10"){
        if(turncorrecter == true){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 200;
        bhealth = "2/10";
        }
      }
      if(magicx < 50 && bhealth == "2/10"){
        if(turncorrecter == true){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 225;
        bhealth = "1/10";
        }
      }
      if(magicx < 50 && bhealth == "1/10"){
        if(turncorrecter == true){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 250;
        bhealth = "0/10";
        fightcolor = 255;
        magiccolor = 0;
        itemcolor = 0;
      fight = kombat;
      textFont(pixel, 30);
        win = true;
        }
      } 
      break;
    case 9: //even turn      
    whichturn = "Turn 9";   
    if(win == true){
      bosshploss = 250;
      sfearstart = sfeardead;
      speed = 0;
      speed2 = 0;
      position.x = width/2;
      background(150, 100);
      fill(0);
      strokeWeight(3);
      stroke(200);  
      rect(50, 425, 700, 150);
      noFill();
      fill(255, 0, 0);
      noStroke();
      rect(125, 475, 350, 40);
      noFill();
      image(hearticon, -310, 235);
      fill(0);
      strokeWeight(3);
      stroke(200);
      rect(50, 25, 700, 125);
      noFill(); 
      textFont(pixel, 30);
      fill(255);
      stroke(0);
      text("YOU WON!", 90, 80);
      textFont(pixel, 20);
      text("You gain no EXP because this is the whole game lol", 90, 120);
      textFont(pixel, 30);
      text(yourhp, 120, 463);
      asgore2.stop();
    }//if win
      if(fightx < 50 && bhealth == "3/10"){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 200; //"lower" the boss's visual health
        bhealth = "2/10"; //lower the boss's numerical health
        turncorrecter = false;
      }//if
      if(fightx < 50 && bhealth == "2/10"){
        if(turncorrecter == true){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 225; //"lower" the boss's visual health
        bhealth = "1/10"; //lower the boss's numerical health
        turncorrecter = false;
        }//turncorrecter if
      }//if
      if(fightx < 50 && bhealth == "1/10"){
        if(turncorrecter == true){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 250; //"lower" the boss's visual health
        bhealth = "0/10"; //lower the boss's numerical health
        win = true;
      fightcolor = 0;
      magiccolor = 0;
      itemcolor = 0;
      fill(255);
      text("FINISH HIM!", 150, 90);
      turncorrecter = false;
        }//turncorrecter if
      }//if
      if(magicx < 50 && bhealth == "3/10"){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 225;
        bhealth = "1/10";
      }//if
      if(magicx < 50 && bhealth == "2/10"){
        if(turncorrecter == true){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 225;
        bhealth = "0/10";
        win = true;
        fightcolor = 0;
      magiccolor = 0;
      itemcolor = 0;
      fill(255);
      text("FINISH HIM!", 150, 90);
        }
      }//if
      if(magicx < 50 && bhealth == "1/10"){
        if(turncorrecter == true){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 225;
        bhealth = "0/10";
        win = true;
      fightcolor = 0;
      magiccolor = 0;
      itemcolor = 0;
      fill(255);
      text("FINISH HIM!", 150, 90);
        }
      }//if
      break;
    case 10: //odd turn       
    whichturn = "Turn 10";   
    if(win == true){
      bosshploss = 250;
      sfearstart = sfeardead;
      speed = 0;
      speed2 = 0;
      position.x = width/2;
      background(150, 100);
      fill(0);
      strokeWeight(3);
      stroke(200);  
      rect(50, 425, 700, 150);
      noFill();
      fill(255, 0, 0);
      noStroke();
      rect(125, 475, 350, 40);
      noFill();
      image(hearticon, -310, 235);
      fill(0);
      strokeWeight(3);
      stroke(200);
      rect(50, 25, 700, 125);
      noFill(); 
      textFont(pixel, 30);
      fill(255);
      stroke(0);
      text("YOU WON!", 90, 80);
      textFont(pixel, 20);
      text("You gain no EXP because this is the whole game lol", 90, 120);
      textFont(pixel, 30);
      text(yourhp, 120, 463);
      asgore2.stop();
    }//if win
      if(fightx < 50 && bhealth == "2/10"){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 225; //"lower" the boss's visual health
        bhealth = "1/10"; //lower the boss's numerical health
        turncorrecter = false;
      }//if
      if(fightx < 50 && bhealth == "1/10"){
        if(turncorrecter == true){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 225; //"lower" the boss's visual health
        bhealth = "0/10"; //lower the boss's numerical health
        win = true;
      fightcolor = 0;
      magiccolor = 0;
      itemcolor = 0;
      fill(255);
      text("FINISH HIM!", 150, 90);
      turncorrecter = false;
        }//turncorrecter if
      }//if
      if(magicx < 50 && bhealth == "2/10"){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 225;
        bhealth = "1/10";
      }//if
      if(magicx < 50 && bhealth == "1/10"){
        if(turncorrecter == true){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 225;
        bhealth = "0/10";
        win = true;
      fightcolor = 0;
      magiccolor = 0;
      itemcolor = 0;
      fill(255);
      text("FINISH HIM!", 150, 90);
        }
      }//if
      break;
    case 11: //even turn                          //FIX SWITCH Boss HP: 1*************
    whichturn = "Turn 11";                       //LEFT OFF HERE!!!!!!!!*********************
    if(win == true){
      bosshploss = 250;
      sfearstart = sfeardead;
      speed = 0;
      speed2 = 0;
      position.x = width/2;
      background(150, 100);
      fill(0);
      strokeWeight(3);
      stroke(200);  
      rect(50, 425, 700, 150);
      noFill();
      fill(255, 0, 0);
      noStroke();
      rect(125, 475, 350, 40);
      noFill();
      image(hearticon, -310, 235);
      fill(0);
      strokeWeight(3);
      stroke(200);
      rect(50, 25, 700, 125);
      noFill(); 
      textFont(pixel, 30);
      fill(255);
      stroke(0);
      text("YOU WON!", 90, 80);
      textFont(pixel, 20);
      text("You gain no EXP because this is the whole game lol", 90, 120);
      textFont(pixel, 30);
      text(yourhp, 120, 463);
      asgore2.stop();
    }//if win
      if(fightx < 50 && bhealth == "1/10"){
        if(turncorrecter == true){
        fightdetector1 = false;
        fightcolor = 255;
        magiccolor = 255;
        bosshploss = 225; //"lower" the boss's visual health
        bhealth = "0/10"; //lower the boss's numerical health
        win = true;
      fightcolor = 0;
      magiccolor = 0;
      itemcolor = 0;
      fill(255);
      text("FINISH HIM!", 150, 90);
      turncorrecter = false;
        }//turncorrecter if
      }//if
      if(magicx < 50 && bhealth == "1/10"){
        magicdetector1 = false;
        magiccolor = 255;
        bosshploss = 225;
        bhealth = "0/10";
        win = true;
      fightcolor = 0;
      magiccolor = 0;
      itemcolor = 0;
      fill(255);
      text("FINISH HIM!", 150, 90);
      }
      break;
    case 12:   
    whichturn = " ";             //all below this is if you won
    if(win == true){
      bosshploss = 250;
      sfearstart = sfeardead;
      speed = 0;
      speed2 = 0;
      position.x = width/2;
      background(150, 100);
      fill(0);
      strokeWeight(3);
      stroke(200);  
      rect(50, 425, 700, 150);
      noFill();
      fill(255, 0, 0);
      noStroke();
      rect(125, 475, 350, 40);
      noFill();
      image(hearticon, -310, 235);
      fill(0);
      strokeWeight(3);
      stroke(200);
      rect(50, 25, 700, 125);
      noFill(); 
      textFont(pixel, 30);
      fill(255);
      stroke(0);
      text("YOU WON!", 90, 80);
      textFont(pixel, 20);
      text("You gain no EXP because this is the whole game lol", 90, 120);
      textFont(pixel, 30);
      text(yourhp, 120, 463);
      asgore2.stop();
    }//if win
    break;
  }//switch
}//healthswitches

function mousePressed(){
  hpdetector = true;
  turncorrecter = true;
  if(fightx < 50){
  count++;
  fightdetector1 = true;
  fightcolor = 0;
  }//if fightcolor
  if(magicx < 50){
  count++;
  magicdetector1 = true;
  magiccolor = 0;
  }//if magiccolor

      if(position.x < 400 && yourhp == "10/10"){
        if(hpdetector == true){
      herohp = -25;
      yourhp = "9/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x > 401 && yourhp == "10/10"){
        if(hpdetector == true){
        herohp = -50;
      yourhp = "8/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x < 400 && yourhp == "9/10"){
        if(hpdetector == true){
      herohp = -50;
      yourhp = "8/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x > 401 && yourhp == "9/10"){
        if(hpdetector == true){
        herohp = -75;
      yourhp = "7/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x < 400 && yourhp == "8/10"){
        if(hpdetector == true){
      herohp = -75;
      yourhp = "7/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x > 401 && yourhp == "8/10"){
        if(hpdetector == true){
        herohp = -100;
      yourhp = "6/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x < 400 && yourhp == "7/10"){
        if(hpdetector == true){
      herohp = -100;
      yourhp = "6/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x > 401 && yourhp == "7/10"){
        if(hpdetector == true){
        herohp = -125;
      yourhp = "5/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x < 400 && yourhp == "6/10"){
        if(hpdetector == true){
      herohp = -125;
      yourhp = "5/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x > 401 && yourhp == "6/10"){
        if(hpdetector == true){
        herohp = -150;
      yourhp = "4/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x < 400 && yourhp == "5/10"){
        if(hpdetector == true){
      herohp = -150;
      yourhp = "4/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x > 401 && yourhp == "5/10"){
        if(hpdetector == true){
        herohp = -175;
      yourhp = "3/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x < 400 && yourhp == "4/10"){
        if(hpdetector == true){
      herohp = -175;
      yourhp = "3/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x > 401 && yourhp == "4/10"){
        if(hpdetector == true){
        herohp = -200;
      yourhp = "2/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x < 400 && yourhp == "3/10"){
        if(hpdetector == true){
      herohp = -200;
      yourhp = "2/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x > 401 && yourhp == "3/10"){
        if(hpdetector == true){
        herohp = -225;
      yourhp = "1/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x < 400 && yourhp == "2/10"){
        if(hpdetector == true){
      herohp = -225;
      yourhp = "1/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x > 401 && yourhp == "2/10"){
        if(hpdetector == true){
        herohp = -250;
      yourhp = "0/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x < 400 && yourhp == "1/10"){
        if(hpdetector == true){
      herohp = -250;
      yourhp = "0/10";
      hpdetector = false;
        }//hpdetector
      }//if
      if(position.x > 401 && yourhp == "1/10"){
        if(hpdetector == true){
        herohp = -250;
      yourhp = "0/10";
      hpdetector = false;
        }//hpdetector
      }//if
  if(itemx < 50 && itemused == false){ //this teeny area is what makes the item work! What a nice change of pace (-.-')
    itemcolor = 100;
    herohp = 0;
    yourhp = "10/10";
    itemused = true;
    itemavailable = itemgone;
  }//if itemcolor
}//mousePressed Goes through all the switches and cases

function bossmoving(){
  acceleration.add(0.2);
  velocity.add(acceleration);
  position.add(velocity);
  acceleration.mult(0);
      if (position.x > 560) { //so Sfear stays near the middle area of the screen
      position.x = 560;
      velocity.x *= -1;  // moves left!
    } else if (position.x < 170) {
      velocity.x *= -1; //moves right!
      constrain(velocity, 0, 5);
      position.x = 170;
    }//if and then else if
}//bossmoving

function music(){ //Look up Undertale, it has awesome music! I'll probably have this change to another song after the boss is low on HP.
	asgore1.setVolume(0.2);
	asgore1.play();
	asgore1.loop();
}//music

function keyTyped(){ 
	if(key == 'm' || key == 'M'){//if for some weird reason you hate awesome music you can click this.
		asgore1.stop();
		asgore2.stop();
    finalboss.stop();
	}//press "m" to mute the music
	if(key == 'z' || key == 'Z'){//starts the fight
		opening = ' ';
		pressthistofight = ' ';
    tips = ' ';
    tips2 = ' ';
		asgore1.stop();
		asgore2.setVolume(0.2);
		asgore2.play();
		asgore2.loop();
		backdrop = battlebackground;
		battle = true;
		}//if "Z" is pressed, the fight begins!
}//keyTyped

function topbox(){
  fill(0);
  strokeWeight(3);
  stroke(200);
  rect(50, 25, 700, 125);
  noFill();
}//topbox

function bottombox(){//I might change the stroke color of the boxes if the hero is at low HP
  fill(0);
  strokeWeight(3);
  stroke(200);  
  rect(50, 425, 700, 150);
  noFill();
}//bottombox

function herohealth(){//same as bosshp conceptually
  fill(255, 0, 0);
  noStroke();
  rect(125, 475, 250, 40);
  fill(100);
  rect(375, 475, herohp, 40);
  noFill();
}//herohealth

function bosshp(){ //I'll probably make a black rectangle to cover up the red one for decreasing HP, no big deal here.
  fill(200, 0, 0);
  strokeWeight(2);
  stroke(0);
  rect(420, 380, 240, 30);
  fill(100);
  rect(420, 380, bosshploss, 30);
  //bosshploss = bosshploss + 10;
  if(bosshploss >= 250){
  	bosshploss = bosshploss - 10;
  }//if
  noFill();	
  noStroke();
}//bosshp

function icons(){ //lol these don't change at all.
	image(hearticon, -310, 235);
	image(skullicon, 590, 280);
}//icons

function boss(){ //Ok so I spent forever trying to get him to float, now I can probably do the same for horizontal movement.
	animation(sfearstart, position.x, sfeary);
	 if(sfeary <= floatlimit){ //these 2 if statements move Sfear up and down
			sfeary += speed;
		}//if
	if(sfeary >= floatlimit){
			sfeary -= speed2;
		}//if
}//boss

function allthetext(){ //So this is where all the text-based code will occur, including the letter-by-letter formation of the code and the number values.
	fill(255);
  textFont(pixel, 12);
  text(tips, 120, 120);
  text(tips2, 120, 140);
	textFont(pixel, 22);
	text(pressthistofight, 100, 90);
	textFont(pixel, 30);
	text(opening, 100, 60);
	if(battle == true){
		textFont(pixel, 30);
	fill(fightcolor);
		text(fight, 150, 90);
	fill(magiccolor);
		text(magic, 350, 90);
	fill(itemcolor);
		text(item, 550, 90);
  fill(255);
    textFont(pixel, 20);
    text(whichturn, 645, 45);
	}
  textFont(pixel, 30);
	text(yourhp, 120, 463);
  text(itemavailable, 450, 500);
  fill(0);
	text(bhealth, 300, 405); //this is what it'll say for the boss's hp, it will be similar for the hero. How would I get the numbers to decrease by "hit", as in how would I change the numbers in text.
}//allthetext