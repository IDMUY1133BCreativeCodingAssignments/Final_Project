function preload(){
    house = loadImage('house.jpg');
    house2 = loadImage('house2.jpg');
    dadblink = loadAnimation("Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png","Dad1a.png", "dad2a.png", "dad3a.png", "dad4a.png", "dad3a.png", "dad2a.png");
    broblink=loadAnimation("brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother1.png","brother2.png","brother3.png","brother4.png","brother3.png", "brother2.png");
    
  //  granny=loadAnimation("gran.png", "gran1.png","gran2.png","gran3.png", "gran3.png","gran3.png","gran3.png","gran2.png", "gran1.png");
    
    music=loadAnimation("note1.png","note2.png","note3.png","note4.png","note5.png","note6.png","note7.png");
    
    momblink=loadAnimation("mom1.png", "mom2.png", "mom3.png", "mom2.png");
    
    function setup(){
createCanvas(800,600);


}

function draw(){
background(255);

    
   animation(music, width/2, height/2);
    
}