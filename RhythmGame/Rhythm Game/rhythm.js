
//initialize canvas



//background


//aura
hide ('auraone');
hide ('auratwo');
hide ('aurathree');
 hide('aurafour');
 hide('aurafive');
//score

var score = 0;

//triggers
const redmain = new Image();
redmain.src ="img/redmain.png";

const yellowmain = new Image();
 yellowmain.src ="img/yellowmain.png";

 const greenmain = new Image();
 greenmain.src ="img/greenmain.png";

 const bluemain = new Image();
 bluemain.src = "img/bluemain.png";
    
 const purplemain = new Image();
 purplemain.src = "img/purplemain.png";

 


var height = 100;
var height2 = 100;
var height3 = 100;
var height4 = 100;
var height5 = 100;

var randomNum;
var randomNum2;
var randomNum3;
var randomNum4;
var randomNum5;

 var totalscore;

document.addEventListener('keydown', direction);

updateScore();

function updateScore() {
	

	if (buttonstate== false) {
		score = 0;

	 }
    document.getElementById("myText").innerHTML = score;
}


function direction (event) {
   let key = event.keyCode;
    if (key == 65) {
    	if ((randomNum==0||randomNum2 ==0||randomNum3 ==0|| randomNum4==0
	    || randomNum5 ==0) && ((height > 500 && height <600)||
   (height2 > 500 && height2 <600)|| (height3 > 500 && height3 <600)||
    (height4 > 500 && height4 <600)||(height5 > 500 && height5 <600))) { 
    			 score+= 10; 
    		 }
    	else {
    		score -= 5;
    	}
    
     show('auraone');
     setTimeout(function(){ hide('auraone'); }, 200);
     updateScore();

     //setTimeout(hide('auraone'), 2000);
    }
    if (key == 83) {
    	if ((randomNum==1||randomNum2 ==1||randomNum3 ==1|| randomNum4==1
    		    || randomNum5 ==1) && ((height > 500 && height <600)||
    	   (height2 > 500 && height2 <600)|| (height3 > 500 && height3 <600)||
    	    (height4 > 500 && height4 <600)||(height5 > 500 && height5 <600))) { 
    	    			 score+= 10; 
    	    		 }
    	else {
    		score -= 5;
    	}
        show('auratwo');
        setTimeout(function(){ hide('auratwo'); }, 200);
     
    
        updateScore();
        
    }
    if (key == 68) {
    	if ((randomNum==2||randomNum2 ==2||randomNum3 ==2|| randomNum4==2
    		    || randomNum5 ==2) && ((height > 500 && height <600)||
    	   (height2 > 500 && height2 <600)|| (height3 > 500 && height3 <600)||
    	    (height4 > 500 && height4 <600)||(height5 > 500 && height5 <600))) { 
    	    			 score+= 10; 
    	    		 }
    	else {
    		score -= 5;
    	}
        show('aurathree');
        setTimeout(function(){ hide('aurathree'); }, 200);
        updateScore();
    }
    if (key == 74) {
    	if ((randomNum==3||randomNum2 ==3||randomNum3 ==3|| randomNum4==3
    		    || randomNum5 ==3) && ((height > 500 && height <600)||
    	   (height2 > 500 && height2 <600)|| (height3 > 500 && height3 <600)||
    	    (height4 > 500 && height4 <600)||(height5 > 500 && height5 <600))) { 
    	    			 score+= 10; 
    	    		 }
    	else {
    		score -= 5;
    	}
   
        show('aurafour');
        setTimeout(function(){ hide('aurafour'); }, 200);
        updateScore();
    }
    if (key == 75) {  
    if ((randomNum==4||randomNum2 ==4||randomNum3 ==4|| randomNum4==4
      || randomNum5 ==4) && ((height > 500 && height <600)||
   (height2 > 500 && height2 <600)|| (height3 > 500 && height3 <600)||
  (height4 > 500 && height4 <600)||(height5 > 500 && height5 <600))) { 
    	   score+= 10;     		 }
    	else {
    		score -= 5;
    	}
     show('aurafive');
     setTimeout(function(){ hide('aurafive'); }, 200);
     updateScore();
    }
   
}

var buttonstate = false;
var x = document.getElementById('crossme'); 
var y = document.getElementById('rescueme'); 
var z = document.getElementById('oldtownroad');
var a = document.getElementById('faded');
var myPix = new Array("img/rednote.png","img/yellownote.png",
		"img/greennote.png","img/bluenote.png","img/purplenote.png");

function playCrossMe() { 
	if (buttonstate ==false) {
		score = 0;
		totalscore = 0;
    x.play(); 
    buttonstate =true;
    runGame();
    setTimeout(function(){ stopRescueMe(); }, 206000);
    updateScore();
    
	}
} 
function stopCrossMe() { 
    buttonstate =false;
    x.pause();
    totalscore= score;
    updateScore();
    hide('myImage');
    hide('myImage2');
    hide('myImage3');
    hide('myImage4');
    hide('myImage5');
    document.getElementById("myText2").innerHTML = totalscore;
	
} 
function playRescueMe() {
	if (buttonstate ==false) {
		score = 0;
		totalscore = 0;
	y.play();
	buttonstate =true;
	runGame();
	setTimeout(function(){ stopRescueMe(); }, 159000);
	updateScore();
	}
}
function stopRescueMe() { 
    buttonstate =false;
    y.pause();
    
    totalscore= score;
    updateScore();
    hide('myImage');
    hide('myImage2');
    hide('myImage3');
    hide('myImage4');
    hide('myImage5');
    document.getElementById("myText2").innerHTML = totalscore;
	
} 
function playOldTownRoad() {
	
	if (buttonstate ==false) {
		score = 0;
		totalscore = 0;
	z.play();
	buttonstate=true;
	runGame();
	setTimeout(function(){ stopOldTownRoad(); }, 113000);
	updateScore();
	}
}
function stopOldTownRoad() { 
    buttonstate =false;
    z.pause();
    totalscore= score;
    updateScore();
    hide('myImage');
    hide('myImage2');
    hide('myImage3');
    hide('myImage4');
    hide('myImage5');
    document.getElementById("myText2").innerHTML = totalscore;
	
} 

