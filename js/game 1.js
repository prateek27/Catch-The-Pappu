//Create the Canvas
var canvas=document.createElement("canvas");
var ctxt=canvas.getContext("2d");
canvas.width=1225;
canvas.height=600;
document.body.appendChild(canvas);

//Background Image
var bgloaded=false;
var background=new Image();
background.onload=function(){
bgloaded=true;
};
background.src="images/background.png";

//hero Image
var modiLoaded=false;
var modi=new Image();
modi.onload=function(){
modiLoaded=true;
};
modi.src="images/hero.png";

//Monster pappu Image
var rahulLoaded=false;
var rahul=new Image();
rahul.onload=function(){
rahulLoaded=true;
};

rahul.src="images/pappu.png";

//Collision Sound
soundLoaded=true;
var a=document.getElementById("col");
a.src="sounds/a.wav";





//Game Objects
var hero ={speed: 400};
var monster={};
var monstersCaught=0;

//KeyBoard controls
var keysDown={};

addEventListener("keydown",function(a){keysDown[a.keyCode]=true;},false);
addEventListener("keyup",function(a){delete keysDown[a.keyCode];},false);
d=true;
//Reset a Game
var reset=function(){
var oldmonserx;
var oldmontery;

if(d){
hero.x=canvas.width/3;
hero.y=canvas.height/3;
d=false;
}
else
{
hero.x=oldmonsterx;
hero.y=oldmonstery;
}

//Throw the monster somewhere in the screen
monster.x=(Math.random()*(canvas.width-137));
monster.y=(Math.random()*(canvas.height-247));
oldmonsterx=monster.x;
oldmonstery=monster.y;
};

//Update Game Objects
var update=function(herofier){
 if(hero.y<=-220){
    hero.y = canvas.height ; 
    }
   if(hero.y>canvas.height){
         hero.y =-220; 
         }
   if(hero.x <=-90 )
      { 
	  hero.x= canvas.width ; }
	if(hero.x >canvas.width )
     { 
	 hero.x= -90;  
  }
	 
if(37 in keysDown)
{ hero.x+=hero.speed*herofier;}

if(38 in keysDown){
hero.y+=hero.speed*herofier;}

if(39 in keysDown){
hero.x-=hero.speed*herofier;
}
if(40 in keysDown){
hero.y-=hero.speed*herofier;
}
//Are they touching
if((monster.x-hero.x)<=105&&(hero.x-monster.x)<=97&&(monster.y-hero.y)<=247&&(hero.y-monster.y)<=203)
{
if(soundLoaded)
a.play();
monstersCaught++;
reset();

}};
var render=function(){
if(bgloaded){
ctxt.drawImage(background,0,0);
}
if(modiLoaded){
ctxt.drawImage(modi,hero.x,hero.y);

}
if(rahulLoaded){
ctxt.drawImage(rahul,monster.x,monster.y);
}

//Score


ctxt.fillStyle = "rgb(240, 7, 7)";
ctxt.font="bold 24px Arial ";
ctxt.textAlign="left";
ctxt.textBaseLine="top";
ctxt.fillText("Pappu's caught :"+monstersCaught,40,40);

};

var main=function(){
var now=Date.now();
var delta=then-now;
update(delta/1000);
render();

then=now;
};

reset();
var then=Date.now();
setInterval(main,1);
