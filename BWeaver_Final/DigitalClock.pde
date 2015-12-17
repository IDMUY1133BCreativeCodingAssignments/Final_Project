class DigitalClock {
  int fontSize;
  float x, y;
  int s; 
  int m = 10;
  int h = 18;
  int d = 13;
  DigitalClock( float _x, float _y) {
   // fontSize = _fontSize;
    x = _x;
    y = _y;
  }
   
  void setTime() {
    s=s+5;
    if (s >= 59){
      s=0;
      m=m+1;
    };
    if ( m == 59){
      m= 0;
      h= h+1;
  };
  if (h== 24){
    h = 0;
    d = d +1;
  }
 
  }
  void display() {
    //textSize(fontSize);
    textAlign(CENTER);
    textFont(digi);
    text ("NOV " + d + "  " + h + " " + nf(m, 2) + " " + nf(s, 2), x, y);
  }
  void stopClock(){
     if ( (d==14) &&(h == 0) &&(m ==20)){
    d = 14;
    h = 0;
    m= 20;
    s = 0;
  };
  }// end class DigitalClock
  
  /*void reset(){
    pushMatrix();
    fill(150);
    noStroke();
    rect(0,0,width,width/10);
    popMatrix();
  }*/
  
  int getD(){
    return d;
  }
  int getH(){
    return h;
  }
  int getM(){
    return m;
  }
  
}