function playFaded() {
	
if (buttonstate ==false) {
	score = 0;
	  totalscore=0;
	a.play();
	buttonstate=true;
	runGame();
	setTimeout(function(){ stopFaded(); }, 213000);
	updateScore();
	 
}
}

function stopFaded() { 
    buttonstate =false;
    a.pause();
    totalscore= score;
    updateScore();
    hide('myImage');
    hide('myImage2');
    hide('myImage3');
    hide('myImage4');
    hide('myImage5');
    document.getElementById("myText2").innerHTML = totalscore;
} 
function updateScore() {
	if (buttonstate ==false) {
		score= 0;
		
	}
	
    document.getElementById("myText").innerHTML = score;
}


function randomize() {
	randomNum = Math.floor((Math.random() * 5));
	decidesNote('myImage', randomNum);
	document.getElementById('myImage').src = myPix[randomNum]; 
	
}
function randomize2() {
	randomNum2 = Math.floor((Math.random() * 5));
	decidesNote('myImage2', randomNum2);
	
	document.getElementById('myImage2').src = myPix[randomNum2]; 

}
function randomize3() {
	randomNum3 = Math.floor((Math.random() * 5));
	decidesNote('myImage3', randomNum3);
	document.getElementById('myImage3').src = myPix[randomNum3]; 
	
	
}
function randomize4() {
	randomNum4 = Math.floor((Math.random() * 5));
	decidesNote('myImage4', randomNum4);
	document.getElementById('myImage4').src = myPix[randomNum4]; 
	
	
}
function randomize5() {
	randomNum5 = Math.floor((Math.random() * 5));
	decidesNote('myImage5', randomNum5);
	document.getElementById('myImage5').src = myPix[randomNum5]; 

	
}



function runGame() {

 randomNum = Math.floor((Math.random() * 5));
 randomNum2 = Math.floor((Math.random() * 5));
 randomNum3 = Math.floor((Math.random() * 5));
 randomNum4 = Math.floor((Math.random() * 5));
 randomNum5 = Math.floor((Math.random() * 5));
decidesNote('myImage', randomNum);
decidesNote('myImage2', randomNum2);
decidesNote('myImage3', randomNum3);
decidesNote('myImage4', randomNum4);
decidesNote('myImage5', randomNum5);
 document.getElementById('myImage').src = myPix[randomNum]; 
document.getElementById('myImage2').src = myPix[randomNum2]; 

 document.getElementById('myImage3').src = myPix[randomNum3];
document.getElementById('myImage4').src = myPix[randomNum4]; 

document.getElementById('myImage5').src = myPix[randomNum5];

 
	
		height = 100;
		height2= 100;
		height3=100;
		height4= 100;
		height5 = 100;
	setInterval(function(){  
		 if (buttonstate == true) {
		height+= 10;
	 height2+= 10;
	 height3+=10;
	 height4+= 10;
	 height5+=10;
	document.getElementById('myImage').style.position="absolute";
	 document.getElementById('myImage').style.top=""+height+"";
	 document.getElementById('myImage2').style.position="absolute";
	 document.getElementById('myImage2').style.top=""+height2+"";
	 document.getElementById('myImage3').style.position="absolute";
	 document.getElementById('myImage3').style.top=""+height3+"";
	 document.getElementById('myImage4').style.position="absolute";
	 document.getElementById('myImage4').style.top=""+height4+"";
	 document.getElementById('myImage5').style.position="absolute";
	 document.getElementById('myImage5').style.top=""+height5+"";
     if (height > 700 ){
    	 height = 100;
    	 randomize();
     }
     if (height2>700) {
    	 height2 =100;
    	 randomize2();
     }
     if (height3>700) {
    	 height3 =100;
    	 randomize3();
     }
     if (height4 >700) {
    	 height4 = 100;
    	 randomize4();
     }
     if (height5>700){
    	 height5 = 100;
    	 randomize5();
     }
		 }}, 25);

}
function decidesNote(img, num) {
if(num == 0) { 
	 document.getElementById(img).style.position="absolute";
	 document.getElementById(img).style.left="657";
	 document.getElementById(img).style.top="100";
	}
	if(num == 1) { 
		 document.getElementById(img).style.position="absolute";
		 document.getElementById(img).style.left="757";
		 document.getElementById(img).style.top="100";
	}
	if(num == 2) { 
		 document.getElementById(img).style.position="absolute";
		 document.getElementById(img).style.left="857";
		 document.getElementById(img).style.top="100";
	}
	if(num == 3) { 
		 document.getElementById(img).style.position="absolute";
		 document.getElementById(img).style.left="957";
		 document.getElementById(img).style.top="100";
		}
	if(num == 4) { 
		 document.getElementById(img).style.position="absolute";
		 document.getElementById(img).style.left="1057";
		 document.getElementById(img).style.top="100";
		}
}
    
function show (id) {
    document.getElementById(id).style.visibility = "visible";
}

function hide (id) {
    document.getElementById(id).style.visibility = "hidden";
}
