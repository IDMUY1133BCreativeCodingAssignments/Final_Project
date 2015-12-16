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
      o1.change(o1.getType());
      o2.changeOther(o2.getType());
      relation = o1.getRelationship(o1.getType(), o2.getType());
      o1.change(relation);
      o2.changeOther(relation);
        
        console.log("O1" + o1.getType());
        console.log("O2" + o2.getType());
        //ok so o1.getType and o2.gettype work!! 
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
