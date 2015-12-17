
/* I want to create a timeline of November 13,2015 to Nov 15,2015
comparing tweets of #prayforparis vs #prayforjapan #prayforbeirut 
i want a clock at the top running with date and time at a sped up speed
as time goes on tweets are popping up accordingly
*/

/* tweets are accessed through temboo to twitter api*/
/* digital clock is inspired by http://www.openprocessing.org/sketch/16037 */


import com.temboo.core.*;
import com.temboo.Library.Twitter.Search.*;

// Create a session using your Temboo account application details
TembooSession session = new TembooSession("ijweaver", "myFirstApp", "2a946e977f9a4b79b3cd6fcae6001d2d");

//declare clock
DigitalClock digitalClock;

void setup() {
  //background
  size(1000,800);
  // intialize clock
  digitalClock = new DigitalClock(40, width/2, width/10);
  // Run the Tweets Choreo function
  runTweetsChoreo();
  frameRate(200);
}

 

 
void draw() {
  //background(204);
  background(0);
  
  //displaying clock
  digitalClock.setTime();
  digitalClock.display();
  
  //displaying timeline
  stroke(255);
  strokeWeight(5);
  line(100,400,900,400);
}
 

void runTweetsChoreo() {
  // Create the Choreo object using your Temboo session
  Tweets tweetsChoreo = new Tweets(session);

  // Set inputs
  tweetsChoreo.setQuery("#prayforparis");
  tweetsChoreo.setAccessToken("4423050569-SxkT3avZm6W4ip9H9Q2y1n9ftNDvNrjXE7wK0DS");
  tweetsChoreo.setConsumerKey("wlW4TYdtCx61gbJjSdNSnyR7T");
  tweetsChoreo.setConsumerSecret("0M0KwnhwjeIBrfiXJmtdqgQaWDLxnfbpPor6MtR42kUBGipMD9");
  tweetsChoreo.setAccessTokenSecret("5h45sQf6y53HjcyjQfKWVKoF3d2nIT8hZZYrOQG0h6YCX");
  tweetsChoreo.setCount("200");
  tweetsChoreo.setUntil("2015-11-20");

  // Run the Choreo and store the results
  TweetsResultSet tweetsResults = tweetsChoreo.run();
  
  // Print results
  println(tweetsResults.getResponse());
  println(tweetsResults.getLimit());
  println(tweetsResults.getRemaining());
  println(tweetsResults.getReset());
}