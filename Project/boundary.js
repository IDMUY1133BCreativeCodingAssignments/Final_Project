// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com //referred to for help

// A fixed boundary class

// A boundary is a simple rectangle with x,y,width,and height
function Boundary(x_,y_, w_, h_) {
  // But we also have to make a body for box2d to know about it
  // Body b;
  this.x = x_; //sets the dimensions of the boundary
  this.y = y_;
  this.w = w_;
  this.h = h_;

  var fd = new box2d.b2FixtureDef(); //fixtures attach a shape to a body and sets properties
  fd.density = 1.0; //how dense each particle is
  fd.friction = 0.5; //how much friction is between particles
  fd.restitution = 0.2; //how fast things move after collision
 
  var bd = new box2d.b2BodyDef(); //defines the body
    //bodies have location, velocity. vectors and forces basically
 
  bd.type = box2d.b2BodyType.b2_staticBody; //boundary doesn't move, so it's a staticBody
  bd.position.x = scaleToWorld(this.x);
  bd.position.y = scaleToWorld(this.y);
  fd.shape = new box2d.b2PolygonShape(); //keeps track of all the collision geometry attached toa body
  fd.shape.SetAsBox(this.w/(scaleFactor*2), this.h/(scaleFactor*2));
  this.body = world.CreateBody(bd).CreateFixture(fd);

    // Draw the boundary, if it were at an angle we'd have to do something fancier
  this.display = function() {
    fill(200); //show the actual boundary
    stroke(200);
    rectMode(CENTER); 
    rect(this.x,this.y,this.w,this.h);
  }
}