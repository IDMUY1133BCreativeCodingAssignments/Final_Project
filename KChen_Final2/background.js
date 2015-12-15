//Draw and move background
function drawBackground(){
    for (var i = 0; i < scenery.length; i++){
       image(scene1, scenery[i], 0); 
    }

}

function scrollBackground(){
	for (var i = 0; i < scenery.length; i++){
        scenery[i] -= .3;
        if (scenery[i] <= -146){
            scenery[i] = 583;
        }
    }
}



//Draw and move tiles
function drawTiles(){
    for (var i = 0; i < ground.length; i++){
        image(tile, ground[i], 320);
        
        ground[i] -= 1;
        
        if (ground[i] <= -50){
            ground[i] = width;
        }
    }

}