// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// contact listeners for listening to collisions

function CustomListener() {

  // Collision event functions!
  this.BeginContact = function(contact) {
    // Get both fixtures
    var f1 = contact.GetFixtureA(); //fixture has the properties (Density, restitution, etc.0
    var f2 = contact.GetFixtureB();
    // Get both bodies
    var b1 = f1.GetBody(); //the body has the location and velocity
    var b2 = f2.GetBody();

    // Get our objects that reference these bodies
    var o1 = b1.GetUserData();
    var o2 = b2.GetUserData();
    var relation; //used to get relationship between o1 and o2 
      
      //next 4 lines are my code
    if (o1 instanceof Particle && o2 instanceof Particle) { //checking to make sure o1 and o2 are particles
      relation = o1.getRelationship(o1.getType(), o2.getType()); //retrieves relationship between o1 and o2 based on type
      o1.change(relation); //determines how to change particle 1 based on relationship
      o2.changeOther(relation); //determines how to change particle 2 based on relationship
    }
  }

  // collision event callbacks
  
  this.EndContact = function(contact) { //occurs over and over again as long as objects are in contact
  }

  this.PreSolve = function(contact,manifold) { //solves outcome of collision, used to disable a collision 
  }

  this.PostSolve = function(contact,manifold) { //get informatino about collision
  }
  
}
