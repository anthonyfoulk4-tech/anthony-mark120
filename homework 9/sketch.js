var myage = 26
var myname = "Anthony Foulk"

var x = 195;
var y = 400;
var myx = 195;
var myy = 215;
var mxxx = 150;
var myyy = 193;
var myyyy = 250;
var myx2 = 193;
var myy2 = 235;
var myy3 = 193;
var myx3 = 150;
var movement = 1;
var movement1 = 1;
var textsize = 20;
var count = 0;



var mybodymoves = 1;
var myheadmoves = 1;
var myeyemoves = 1;


function setup() {
createCanvas(400,400);
}

function draw() {
background (144,224,214);

console.log(myage);
console.log(myname);

fill(0);
noStroke();
textSize(12);
text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);

if(x >= 400 || x <= 0){

    mybodymoves *= -1;
   
}
x+= mybodymoves;

if(mxxx >= 400 || mxxx <= 0){

    myeyemoves *= -1;  
}
mxxx+= myeyemoves;

if(myy2 >= 400 || myy2 <= 0){

    myeyemoves *= -1;

}
myy2+= myeyemoves;

if(myx3 >= 400 || myx3 <= 0){  

    movement *= -1;

}
myx3+= movement; 
myy3+= movement; 


ellipse (x,y,350,180);

fill (255);
stroke (255);
strokeWeight (2);
line (94,400,94,351);
line (300,400,300,351);

fill (210,180,140);
stroke (210);
strokeWeight (2);
line (153,329,153,287);
line (242,329,242,287);

ellipse (195,215,190,180);

circle (myx,myy,190);
myx = mouseX;
myy = mouseY;   


circle (mxxx,myyy,40);
mxxx = mouseY;
circle (235,193,40);
circle (195,myyyy,40);
myyyy = mouseX;
fill (0);
circle (myx3,myy3,20);

circle (myx2,myy2,20);


fill (0)
stroke (0);
strokeWeight(2);
line (113,168,113,150);
line (277,168,277,150);
line(113,150,132,108);
line(277,150,258,108);  
line(132,108,258,108);
line(113,168,132,108);
line(277,168,258,108);
line(113,168,277,168);
line(132,108,258,108);


textSize(textsize);
count ++;
textsize += movement1;

if( count >= 10){
    movement1 *= -1;
    count = 0;
}


fill (255);
text("Anthony Foulk", 120,61);
text ("portrait attempt", 120,81);















}
