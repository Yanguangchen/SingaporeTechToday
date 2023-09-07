/*

The Game Project

Week 3

Game interaction

*/


//-----------------------------------GLOBAL VARIABLES-----------------------------------------------//


//----------POSITIONING VARIABLES------------//
var gameChar_x;
var gameChar_y;
var floorPos_y;
var collectable = 0.70;
var treePos_x;
var treePos_y;

//----------MOVEMENT VARIABLES---------------//
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var isJump;

//----------ENVIRONMENTAL MECHANICS----------//
var gravity;
var bop;
var walkbop;
var Lavabop;
var cloudbop;

//---------------BOOLEAN FLAGS--------------//
var ground = true;
var lose = false; //True when characters fall into canyon 
var isFound = false; //True when character found the collectible 
//------------------------------------------//









function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4 -3;
	gameChar_x = width/2;
	gameChar_y = floorPos_y - 3;
    
//----------------------------------BOOLEAN FLAGS: GAME ENVIRONMENT MECHANICS----------------------------------------//
    gravity = 3;
    isLeft = false;
    isRight = false;
    isFalling = false;
    isJump = false;
    
//------------------------------------------------COLLECTIBLE SETUP--------------------------------------------------//
    coin = {

        coin_Posx: 100,
        coin_Posy: -5,
        isFound: false
    };
    
//--------------------------------------------------MOUTAIN SETUP----------------------------------------------------//
    moutains ={
    
    x_pos_scale: 100 //just increase the value to move moutains horizontally 
}

}

//-------------------------------------------------TREE  SETUP-------------------------------------------------------//

	treePos_x = 512  
	treePos_y = 288  








