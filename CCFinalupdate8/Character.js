//first step create the character with images from AI
// have functions within the class for different animations 
//function for the damage and health 

function Character() {

  this.anim = function() { //sets up the characters. will go in setup function on main sketch
    //create a sprite and add the 3 animations
    ghost = createSprite(1110, (11/14)*windowHeight, 50, 100); //creates the Apple sprite

    //label, first frame, last frame
    //the addAnimation method returns the added animation
    //that can be store in a temporary variable to change parameters
    var myAnimation = ghost.addAnimation("floating", "assets/apple_fighter000000.png", "assets/apple_fighter000000.png"); // animation when standing still

    //offX and offY is the distance of animation from the center of the sprite
    //in this case since the animations have different heights i want to adjust
    //the vertical offset to make the transition between floating and moving look better
    // myAnimation.offY = 5; because i alligned in photo shop i don't need this

    ghost.addAnimation("moving", "assets/apple_fighter000000.png", "assets/apple_fighter000002.png"); //adds the walking animation 
    ghost.addAnimation("punch", "assets/apple_fighter000003.png", "assets/apple_fighter000003.png"); //adds the punching animation


    straw = createSprite(300, (11/14)*windowHeight, 50, 100);//repeat the above with the strawberry character

    var myAnimation1 = straw.addAnimation("floating", "assets/strawberry_fighter000000.png", "assets/strawberry_fighter000000.png"); // adds standstill animation
    //   myAnimation1.offY = 18;

    straw.addAnimation("moving", "assets/strawberry_fighter000000.png", "assets/strawberry_fighter000002.png"); // adds moving animation
    straw.addAnimation("punch", "assets/strawberry_fighter000003.png", "assets/strawberry_fighter000003.png"); //punching animation
  }

  this.walking = function() {










    if (keyDown (LEFT_ARROW)) {
      ghost.changeAnimation("moving"); // changes the sprite animation to moving

      ghost.mirrorX(1); // mirrors the sprite for when it turns around 

      ghost.velocity.x = - 10;//negative x velocity: move left
    } else if (keyDown(RIGHT_ARROW)) {
      ghost.changeAnimation("moving"); // move to the right

      ghost.mirrorX(-1);//unflip 
      ghost.velocity.x = 10; // possitive velocity
    } else {

      ghost.changeAnimation("floating"); // if no key pressed use static animation
      ghost.velocity.x = 0; // dont move
    }
    if (keyWentDown("m")) { // if m is pressed, not held

      ghost.changeAnimation("punch"); // do the punch animation
      ghost.immovable = true; //makes the character that is punching immovable so that they don't both bounce back at the same time
      straw.bounce(ghost, function() { // if punch connects with strawberry the strawberry will "bounce" back 50 
        straw.velocity.x = 20;
        punch.setVolume(0.1);
        punch.play();
      }
      );
    } else {
      ghost.immovable = false; // if not the apple will not be immovable
    }
    if (ghost.position.y > windowHeight || ghost.position.y < 0) { // if the apple is past a certain position on the screen it will delete and strawberry will win the game
      ghost.remove();
      textSize(72);
      fill(203, 13, 0);
      text("Strawberry Wins!!!", windowWidth*(1/10), windowHeight/2);
      textSize(48);
      fill(150);
      text("Hit the Mouse to Play Again", windowWidth*(3/10), windowHeight*(1/10));
    }

    if (ghost.collide(platform)) {
      ghost.velocity.y = 0;
    }

    ghost.velocity.y += 1;

    if (keyWentDown("n"))
    {

      ghost.velocity.y = -15;
    }













    if (keyDown ("a")) { // repeat all the same functions as apple with strawberry but will use wasd and c to move and punch
      straw.changeAnimation("moving"); // moving to the left

      straw.mirrorX(-1); // it's negative 1 because the sprites are facing different directions in the png file

      straw.velocity.x = - 10;  //negative x velocity: move left
    } else if (keyDown("d")) { // moves to the right on d down
      straw.changeAnimation("moving");

      straw.mirrorX(1);  //unflip 
      straw.velocity.x =10;
    } else { // if no key pressed show static animation

      straw.changeAnimation("floating");
      straw.velocity.x = 0; //not moving
    }
    if (keyWentDown("c")) { //punching with c. same as apple punching piece

      straw.changeAnimation("punch");
      straw.immovable = true;

      ghost.bounce(straw, function() {
        ghost.velocity.x = 10; // pushes back the apple
        punch.setVolume(0.1);
        punch.play();
      }
      );
    } else {
      straw.immovable = false;
    }
    if (straw.position.y >windowHeight || straw.position.y < 0) { // will remove the strawberry if passes x=100
      straw.remove();
      textSize(72);
      fill(0, 187, 39);
      text("Apple Wins!!!", windowWidth/2, windowHeight/2);
      textSize(48);
      fill(150);
      text("Hit the Mouse to Play Again", windowWidth*(3/10), windowHeight*(1/10));
    }
    if (straw.collide(platform)) {
      straw.velocity.y = 0;
    }

    straw.velocity.y += 1;

    if (keyWentDown("x"))
    {

      straw.velocity.y = -15;
    }










    drawSprites(); // SUPER IMPORTANT 
    //IT TOOK ME WAAAAY TOO LONG TO REALIZE THIS WAS MISSING
    //DRAWS THE CHARACTERS!!!!!!!
  }
}
