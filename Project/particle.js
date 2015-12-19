// http://natureofcode.com for help

// Constructor
function Particle(x,y,r, _color, type) {
  this.r = r; //assigns initial values of particle 
  this.col = _color;
  this.type = type;

  // Define a body
  var bd = new box2d.b2BodyDef(); //defines a new body - which is like a soul w/ no human form (it needs a shape) 
  bd.type = box2d.b2BodyType.b2_dynamicBody; //a dynamic body moves around the world, collides with body, and responsds to forces 
  bd.position = scaleToWorld(x,y); //fits body in world

  // Define a fixture
  var fd = new box2d.b2FixtureDef(); //fixture has properties
  // Fixture holds shape
  fd.shape = new box2d.b2CircleShape();
  fd.shape.m_radius = scaleToWorld(this.r);
  
  fd.density = 1.0; //properties for fixture
  fd.friction = 0.1;
  fd.restitution = 0.3;
 
  // Create the body
  this.body = world.CreateBody(bd);
  // Attach the fixture
  this.body.CreateFixture(fd);

  // Some additional stuff
  this.body.SetLinearVelocity(new box2d.b2Vec2(random(-5, 5), random(2, 5))); //all particles besides air get linear velocity and angular velocity set here
  this.body.SetAngularVelocity(random(-5,5));

    this.body.SetUserData(this);

  // Change color when hit
  this.change = function(_type1) {
     if(_type1 == "EaWa"){ //particle 1 is earth, particle 2 is fire
         if(this.r < 20){
             this.r++; //grows earth particle
         }
     }
     if(_type1 == "EaFi"){ //particle 1 is earth, particle 2 is fire
         this.col = color(235, 173, 86); //changes earth particle to fire color
         this.type = 3;
      }
      
      if(_type1 == "FiWa"){ //particle 1 is fire, particle 2 is water
       if(this.r >= 3){ //shrinks fire particle
           this.r = this.r - 1;
      }
          if(this.r < 3){   
           this.col = color(160, 160, 160);
           this.type = 4; //"ashes" after it reaches certain sizes, isn't affected directly by anything
       }
      }
      if(_type1 == "Air"){
          this.body.SetAngularVelocity(random(-20, -20)); //seting velocities for air particles
          this.body.SetLinearVelocity(new box2d.b2Vec2(random(-10, 10) , random(-10, 10)));
      } 
          //this.col = color(255, 0, 0);
  }
 
  this.changeOther = function(_type2){
      if(_type2 == "WaEa"){ //particle 1 is water, particle 2 is earth)
           if(this.r < 15){
             this.r++; //grows earth particle       
         }
      }
      if(_type2 == "FiEa"){ //particle 1 is fire, particle 2 is earth
          this.col = color(235, 173, 86);  //color distinction tells u if it used to be earth 
          this.type = 3;
      }
      
      if(_type2 == "WaFi"){ //particle 1 is water, particle 2 is fire
           if(this.r >= 3){ 
           this.r = this.r - 1; //shrinks fire particle
      }
       if(this.r < 3){   
        this.col = color(160, 160, 160); //becomes "ashes"
           this.type = 4; //ashes doesn't fall under any of the elements
       }
      }
      if(_type2 == "Air"){
          this.body.SetAngularVelocity(random(-20, 20)); //setting velocities for air particles
          this.body.SetLinearVelocity(new box2d.b2Vec2(random(-10, 10) , random(-10, 10)));
      }
  }
  
  this.getRelationship = function(_type1, _type2){
    this.relation = "NA"; //default relation
      if(_type1 == 1 && _type2 == 2){ //earth & water
          this.relation = "EaWa";
      }
      else if(_type1 == 2 && _type2 == 1){ //water & earth
          this.relation = "WaEa";
      }
      else if(_type1 == 2 && _type2 == 3){ //water & fire
          this.relation = "WaFi";
      }
      else if(_type1 == 3 && _type2 == 2){ //fire & water
          this.relation = "FiWa";    
      }
      else if(_type1 == 1 && _type2 == 3){ //earth & fire
          this.relation = "EaFi";  
      }
      else if(_type1 == 3 && _type2 == 1){ //fire & earth
          this.relation = "FiEa"; 
      }
      else if(_type1 == 0 || _type2 ==0){ //air doesn't have specific relationships, just flies around
          this.relation = "Air";   
      }
      return this.relation; //returns the relationship for the customlistener to know what to do
  }
  
  this.getType = function(){
   return this.type; //gets type for use in customlistener.js to get relationships
  }
  // This function removes the particle from the box2d world
  this.killBody = function() {
    world.DestroyBody(this.body);
  }

  // Is the particle ready for deletion?
  this.done = function() {
    // Let's find the screen position of the particle
    var pos = scaleToPixels(this.body.GetPosition());
    // Is it off the bottom of the screen?
    if (pos.y > height+this.r*2) {
      this.killBody();
      return true; //if it falls through, kill the body and return true
    }
    return false; //if it's not done, then it's false 
  }

  // Drawing the box
  this.display = function() {
    // Get the body's position
    var pos = scaleToPixels(this.body.GetPosition());
    // Get its angle of rotation
    var a = this.body.GetAngleRadians();
    // Draw it!
    rectMode(CENTER);
    push();
    translate(pos.x,pos.y);
    rotate(a); //important with air
    fill(this.col); 
    stroke(0, 70);
    strokeWeight(2);
      if(this.type == 1 || this.type == 3){ //if it's earth or fire, make a rectangle
        rect(0, 0, this.r*2, this.r*2);
      }
      if(this.type == 0 || this.type == 2){ //if it's water or air, make a circle!! 
        ellipse(0, 0, this.r*2, this.r*2);
  }
  pop();
  }
  /* was trying to get particles to go away - the array would be empty, but the "skeletons" would be left behind
  this.remove = function(){
      this.killBody(); 
}
*/
}