function draw()
{
    
    

/////////////////////////////////////////DRAW  ENVIRONMENT///////////////////////////////////////////

	background(0,130,229); //fill the sky blue

    
//---------------------------------------ANIMATIONS-----------------------------------------------------------------//
    
bop = 5 * sin(frameCount / 10);
walkbop = 1.5 * sin(frameCount / 1.4); //for walking animation
Lavabopbop = 10 * sin(frameCount / 3.5);
cloudbop = 8 * sin(frameCount / 30);


	

//-------------------CLOUDS--------------
noStroke();
	
	
	
	fill(255,255,255);
    ellipse(200,130 + cloudbop,100,100);
    ellipse(150,130 + cloudbop,100,110);
    ellipse(150,100 + cloudbop,80,80);
    ellipse(100,130 + cloudbop,100,100);
    ellipse(250,130 + cloudbop,50,50);
    ellipse(60,130 + cloudbop,80,50);    
    
//---------------------------------------MOUTAINS-------------------------------------------------------------------//

    

//--------------------------TRIANGLES-----------------------------------X

noStroke();
    
fill(57, 67, 92);
triangle(100 + moutains.x_pos_scale, 260, 
         300 + moutains.x_pos_scale, 434,
         0 + moutains.x_pos_scale, 434);  // first Triangle 

fill(70, 82, 112);
triangle(100 + moutains.x_pos_scale, 260, 
         200 + moutains.x_pos_scale, 434,
         0 + moutains.x_pos_scale, 434);  // first Shadow
    
fill(70, 82, 112);                                                          
triangle(200 + moutains.x_pos_scale, 200,
         400 + moutains.x_pos_scale, 434, 
         40 + moutains.x_pos_scale, 434); // Second Triangle   
    
    
fill(57, 67, 92);                                                          
triangle(200 + moutains.x_pos_scale, 200,
         450 + moutains.x_pos_scale, 434, 
         330 + moutains.x_pos_scale, 434); // Second shadow   
                                                                  
//---------------------------------------------------------------------X

//This to fix a bug where if i were to apply stroke to the ground, all stroke will be applied to every object in the game
	
if(ground == true) {
    stroke(0)
	strokeWeight(2);
	fill(0,155,0);
	rect(0, floorPos_y, width - 300, height - floorPos_y); 
    rect(900, floorPos_y, width, height - floorPos_y);
}

	
	
	
	
	
	
	
//-------------------------------------TREE-----------------------------------------------------------------------//
 tree = {

        trunk_Pos_x: treePos_x,
        trunk_Pos_y: treePos_y, 

        //--------------------- TOP TRIANGE, APEX------------------------X
        topBranchPos_1x: treePos_x - 32, //the apex of the triangle      |
        topBranchPos_1y: treePos_y + 52,
        //---------------------------------------------------------------X
        topBranchPos_2x: treePos_x + 68, //right end of triangle         |
        topBranchPos_2y: treePos_y + 52,
        //---------------------------------------------------------------X
        topBranchPos_3x: treePos_x + 18, //left end of triangle          |
        topBranchPos_3y: treePos_y - 58,
        //---------------------------------------------------------------X
        
        
        //---------------------BOTTOM TRIANGLE---------------------------X
        bottomBranch_1x: treePos_x - 32, //left end of triange           |
        bottomBranch_1y: treePos_y + 82, 
        //---------------------------------------------------------------|
        bottomBranch_2x: treePos_x + 68, //right end of triangle         |
        bottomBranch_2y: treePos_y + 82,
        //---------------------------------------------------------------|
        bottomBranch_3x: treePos_x + 18, //Apex of the triangle          |
        bottomBranch_3y: treePos_y - 58
        //---------------------------------------------------------------X
        
    };

//-----------------------TRUNK-------------------------------------------X
    
    fill(139,69,19);
    noStroke();
    rect(tree.trunk_Pos_x,tree.trunk_Pos_y,33,140);
    
//---------------TREE__TRIANGLE_BRANCHES---------------------------------X
                                                                        //
    fill(85,107,47);                                                    //
                                                                        //
    //------------------TOP  BRANCHES------------------------------------X
    triangle(tree.topBranchPos_1x,  //                                   |
             tree.topBranchPos_1y,  //                                   |
             //---------------------//                                   |
             tree.topBranchPos_2x,  //                                   |
             tree.topBranchPos_2y,  //                                   |
             //---------------------//                                   |
             tree.topBranchPos_3x,  //                                   |
             tree.topBranchPos_3y); //                                   |
                                    //                                   |
    //------------------BOTTOM  BRANCHES---------------------------------|
     triangle(tree.bottomBranch_1x, //                                   |
             tree.bottomBranch_1y,  //                                   |
            //----------------------//                                   |
             tree.bottomBranch_2x,  //                                   |
             tree.bottomBranch_2y,  //                                   |
            //----------------------//                                   |
             tree.bottomBranch_3x,  //                                   |
             tree.bottomBranch_3y); //                                   |
    //___________________________________________________________________X
    
	
	
	
	
	
	
	
	
	
	
	
	
	
//-------------------------LAVA----------------------------------------------------------|

noStroke(0);
fill(225, 40, 0);
rect(731, floorPos_y + 80 + (bop * 0.75) ,168 ,90);

//--------------------------CANYON-------------------------------------------------------|  
    fill(205,133,63);
    stroke(0);
    rect(700,floorPos_y,30,150);
    rect(900,floorPos_y,30,150);

if(gameChar_x > 733 && gameChar_x < 867 && gameChar_y >= floorPos_y) {  //This code prevents the player from noclipping 
    isFalling = true;
    isPlummeting = true;
    gravity = gravity * 1.2;
    gameChar_y += gravity;
    lose = true;
	console.log("Player Died");
	
	
	//-------------------Text to display that character has Died------------//
    fill(255);
    text("You died",gameChar_x,300);
    textSize(32);
    textFont("comic sans MS");

}
	

    

//---------------------------------------COLLECTABLE---------------------------------------------------------------//
    

if(dist(gameChar_x, gameChar_y , (coin.coin_Posx + 439), (coin.coin_Posy + 420) + bop) < 20) {
    coin.isFound = true;
}
else if(coin.isFound == false) {
    

    stroke(0);
    fill(218,165,32);
    ellipse(440 + coin.coin_Posx, 
            410 + coin.coin_Posy + bop, 
            35 * collectable, 
            40 * collectable);

    fill(255 ,215,0);
        ellipse(440 + coin.coin_Posx,
                410 + coin.coin_Posy + bop, 
                25 * collectable, 
                30 * collectable);

    fill(218,165,32);
        rect(439 + coin.coin_Posx, 
             403 + coin.coin_Posy + bop, 
             4 * collectable, 
             20 * collectable);
}

	
	
	
	
	


/////////////////////////////////////////DRAW  CHARACTER//////////////////////////////////////////////////////////


    
    
//----------------------------------------FALLING LEFT--------------------------------------------------------------//
	
	if(isLeft && isFalling){        
    
    //______________________BODY_______________//
    
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 50, 
         13, 30,4);
    
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
        10,6,4);
        
    //------------------EYES-----------------//
    fill(0,0,0);//left eye
    ellipse(gameChar_x - 6,
            gameChar_y - 51,
            3);
    }
    
