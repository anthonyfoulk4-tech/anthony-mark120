function setup() {
createCanvas(400,400);
}

function draw() {
background (144,224,214);

fill(0);
noStroke();
textSize(12);
text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);

fill (59,110,12);
circle (200,200,50);
stroke (110,42,43);
strokeWeight (25);

fill (412,51,12);
square(20,250,25);
stroke (110,42,43);
strokeWeight (25);

textSize(25);
text("hi there" ,245,163)
}


