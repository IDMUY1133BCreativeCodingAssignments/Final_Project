import KinectPV2.*;
    KinectPV2 kinect;
    int f = 20;
    float dist;
    int c;
    boolean detect;
    int change;
    int s = frameCount;
    int amount = 50;
    void setup() {   
      size(512, 424);
      frameRate(30);
      kinect = new KinectPV2(this);   
      kinect.enableBodyTrackImg(true);
      kinect.enableDepthImg(false);
      kinect.init();
    }  
    
    void draw() {   
    background(255);    
    image(kinect.getBodyTrackImage(), 0, 0);   
    image(kinect.getDepthImage(), 0, 0);
    int [] rawData = kinect.getRawBodyTrack();
   println(frameCount);
    //For 1/8 of my pixels
    for (int i = 0; i < rawData.length; i +=amount){
    
      //if pixel is part of the user
      if (rawData[i] != 255){
         float x = (i%width)+1;
         float y = int(i/height);
        
       //visualization 1
      /*  stroke(random(x),10,100);
        rect(x+20,y+20,40,40);
        line(x,y,x,random(100));
       */
        
 //visualization 2
/* amount = 50;
   strokeWeight(3);
   stroke(random(x)+100,random(y),10);
   ellipse(x,y,75,10);
   */
   //visualization 3
  /* strokeWeight(3);
   //stroke(255,x+random(200),255);
   stroke(x,y+random(200),x+random(255));
   ellipse(y,x,30,10);
   ellipse(x,y,30,10);
   */
   
   //visualisation 4
  /* strokeWeight(20);
   amount = 700;
stroke(10+random(100),20+random(10),200);
ellipse(x,y,70,70);
*/
amount= 100;
strokeWeight(2);
stroke(random(x),10,100);
   line(x-30,y-30,x,y);
   
      
      
    }
    }
    }
        //calculate distance between usermapx, usermapy, and rectangle position
    /*    dist = dist(x,f,y,f);
        //if collision found, rectangle is green 
        if (dist <= f) {
         detect=true;
         //else, red
        } else{
          detect=false;
        }
      }
    
    }
    if (detect == false){
      c = color(255,0,0);
    }
    
    if (detect == true){
     c =  color(0,255,0);
    }
    
    pushMatrix();
    fill(c);
   // rect(f,f,50,50);
    popMatrix();
    } 
    */