/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon = 550;
var collectable = 1;

var mountain = 0; 
//adjust this variable to shift the moutain on the x axis ranging from 1 to 6

var cloud = 100;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;   //this value is 512
	treePos_y = height/2;  //this value is 288
    

    
}

function draw()
{
	background(100, 155, 255); //fill the sky blue


    //---------------------------floor as a foreground-------------------------X
    noStroke();//                                                              |
	fill(0, 155, 0);//                                                         |
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground  |
    //                                                                         |
    //                                                                         |
    //-------------------------------------------------------------------------|
    

    //----------------------MOUTAINS---------------------------------------X    
fill(100,100,100);

moutains ={
    
    x_pos_scale: 100 * mountain //just increase the 0 value to move    |
}
    
    
fill(100,100,100);

//--------------------------TRIANGLE-----------------------------------X
//                                                                     |
triangle(100 + moutains.x_pos_scale, 260, 
         300 + moutains.x_pos_scale, 434,
         0 + moutains.x_pos_scale, 434);  // Third Triangle            |
//                                                                     |
triangle(300 + moutains.x_pos_scale, 200,
         500 + moutains.x_pos_scale, 434, 
         200 + moutains.x_pos_scale, 434); // Second Triangle          |
//                                                                     |
triangle(200 + moutains.x_pos_scale, 260,
         400 + moutains.x_pos_scale, 434, 
         100 + moutains.x_pos_scale, 434); // third triangle           |

//---------------------------------------------------------------------X
    
    
    //----------------------------------------T__R__E__E--------------------------------------------------------//
      
    //these are the original branch coordinate
    //triangle(480,340, 580,340, 530, 230);
    //triangle(480,370, 580,370,530, 230);
    
    
    let bop = sin(frameCount / 20) * 4; //----to add bopping effect

    tree = {
        
        //---------------These are the original branch coordinate-----------------X
        //                triangle(480, 340, 580, 340, 530, 230);                 |
        //                triangle(480, 370, 580, 370, 530, 230);                 |
        //------------------------------------------------------------------------X
        
        
        trunk_Pos_x: treePos_x,
        trunk_Pos_y: treePos_y + bop, // Add bop to y position

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
        bottomBranch_1x: treePos_x - 32,      //left end of triange      |
        bottomBranch_1y: treePos_y + 82, 
        //---------------------------------------------------------------|
        bottomBranch_2x: treePos_x + 68,     //right end of triangle     |
        bottomBranch_2y: treePos_y + 82,
        //---------------------------------------------------------------|
        bottomBranch_3x: treePos_x + 18,     //Apex of the triangle      |
        bottomBranch_3y: treePos_y - 58
        //---------------------------------------------------------------X
        
    };

    //-----------------------TRUNK---------------------------------------X
    
    fill(139,69,19);
    noStroke();
    rect(tree.trunk_Pos_x,tree.trunk_Pos_y,33,200);
    
    //---------------TREE__TRIANGLE_BRANCHES-----------------------------X
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
    
    
    
    
    
    

//----------------------------------C_L_O_U_D_S------------------------------------------|
    
    noStroke();
    fill(255,255,255);
    clouds = {
        scale: 1,
        midWidth: 100,
        midHeight: 100,
        smallWidth: 50,
        smallHeight: 50,
        largeWidth: 120,
        largeHeight: 120

    };
    
    //---------------------RIGHT__PIECE---------X
    ellipse(cloud + 90,
            cloud + 30 + 2 * bop,
            clouds.midWidth * clouds.scale,
            clouds.midHeight * clouds.scale);
    
    //---------------------CENTER__PIECE--------X
    
    ellipse(cloud + 40,
            cloud + 30 + 2 * bop,
            clouds.largeWidth * clouds.scale,
            clouds.largeHeight * clouds.scale);
    
    //---------------------CENTER__PIECE--------X
    ellipse(cloud + 130,
            cloud + 30 + 2 *bop,
            clouds.smallWidth * clouds.scale,
            clouds.smallHeight * clouds.scale);
    
    //---------------------LEFT__PIECE----------X
    ellipse(cloud - 10,
            cloud + 30 + 2 * bop,
            clouds.midWidth * clouds.scale,
            clouds.midHeight * clouds.scale);
    
    //------------------------------------------X



    
//----------------------------C H A R A C T E R--------------------------------X
    
    //----------------------------------BODY-----------------------------------X
    fill(128, 6, 23);
    stroke(0);
    rect(gameChar_x - 6.5, 
         gameChar_y - 39, 
         13, 30);

//----------------------------------HEAD-----------------------------------X
    
    fill(255, 255, 255);
    stroke(0);
    ellipse(gameChar_x,
            gameChar_y - 50,
            25);
    
//----------------------------------RIGHT__FEET----------------------------X
    
    fill(0);
    rect(gameChar_x + 3,
         gameChar_y - 10,
        10,6);
//----------------------------------LEFT__FEET-----------------------------X
    
    fill(0);
    rect(gameChar_x - 13,
         gameChar_y - 10,
        10,6);
    

//--------------------------------COLLECTABLE------------------------------X
    
    
fill(218,165,32);
//var collectable is the scale factor
coin = {
    
    coin_Posx: 0 * 100,
    coin_Posy: 0 * 10
};
    
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
rect(438 + coin.coin_Posx, 
     400 + coin.coin_Posy + bop, 
     4 * collectable, 
     20 * collectable);



    

    
//---------------------------FLOOR__AS__FOREGROUND---------------------------------------X
     stroke(0);                                       //Floor border color               |
     strokeWeight(3);                                 //Floor Thickness                  |              
	 fill(0, 155, 0);                                 //Floor Color                      |
	 rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground  
    
//--------------------------CANYON-------------------------------------------------------|  
    fill(205,133,63);
    stroke(0);
    rect(canyon,floorPos_y,30,150)

    
//---------------------------------------------------------------------------------------X
    
   gameChar_x = mouseX;
    gameChar_y = mouseY; 
    
//-------------------------------DE__BUGGER----------------------------------------------X
    console.log(tree.topBranchPos_1x);
    console.log(tree.topBranchPos_1y);
    console.log(tree.topBranchPos_2x);
    console.log(tree.topBranchPos_2y);
    console.log(tree.bottomBranch_2x);
    console.log(tree.bottomBranch_2y);
    console.log(tree.bottomBranch_3x);
    console.log(tree.bottomBranch_3y);
    console.log(gameChar_x);
    console.log(gameChar_y);
  
}



