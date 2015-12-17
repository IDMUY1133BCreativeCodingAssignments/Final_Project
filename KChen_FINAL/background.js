
function drawScene1(){
    image(cloudStage, 0, 0);
    
    babyObstacle3.position.x = 600;
    babyObstacle3.position.y = 600;
//    player.collide(babyObstacle);
}

function drawScene2(){
    image(cloudStage, 0, 0);
    babyObstacle.position.x = 300;
    babyObstacle.position.y = 190;
    
    babyObstacle2.position.x = 120;
    babyObstacle2.position.y = 190;
    
    babyObstacle3.position.x = 280;
    babyObstacle3.position.y = 190;
    
//    babyObstacle.position.x = 200;
//    babyObstacle.position.y = 200;
    }
function drawScene3(){
    image(landscape1, 0, 0);
    babyObstacle.position.x = 600;
    babyObstacle.position.y = 290;
    
    babyObstacle2.position.x = 520;
    babyObstacle2.position.y = 590;
    
       
    babyObstacle3.position.x = 600;
    babyObstacle3.position.y = 600;
}

function drawScene4(){
    image(landscape2, 0, 0);
}

function drawScene5(){
    image(landscape3, 0, 0);
}

function drawScene6(){
    image(landscape4, 0, 0);
}

function drawScene7(){
    image(landscape5, 0, 0);
}

function drawScene8(){
    image(landscape6, 0, 0);
}

function drawScene9(){
    image(landscape7, 0, 0);
}

function drawScene10(){
    image(black, 0, 0);
}

function drawScene11(){
    image(fall, 0, 0);
}


function stages(){
    
    if (player.x >= 498){
        count++
        console.log(count);
    }
    
    
    switch(count){
        case 0:
            drawScene1();
            break;
        case 1:
            drawScene2();
            break;
        case 2:
            drawScene3();
            setBoy("data/Boy.png");
            count = 3;
            break;
        case 3: 
            drawScene3();
            break;
        case 4: 
            drawScene4();
            //setMan("data/Man.png");
            count = 5;
            break;
        case 5:
            drawScene4();
            break;
        case 6:
            drawScene4();
            setMan("data/Man.png");
            count = 7;
            break;
        case 7:
            drawScene5();
            break;
        case 8:
            drawScene6();
            break;
        case 9:
            drawScene7();
            break;
        case 10:
            drawScene8();
            break;
        case 11:
            drawScene9();
            break;
        case 12:
            background(0);
            //count = 12;
            break;
            
        case 13:
            createCanvas(500,400);
            drawScene10();
            break;
        case 14:
            drawScene10();
            break;
        case 15:
            drawScene11();
            break;
            
    }
}