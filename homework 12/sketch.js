var myX = [];
var myY = [];

var x = 50;
var y = 50;
var speed = [];
var red = [];
var blue = [];
var green = [];
var x2 = 200;
var y2 = 200;
var movement = 1;

var xOffset = 0;
var collisionDelayUntil = 0;
var loser = false;


function drawCharacter() {

    circle(x2, y2, 20);

    if (keyIsDown('68')) {
        x2 += 10;
    }
    else if (keyIsDown('65')) {
        x2 -= 10;
    }
    else if (keyIsDown(87)) {
        y2 -= 10;
    }
    else if (keyIsDown(83)) {
        y2 += 10;
    }
}



function setup() {
    createCanvas(800, 800);

    for (var i = 0; i < 20000; i++) {
        myX[i] = x;
        myY[i] = y;
        speed[i] = random(0, 10);
        red[i] = random(255);
        blue[i] = random(255);
        green[i] = random(255);
        x += 50;
        y += 50;

    }
}

function draw() {
    background(255);
    for (var i = 0; i < myX.length; i++) {
        fill(red[i], blue[i], green[i]);
        circle(myX[i], myY[i], random(10, 70));
        myX[i] += speed[i];
        if (myX[i] > width) {
            myX[i] = 0;
        }
    }
    drawCharacter()
    drawWinner()
    collisionDetection()
    if (loser) {
        background('black');
        fill('white');
        textSize(20);
        text("loser", 400, 400);
    }



    fill(0);
    noStroke();
    textSize(12);
    text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);
}


function drawWinner() {
    if (x2 > 300 && x2 < 500 && y2 > 600 && y2 < 750) {
        background('black')
        fill('white');
        textSize(20);
        text("winner", 400, 400);
    }
}

function collisionDetection() {
    if (millis() < collisionDelayUntil) {
        return;
    }

    for (var i = 0; i < myX.length; i++) {
        if (x2 > myX[i] - 20 && x2 < myX[i] + 20 && y2 > myY[i] - 20 && y2 < myY[i] + 20) {
            background('black');
            loser = true;
            xOffset += 1.5;
            collisionDelayUntil = millis() + 2000;

            setTimeout(function() {
                loser = false;
            }, 2000);
            return;
        }
    }
}














