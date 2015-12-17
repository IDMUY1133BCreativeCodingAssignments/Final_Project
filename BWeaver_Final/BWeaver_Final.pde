/* I want to create a timeline of the events of the paris attacks
having deaths display over time
i want a clock at the top running with date and time at a sped up speed
as time goes on tweets are popping up accordingly
*/
/* 
 digital clock is inspired by http://www.openprocessing.org/sketch/16037 
 timeline of attacks comes from http://www.cnn.com/2015/11/14/world/what-happened-in-paris-attacks-timeline/  */
//importing minium library
import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;
//declare clock
DigitalClock digitalClock;

//declare font
PFont digi;
PFont event;
PFont key;
PImage icon;
PImage enemy;
// declaring booleans for events
boolean event1 = false;
boolean event2 = false;
boolean event3 = false;
boolean event4 = false;
boolean event5 = false;
boolean event6 = false;
boolean event7 = false;
boolean event8 = false;
boolean event9 = false;
boolean event10 = false;
// declaring audio files
Minim minim;
AudioPlayer player;
AudioInput input;
 
void setup() {
  //background
  size(displayWidth,displayHeight);
  // intialize clock
  digitalClock = new DigitalClock(width/2, width/20);

  //frameRate(50);
  
  //loading images and fonts
  digi = createFont("digital-7.ttf",60); //load custom font
  icon = loadImage("eiffel.png");
  event= createFont("Helvetica.otf",12);
  key= createFont("Helvetica.otf",18);
  enemy = loadImage("x.png");
  
  //audio
  minim = new Minim(this);
  player = minim.loadFile("sound.mp3");
  input = minim.getLineIn();
  
}

