var myX = [];
var myY = [];

var x = 50;
var y = 50;
var speed = [];
var red = [];
var blue = [];
var green = [];








function setup() {
    createCanvas(800,800);
    
    for(var i = 0; i < 5000; i++){
        myX[i] = x;
        myY[i] = y;
        speed[i] = random(-20,70);
        red[i] = random(255);
        blue[i] = random(255);
        green[i] = random(255); 
        x += 50;
         y += 50;

    }
}

function draw() {
    background (255);
     for (var i = 0; i < myX.length; i++){
            fill(red[i], blue[i], green[i]);
            circle (myX[i], myY[i], random(10,500));
            myX[i]+= speed[i];
            if (myX[i] > width){
                myX[i] = 0;
            }
        }

       
        
    fill(0);
    noStroke();
    textSize(12);
    text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);
}
 
rect (33,95,33,275);
rect (x2,y2,145,80);
circle (200,420,100)

if (x > 180 && y > 380){
    background ('black')
    fill ('white');
    textSize (20);
    text("winner",200,200);
}




