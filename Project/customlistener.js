// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// ContactListener to listen for collisions!

function CustomListener() {

  // Collision event functions!
  this.BeginContact = function(contact) {
    // Get both fixtures
    var f1 = contact.GetFixtureA();
    var f2 = contact.GetFixtureB();
    // Get both bodies
    var b1 = f1.GetBody();
    var b2 = f2.GetBody();

    // Get our objects that reference these bodies
    var o1 = b1.GetUserData();
    var o2 = b2.GetUserData();
    var relation; 
      
    if (o1 instanceof Particle && o2 instanceof Particle) {
      relation = o1.getRelationship(o1.getType(), o2.getType()); //retrieves relationship between o1 and o2 based on type
      o1.change(relation); //determines how to change particle 1 based on relationship
      o2.changeOther(relation); //determines how to change particle 2 based on relationship
    }
  }

  // Objects stop touching each other
  
  this.EndContact = function(contact) {
  }

  this.PreSolve = function(contact,manifold) {
  }

  this.PostSolve = function(contact,manifold) {
  }
  
}
