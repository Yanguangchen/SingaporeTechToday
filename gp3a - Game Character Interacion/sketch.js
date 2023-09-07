/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var isJump;
var gravity;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    gravity = 3;
    isLeft = false;
    isRight = false;
    isFalling = false;
    isJump = false;
}

function draw()
{

/////////////////////////////////////////DRAW  ENVIRONMENT///////////////////////////////////////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon

/////////////////////////////////////////DRAW  CHARACTER///////////////////////////////////////////


    
    
    
    
//----------------------------------------FALLING LEFT---------------------------------------------------------------//
	if(isLeft && isFalling){        
    
    //______________________BODY_______________//
    
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 50, 
         13, 30);
    
     //______________________HEAD________________//

    
    fill(229,190,164)
    stroke(0);
    ellipse(gameChar_x,
            gameChar_y - 60,
            25);
    
    //__________________RIGHT FEET_______________//
    
    fill(0);
    rect(gameChar_x - 13,
         gameChar_y - 20,
        10,6);
    
     //__________________LEFT FEET_______________//

    fill(0);
    rect(gameChar_x + 3,
         gameChar_y - 15,
        10,6);
        
    //------------------EYES-----------------//
    fill(0,0,0);//left eye
    ellipse(gameChar_x - 6,
            gameChar_y - 51,
            3);
    }
    
    //------------------------------------JUMP LEFT------------------------------------------------------------------//

    else if(isJump == true && isLeft == true) {        
    
    //______________________BODY_______________//
    
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 50, 
         13, 30);
    
     //______________________HEAD________________//

    
    fill(229,190,164)
    stroke(0);
    ellipse(gameChar_x,
            gameChar_y - 60,
            25);
    
    //__________________RIGHT FEET_______________//
    
    fill(0);
    rect(gameChar_x - 13,
         gameChar_y - 20,
        10,6);
    
     //__________________LEFT FEET_______________//

    fill(0);
    rect(gameChar_x + 3,
         gameChar_y - 15,
        10,6);
        
    //------------------EYES-----------------//
        
    fill(0,0,0);//left eye
    ellipse(gameChar_x - 6,
            gameChar_y - 63,
            3);
    
        
}
    
    
//----------------------------------------JUMP RIGHT-----------------------------------------------------------------//

	else if(isRight && isJump)

 	{
    
    //______________________BODY______________//
    
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 50, 
         13, 30);
    
    //______________________HEAD________________//
    
    fill(229,190,164);
    stroke(0);
    ellipse(gameChar_x,
            gameChar_y - 60,
            25);
    
    //__________________RIGHT FEET____________//
    
    fill(0);
    rect(gameChar_x + 3,
         gameChar_y - 20,
        10,6);
    
     //__________________LEFT FEET____________//

    
    fill(0);
    rect(gameChar_x - 13,
         gameChar_y - 15,
        10,6);
    
    //---------------------EYES--------------//
    fill(0,0,0); 
    ellipse(gameChar_x + 6,
            gameChar_y - 67,
            3);

	}
    


//----------------------------------------FALLING RIGHT--------------------------------------------------------------//

	else if(isRight && isFalling)

 	{
    
    //______________________BODY______________//
    
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 50, 
         13, 30);
    
    //______________________HEAD________________//
    
    fill(229,190,164);
    stroke(0);
    ellipse(gameChar_x,
            gameChar_y - 60,
            25);
    
    //__________________RIGHT FEET____________//
    
    fill(0);
    rect(gameChar_x + 3,
         gameChar_y - 20,
        10,6);
    
     //__________________LEFT FEET____________//

    
    fill(0);
    rect(gameChar_x - 13,
         gameChar_y - 15,
        10,6);
    
    //---------------------EYES--------------//
    fill(0,0,0); 
    ellipse(gameChar_x + 6,
            gameChar_y - 57,
            3);

	}
    
//----------------------------------------WALK LEFT------------------------------------------------------------------//

	else if(isLeft == true) {   
    
    //______________________BODY______________//
    
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 39, 
         13, 30);
    
   //______________________HEAD________________//
    
    fill(229,190,164)
    stroke(0);
    ellipse(gameChar_x,
            gameChar_y - 50,
            25);
    
    //__________________RIGHT FEET____________//
    
    fill(0);
    rect(gameChar_x,
         gameChar_y - 10,
        10,6);
    
    //__________________LEFT FEET____________//

    fill(0);
    rect(gameChar_x - 15,
         gameChar_y - 10,
        10,6);
    
    //------------------EYES-----------------//
    fill(0,0,0);//left eye
    ellipse(gameChar_x - 6,
            gameChar_y - 51,
            3);
        

	}
    
