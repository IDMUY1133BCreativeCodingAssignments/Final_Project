class DigitalClock {
  int fontSize;
  float x, y;
  int s; 
  int m = 20;
  int h = 18;
  int d = 13;
  DigitalClock(int _fontSize, float _x, float _y) {
    fontSize = _fontSize;
    x = _x;
    y = _y;
  }
   
  void setTime() {
    s=s+1;
    if (s== 59){
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
    textSize(fontSize);
    textAlign(CENTER);
    text ("NOV " + d + " " + h + ":" + nf(m, 2) + ":" + nf(s, 2), x, y);
  }
}
 
/*class Clock {
  int h, m, s;
  Clock() {
  }
   
  void getTime() {
    h = hour();
    m = minute();
    s = second();
  }
}*/