//---------------------------------------JUMP LEFT-----------------------------------------------------------------//

    else if(isJump == true && isLeft == true) {        
    
    //______________________BODY_______________//
    
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 50, 
         13, 30,4);
    
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
        10,6,4);
    
     //__________________LEFT FEET_______________//

    fill(0);
    rect(gameChar_x + 3,
         gameChar_y - 15,
        10,6,4);
        
    //------------------EYES-----------------//
        
    fill(0,0,0);//left eye
    ellipse(gameChar_x - 6,
            gameChar_y - 63,
            3);      
}
    
//----------------------------------------JUMP RIGHT---------------------------------------------------------------//
	else if(isRight && isJump) {
    
    //______________________BODY______________//
    
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 50, 
         13, 30,4);
    
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
        10,6,4);
    
     //__________________LEFT FEET____________//

    
    fill(0);
    rect(gameChar_x - 13,
         gameChar_y - 15,
        10,6,4);
    
    //---------------------EYES--------------//
    fill(0,0,0); 
    ellipse(gameChar_x + 6,
            gameChar_y - 67,
            3);

	}
    
//---------------------------------------FALLING RIGHT------------------------------------------------------------//
 	else if(isRight && isFalling) {
    
    //______________________BODY______________//
    
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 50, 
         13, 30,4);
    
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
        10,6,4);
    
     //__________________LEFT FEET____________//

    
    fill(0);
    rect(gameChar_x - 13,
         gameChar_y - 15,
        10,6,4);
    
    //---------------------EYES--------------//
    fill(0,0,0); 
    ellipse(gameChar_x + 6,
            gameChar_y - 57,
            3);

	}
    
//----------------------------------------WALK LEFT---------------------------------------------------------------//

	else if(isLeft == true) {
    
    //______________________BODY______________//
    
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 39, 
         13, 30,4);
    
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
        10,6,4);
    
    //__________________LEFT FEET____________//

    fill(0);
    rect(gameChar_x - 15,
         gameChar_y - 10,
        10,6,4);
    
    //------------------EYES-----------------//
    fill(0,0,0);//left eye
    ellipse(gameChar_x - 6,
            gameChar_y - 51,
            3);
        

	}
    
//----------------------------------------WALK RIGHT--------------------------------------------------------------//

	else if(isRight == true) {
        
    //______________________BODY______________//
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 39, 
         13, 30,4);
    
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
        10,6,4);
    
     //__________________LEFT FEET_____________//
    fill(0);
    rect(gameChar_x - 10,
         gameChar_y - 10,
        10,6,4);
        
    //---------------------EYES--------------//
    fill(0,0,0);
    ellipse(gameChar_x + 6,
            gameChar_y - 51,
            3);

	}
    
