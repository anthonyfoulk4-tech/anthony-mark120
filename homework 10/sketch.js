var x= 200
var y= 200
var movex = 200
var movey = 200

function setup() {
    createCanvas(400,400);
}

function draw() {
    background (144,224,214);
    
circle (x,y,20)

        if (keyIsDown ('68')){
            x += 10;
        }
        else if (keyIsDown('65')){
            x -= 10;
        }
        else if (keyIsDown(87)){
            y -= 10
        }
        else if (keyIsDown(83)){
            y += 10
        }


    fill(0);
    noStroke();
    textSize(12);
    text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);

    
    







}

    
    