void draw() {
  //background(204);
  //setting background
 
  background(0);
  player.play();
  
  //player.loop();
  //displaying clock
  digitalClock.setTime();
  digitalClock.display();
  //digitalClock.reset();
  
  //displaying timeline
  stroke(255);
  strokeWeight(5);
  line(100,1.5*(width/3),width-100,1.5*(width/3));
  
  //key
  textFont(key);
  text("One Civilian Death:", (width/6),width/25);
  image(icon,1.35*(width/6),13);
  text("One Terrorist Death:", 1.6*(width/2),width/25);
  image(enemy,1.74*(width/2),width/38);
  
  //events of the day
 if ((digitalClock.getD()>=13) && (digitalClock.getH()>=18) && (digitalClock.getM()>=20)){
   event1 = true;
 }
   if(event1 == true){
     textFont(event);
     text("First explosion at Stade de France",100,1.5*(width/3)+30);
     //four killed 
     image(icon,100,1.5*(width/3)-50);
     image(icon,100,1.5*(width/3)-80);
     image(icon,100,1.5*(width/3)-110);
     image(icon,100,1.5*(width/3)-140);
   }
 if ((digitalClock.getD()>=13) && (digitalClock.getH()>=18) && (digitalClock.getM()>=25)){
   event2 = true;
 }
 if(event2 == true){
   textFont(event);
   text("Shooting at Le Carillon & Le Petit Cambodge",170,1.5*(width/3)+50);
   //15 killed
     image(icon,170,1.5*(width/3)-50);
     image(icon,170,1.5*(width/3)-80);
     image(icon,170,1.5*(width/3)-110);
     image(icon,170,1.5*(width/3)-140);
     image(icon,170,1.5*(width/3)-170);
     image(icon,170,1.5*(width/3)-200);
     image(icon,170,1.5*(width/3)-230);
     image(icon,170,1.5*(width/3)-250);
     image(icon,170,1.5*(width/3)-280);
     image(icon,170,1.5*(width/3)-310);
     image(icon,170,1.5*(width/3)-340);
     image(icon,170,1.5*(width/3)-370);
     image(icon,170,1.5*(width/3)-400);
     image(icon,170,1.5*(width/3)-430);
     image(icon,170,1.5*(width/3)-460);
}
 if ((digitalClock.getD()>=13) && (digitalClock.getH()>=18) && (digitalClock.getM()>=30)){
   event3 = true;
 }
 if(event3 == true){
   textFont(event);
   text("Second explosion at Stade de France",240,1.5*(width/3)+70); 
}
if ((digitalClock.getD()>=13) && (digitalClock.getH()>=18) && (digitalClock.getM()>=32)){
  event4 = true;
}
  if (event4 ==true){ 
   textFont(event);
   text("Shooting at La Bonne Biere",268,1.5*(width/3)+90);
   //five deaths
     image(icon,268,1.5*(width/3)-50);
     image(icon,268,1.5*(width/3)-80);
     image(icon,268,1.5*(width/3)-110);
     image(icon,268,1.5*(width/3)-140);
     image(icon,268,1.5*(width/3)-170);
}
 if ((digitalClock.getD()>=13) && (digitalClock.getH()>=18) && (digitalClock.getM()>=36)){
   event5 =true;
 }
   if(event5 == true){
     textFont(event);
     text("Shooting at La Belle Equipe",324,1.5*(width/3)+110);
     //nineteen deaths
     image(icon,324,1.5*(width/3)-50);
     image(icon,324,1.5*(width/3)-80);
     image(icon,324,1.5*(width/3)-110);
     image(icon,324,1.5*(width/3)-140);
     image(icon,324,1.5*(width/3)-170);
     image(icon,324,1.5*(width/3)-200);
     image(icon,324,1.5*(width/3)-230);
     image(icon,324,1.5*(width/3)-250);
     image(icon,324,1.5*(width/3)-280);
     image(icon,324,1.5*(width/3)-310);
     image(icon,324,1.5*(width/3)-340);
     image(icon,324,1.5*(width/3)-370);
     image(icon,324,1.5*(width/3)-400);
     image(icon,324,1.5*(width/3)-430);
     image(icon,324,1.5*(width/3)-460);
     image(icon,324,1.5*(width/3)-490);
     image(icon,324,1.5*(width/3)-520);
     image(icon,324,1.5*(width/3)-550);
     image(icon,324,1.5*(width/3)-580);
   }

 if ((digitalClock.getD()>=13) && (digitalClock.getH()>=18) && (digitalClock.getM()>=40)){
   event6 = true;
 }
   if(event6 == true){
   textFont(event);
   text("Suicide Bombing at Comptoir Voltaire",420,1.5*(width/3)+30);
   image(enemy,500,1.5*(width/3)-30);
}
 if ((digitalClock.getD()>=13) && (digitalClock.getH()>=18) && (digitalClock.getM()>=40)){
   event7 = true;
 }
   if(event7 == true){
   textFont(event);
   text("Shooting at Bataclan",420,1.5*(width/3)+50); //89 killed
   //first row
     image(icon,380,1.5*(width/3)-50);
     image(icon,380,1.5*(width/3)-80);
     image(icon,380,1.5*(width/3)-110);
     image(icon,380,1.5*(width/3)-140);
     image(icon,380,1.5*(width/3)-170);
     image(icon,380,1.5*(width/3)-200);
     image(icon,380,1.5*(width/3)-230);
     image(icon,380,1.5*(width/3)-250);
     image(icon,380,1.5*(width/3)-280);
     image(icon,380,1.5*(width/3)-310);
     image(icon,380,1.5*(width/3)-340);
     image(icon,380,1.5*(width/3)-370);
     image(icon,380,1.5*(width/3)-400);
     image(icon,380,1.5*(width/3)-430);
     image(icon,380,1.5*(width/3)-460);
     image(icon,380,1.5*(width/3)-490);
     image(icon,380,1.5*(width/3)-520);
     image(icon,380,1.5*(width/3)-550);
   //second row
     image(icon,400,1.5*(width/3)-50);
     image(icon,400,1.5*(width/3)-80);
     image(icon,400,1.5*(width/3)-110);
     image(icon,400,1.5*(width/3)-140);
     image(icon,400,1.5*(width/3)-170);
     image(icon,400,1.5*(width/3)-200);
     image(icon,400,1.5*(width/3)-230);
     image(icon,400,1.5*(width/3)-250);
     image(icon,400,1.5*(width/3)-280);
     image(icon,400,1.5*(width/3)-310);
     image(icon,400,1.5*(width/3)-340);
     image(icon,400,1.5*(width/3)-370);
     image(icon,400,1.5*(width/3)-400);
     image(icon,400,1.5*(width/3)-430);
     image(icon,400,1.5*(width/3)-460);
     image(icon,400,1.5*(width/3)-490);
     image(icon,400,1.5*(width/3)-520);
     image(icon,400,1.5*(width/3)-550);
    //third row
      image(icon,420,1.5*(width/3)-50);
     image(icon,420,1.5*(width/3)-80);
     image(icon,420,1.5*(width/3)-110);
     image(icon,420,1.5*(width/3)-140);
     image(icon,420,1.5*(width/3)-170);
     image(icon,420,1.5*(width/3)-200);
     image(icon,420,1.5*(width/3)-230);
     image(icon,420,1.5*(width/3)-250);
     image(icon,420,1.5*(width/3)-280);
     image(icon,420,1.5*(width/3)-310);
     image(icon,420,1.5*(width/3)-340);
     image(icon,420,1.5*(width/3)-370);
     image(icon,420,1.5*(width/3)-400);
     image(icon,420,1.5*(width/3)-430);
     image(icon,420,1.5*(width/3)-460);
     image(icon,420,1.5*(width/3)-490);
     image(icon,420,1.5*(width/3)-520);
     image(icon,420,1.5*(width/3)-550);
     // fourth row
     image(icon,440,1.5*(width/3)-50);
     image(icon,440,1.5*(width/3)-80);
     image(icon,440,1.5*(width/3)-110);
     image(icon,440,1.5*(width/3)-140);
     image(icon,440,1.5*(width/3)-170);
     image(icon,440,1.5*(width/3)-200);
     image(icon,440,1.5*(width/3)-230);
     image(icon,440,1.5*(width/3)-250);
     image(icon,440,1.5*(width/3)-280);
     image(icon,440,1.5*(width/3)-310);
     image(icon,440,1.5*(width/3)-340);
     image(icon,440,1.5*(width/3)-370);
     image(icon,440,1.5*(width/3)-400);
     image(icon,440,1.5*(width/3)-430);
     image(icon,440,1.5*(width/3)-460);
     image(icon,440,1.5*(width/3)-490);
     image(icon,440,1.5*(width/3)-520);
     image(icon,440,1.5*(width/3)-550);
     //fifth row
     image(icon,460,1.5*(width/3)-50);
     image(icon,460,1.5*(width/3)-80);
     image(icon,460,1.5*(width/3)-110);
     image(icon,460,1.5*(width/3)-140);
     image(icon,460,1.5*(width/3)-170);
     image(icon,460,1.5*(width/3)-200);
     image(icon,460,1.5*(width/3)-230);
     image(icon,460,1.5*(width/3)-250);
     image(icon,460,1.5*(width/3)-280);
     image(icon,460,1.5*(width/3)-310);
     image(icon,460,1.5*(width/3)-340);
     image(icon,460,1.5*(width/3)-370);
     image(icon,460,1.5*(width/3)-400);
     image(icon,460,1.5*(width/3)-430);
     image(icon,460,1.5*(width/3)-460);
     image(icon,460,1.5*(width/3)-490);
     image(icon,460,1.5*(width/3)-520);
     
}
 if ((digitalClock.getD()>=13) && (digitalClock.getH()>=18) && (digitalClock.getM()>=53)){
   event8 = true;
 }
   if(event8 == true){
   textFont(event);
   text("Suicide bombing near Stade de France",562,1.5*(width/3)+80);
   image(enemy,562,1.5*(width/3)-30);
}
 if ((digitalClock.getD()>=14) && (digitalClock.getH()>=0) && (digitalClock.getM()>=20)){
   event9 = true;
 }
   if(event9 == true){
   textFont(event);
   text("Police raid Bataclan:Terrorists killed",width-120,1.5*(width/3)+30);
   image(enemy,width-120,1.5*(width/3)-30);
   image(enemy,width-120,1.5*(width/3)-60);
   image(enemy,width-120,1.5*(width/3)-90);
   //player.pause();
}
 //print(digitalClock.getD());
 
digitalClock.stopClock();
 
};