//----------------------------------------FALLING DOWN-----------------------------------------------------------//
    
	else if(isFalling == true) {
    // add your jumping facing forwards code
        
    //______________________BODY_____________//
    
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 50, 
         13, 30,4);
    
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
        10,6,4);
    
     //__________________LEFT FEET____________//

    
    fill(0);
    rect(gameChar_x - 13,
         gameChar_y - 15,
        10,6,4);
        
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

//----------------------------------------JUMP UP----------------------------------------------------------------//
    else if(isJump == true) {
        
    //______________________BODY______________//
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 39, 
         13, 30,4);
    
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
        10,6,3);
     //__________________LEFT FEET____________//
    fill(0);
    rect(gameChar_x - 13,
         gameChar_y - 10,
        10,6,3);
        
    //---------------------EYES--------------//
    fill(0,0,0); //right eye
    ellipse(gameChar_x + 6,
            gameChar_y - 57,
            3);
        
    fill(0,0,0);//left eye
    ellipse(gameChar_x - 6,
            gameChar_y - 57,
            3);
    }
    
//----------------------------------------STAND FORWARD----------------------------------------------------------//

	else {
        
    //______________________BODY______________//
    fill(128, 6, 23);
    stroke(0,0,0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 39, 
         13, 30,4);
    
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
        10,6,3);
     //__________________LEFT FEET____________//
    fill(0);
    rect(gameChar_x - 13,
         gameChar_y - 10,
        10,6,3);
        
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

    
    if(gameChar_y > 434 && (isFalling == false || isPlummeting == false)) {
        
        gameChar_y = floorPos_y; //this is to prevent a bug where sometimes the character falls through the floor slowly
    }
    
    if(isLeft == true && (isJump == true || isFalling ==true)) {
    gameChar_x -= 5;
         
    }
    
    if(isRight == true && (isJump == true || isFalling == true)) {
    gameChar_x += 5;

    }
    
    
//comments: This is to prevent the walkbop animation from activating while jumping for while falling
 
    
    
//-------------------------------------ANIMATED__WALK-----------------------------X
    
    
    if(isLeft == true && isJump == false && isFalling == false) {
        gameChar_x -= 5;
        gameChar_y = gameChar_y + walkbop; //for walking animation         
    }
    
    if(isRight == true && isJump == false && isFalling == false) {
        gameChar_x += 5;
        gameChar_y = gameChar_y + walkbop; //for walking animation

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
	
//-------------------------------------JUMP RIGHT---------------------------------X
    
    else if((gameChar_y < floorPos_y) && isRight == true) {
        isRight = true;
        isJump = true;
        
    }
	
//-------------------------------------FALL RIGHT---------------------------------X
    
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

	
	
	
	
	
	
//----------------------CONSOLE LOG FOR DEBUGGING PURPOSES------------------------X
	
	if(isJump == true) {
		console.log("Jump");
	}
	
	if(isFalling == true) {
		console.log("Falling");
	}
	
	if(isFound == true) {
		console.log("Collectible Found")
	}
	
	if(isLeft == true) {
		console.log("Moving Left: Left Arrow");
	}
	
	if(isRight == true) {
		console.log("Moving Right: Right Arrow");
	}
	
	if(isPlummeting == true) {
		console.log("Plummeting");
	}
	
	if(lose == true) {
		console.log("Character Died");
	}

}

//--------------------------------------------------------------------------------X












function keyPressed()
{

    
    if(keyCode == 37 && lose == false) {
        isLeft = true;

    }
    
    else if(keyCode == 39 && lose == false) {
        isRight = true;

    }
    
//-------------------------JUMP CODE-------------------------------------------------X
    
    
     else if(keyCode == 87 && isJump == false & isFalling == false && lose == false) {
        isJump = true;
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
        
}