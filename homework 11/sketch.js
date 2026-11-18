var x2 = 145;
var y2 = 160;
var movement = 1;
var x = 200;
var y = 200;







function setup() {
    createCanvas(400,400);
}

function draw() {
    background (144,224,214);

circle (x,y,20);

        if (keyIsDown ('68')){
            x += 10;
        }
        else if (keyIsDown('65')){
            x -= 10;
        }
        else if (keyIsDown(87)){
            y -= 10;
        }
        else if (keyIsDown(83)){
            y += 10;
        }



        
    fill(0);
    noStroke();
    textSize(12);
    text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);

    
rect (33,95,33,275);
rect (x2,y2,145,80);
x2++
circle (200,420,100)

if (x > 195 && y > 380){
    background ('black')
    fill ('white');
    textSize (20);
    text("winner",200,200);
}



}