//----------------------------------------WALK RIGHT-----------------------------------------------------------------//

	else if(isRight == true)
	{
        
    //______________________BODY______________//
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 39, 
         13, 30);
    
   //______________________HEAD________________//
    fill(229,190,164)
    stroke(0);
    ellipse(gameChar_x,
            gameChar_y - 50,
            25);
    
    //__________________RIGHT FEET_____________//
    fill(0);
    rect(gameChar_x + 5,
         gameChar_y - 10,
        10,6);
    
     //__________________LEFT FEET_____________//
    fill(0);
    rect(gameChar_x - 10,
         gameChar_y - 10,
        10,6);
        
    //---------------------EYES--------------//
    fill(0,0,0);
    ellipse(gameChar_x + 6,
            gameChar_y - 51,
            3);

	}
    
//---------------------------------------FALLING DOWN----------------------------------------------------------------//
    
	else if(isFalling == true)
	{
    // add your jumping facing forwards code
        
    //______________________BODY_____________//
    
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 50, 
         13, 30);
    
   //______________________HEAD_______________//
    
    fill(229,190,164)
    stroke(0);
    ellipse(gameChar_x,
            gameChar_y - 60,
            25);
    
    //__________________RIGHT FEET____________//
    
    fill(0);
    rect(gameChar_x + 3,
         gameChar_y - 15,
        10,6);
    
     //__________________LEFT FEET____________//

    
    fill(0);
    rect(gameChar_x - 13,
         gameChar_y - 15,
        10,6);
        
    //---------------------EYES--------------//
    fill(0,0,0); //right eye
    ellipse(gameChar_x + 6,
            gameChar_y - 53,
            3);
        
    fill(0,0,0);//left eye
    ellipse(gameChar_x - 6,
            gameChar_y - 53,
            3);

	}

//---------------------------------------STAND FORWARD---------------------------------------------------------------//

	else {
        
    //______________________BODY______________//
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 39, 
         13, 30);
    
    //______________________HEAD________________//
    fill(229,190,164)
    stroke(0);
    ellipse(gameChar_x,
            gameChar_y - 50,
            25);
    
    //__________________RIGHT FEET_____________//
    fill(0);
    rect(gameChar_x + 3,
         gameChar_y - 10,
        10,6);
     //__________________LEFT FEET____________//
    fill(0);
    rect(gameChar_x - 13,
         gameChar_y - 10,
        10,6);
        
    //---------------------EYES--------------//
    fill(0,0,0); //right eye
    ellipse(gameChar_x + 6,
            gameChar_y - 51,
            3);
        
    fill(0,0,0);//left eye
    ellipse(gameChar_x - 6,
            gameChar_y - 51,
            3);

	}
    


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
///////////////////////////////////////////////////INTERACTION  CODE/////////////////////////////////////////////////
    
//--------------------------------WALK-------------------------------------------X
     if(isLeft == true) {
        gameChar_x -= 5;
         
    }
    
    if(isRight == true) {
        gameChar_x += 5;
    }

//-----------------------------------MAX HEIGHT-----------------------------------X
    
    
    if(isJump == true) {
        gameChar_y -= 10;
        
        if(gameChar_y < 300)  { // If character has reached the max height (300), stop jumping
            isJump = false;
            isFalling = true;
        }
    }
//-------------------------------------GRAVITY------------------------------------X
    
    else if(gameChar_y < floorPos_y) {
        isJump = false;
        gameChar_y += gravity;
    }
//--------------------------------------JUMP RIGHT--------------------------------X
    
    else if((gameChar_y < floorPos_y) && isRight == true) {
        isRight = true;
        isJump = true;
        console.log("jump right");
        
    }
//--------------------------------------FALL RIGHT--------------------------------X
    
    else if(isJump && isRight == true) {
        isRight = true;
        isJump = false;
        isFalling = true;
    }
    
//--------------------------------------FALL LEFT---------------------------------X
    
    else if(isJump && isLeft == true) {
        isLeft = true;
        isJump = false;
        isFalling = true;
    }

//---------------------------------------FALLING TO GROUND------------------------X
    
    else if(gameChar_y >= floorPos_y) {
    isFalling = false;

    }


//---------------------------------------JUMP LEFT--------------------------------X
    
    else if((gameChar_y < floorPos_y) && isLeft == true) {
        isLeft = true;
        isJump = true;
    }

}

//--------------------------------------------------------------------------------X


function keyPressed()
{

    
    if(keyCode == 37) {
        console.log("left arrow");
        isLeft = true;
    }
    
    else if(keyCode == 39) {
        console.log("right arrow");
        isRight = true;
    }
    
//-------------------------JUMP CODE-------------------------------------------------X
    
    
     else if(keyCode == 87 && isJump == false & isFalling == false) {
        isJump = true;
         console.log("w");
    }
    
}

//-----------------------------------------------------------------------------------X

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

    if(keyCode == 37) {
    isLeft = false;
        
    }
    
    else if(keyCode == 39) {
        isRight = false;
    }
    

//-----------------------------------------------------------------------------------X

    
}