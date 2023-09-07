var i;
var Pos_x = 10;
var Pos_y = 300;
var back =  false;
function setup() {
  createCanvas(1000, 1000);
    background(random(0,255), random(0,255), random(0,255));


}



function draw() {
    ellipse(Pos_x,Pos_y,50);

    if(Pos_x == width) {
        Pos_y = 360;
        back = true;
    }
    
    else if(back == true) {
        Pos_x -= 10;
        ellipse(Pos_x,Pos_y,50);
    
    }
    
    else {
        Pos_x += 10;
    }
    
    
  }
  

  

