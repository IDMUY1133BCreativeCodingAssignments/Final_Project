
import java.util.List;
 
static final int INIT_SIZE = 0100;
//static final List<Bullet> bullets = new ArrayList(INIT_SIZE);  // Java
static final List<Bullet> bullets = new ArrayList();  // JS
 
static final PVector playerPos = new PVector();
static final PVector playerSpd = new PVector();
static final PVector bulletSpd = new PVector();
 
//static final IntList bulletPool = new IntList(INIT_SIZE);  // Java
static final List<Integer> bulletPool = new ArrayList();   // JS
//static final List<Integer> bulletPool = new ArrayList(INIT_SIZE);  // P1
 
static final int PLAYER_VEL = 3, PLAYER_SIZE = 20, FPS = 50;
static final int AIM_SIZE = 5, HOLE_SIZE = PLAYER_SIZE >> 1;
static final int AIM_COLOR = 0, PLAYER_COLOR = #FF0000, BG = -1;
 
static final String GFX = JAVA2D;  // JAVA2D for P2 or P2D for P1
 
static boolean canCrossScreen = true;
static int prevSize;
 
void setup() {
  size(600, 600, GFX);
  frameRate(FPS);
  ellipseMode(CENTER);
 
  noSmooth();
  noStroke();
  noCursor();
 
  playerPos.set(width >> 1, height >> 1, 0);
}
 
void draw() {
  background(BG);
 
  updatePlayer();
  confinePlayer();
  displayPlayer();
 
  displayAim();
 
  if (mousePressed && frameCount % Bullet.FREQ == 0)  addBullet();
 
  fill(Bullet.COLOUR);
 
  int b = bullets.size();
  //frame.setTitle("Size: " + (prevSize = b));  // Java only
 
  while (b-- != 0)  if (bullets.get(b).script())
    //bulletPool.append(b);  // Java
    bulletPool.add(b);  // JS & P1
}
 
void updatePlayer() {
  playerPos.add(playerSpd);
}
 
void confinePlayer() {
  if (canCrossScreen) {
    if (playerPos.x > width)   playerPos.x = 0;
    else if (playerPos.x < 0)  playerPos.x = width;
 
    if (playerPos.y > height)  playerPos.y = 0;
    else if (playerPos.y < 0)  playerPos.y = height;
  }
 
  else {
    playerPos.x = constrain(playerPos.x, HOLE_SIZE, width  - HOLE_SIZE);
    playerPos.y = constrain(playerPos.y, HOLE_SIZE, height - HOLE_SIZE);
  }
}
 
void displayPlayer() {
  fill(PLAYER_COLOR);
  ellipse(playerPos.x, playerPos.y, PLAYER_SIZE, PLAYER_SIZE);
 
  fill(BG);
  ellipse(playerPos.x, playerPos.y, HOLE_SIZE, HOLE_SIZE);
}
 
void displayAim() {
  fill(AIM_COLOR);
  ellipse(mouseX, mouseY, AIM_SIZE, AIM_SIZE);
}
 
void addBullet() {
  bulletSpd.set(mouseX, mouseY, 0);
  bulletSpd.sub(playerPos);
 
  bulletSpd.normalize();         // JS
  bulletSpd.mult(Bullet.VEL);    // JS
  //bulletSpd.setMag(Bullet.VEL);  // Java
 
  findVacantSlot();
}
 
void findVacantSlot() {
  /*
   for (Bullet b: bullets)   if (b.isInactive) {
   b.rez(playerPos, bulletSpd);
   return;
   }
    
   bullets.add(new Bullet(playerPos, bulletSpd));
   */
 
  final int bp = bulletPool.size();
  //print(bp + "\t");  // Java only
 
  if (bp > 0)  bullets.get(bulletPool.remove(bp-1)).rez(playerPos, bulletSpd);
  else         bullets.add(new Bullet(playerPos, bulletSpd));
}
 
void keyPressed() {
  final int k = keyCode;
 
  if      (k == LEFT  |  k == 'A')    playerSpd.x = -PLAYER_VEL;
  else if (k == RIGHT |  k == 'D')    playerSpd.x =  PLAYER_VEL;
  else if (k == UP    |  k == 'W')    playerSpd.y = -PLAYER_VEL;
  else if (k == DOWN  |  k == 'S')    playerSpd.y =  PLAYER_VEL;
 
  else if (k == ENTER |  k == RETURN | k == ' ')
    canCrossScreen = !canCrossScreen;
}
 
void keyReleased() {
  final int k = keyCode;
 
  if ( k == LEFT    |  k == 'A'  &&  playerSpd.x < 0 
    || k == RIGHT   |  k == 'D'  &&  playerSpd.x > 0 )
    playerSpd.x = 0;
 
  else if ( k == UP |  k == 'W'  &&  playerSpd.y < 0 
    || k == DOWN    |  k == 'S'  &&  playerSpd.y > 0 )
    playerSpd.y = 0;
}
 
class Bullet {
  static final short VEL = 5, DIM = 4, FREQ = 2;
  static final color COLOUR = #0000FF;
 
  final PVector pos = new PVector(), spd = new PVector();
  boolean isInactive;
 
  Bullet(PVector loc, PVector vel) {
    rez(loc, vel);
  }
 
  void rez(PVector loc, PVector vel) {
    pos.set(loc);
    spd.set(vel);
 
    isInactive = false;
  }
 
  void display() {
    ellipse(pos.x, pos.y, DIM, DIM);
  }
 
  void update() {
    pos.add(spd);
  }
 
  boolean check() {
    return pos.x > width | pos.x < 0 | pos.y > height | pos.y < 0;
  }
 
  boolean script() {
    if (isInactive)  return false;
 
    display();
    update();
 
    return isInactive = check();
  }
}