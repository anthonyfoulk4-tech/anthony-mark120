function setup() {
createCanvas(400,400);
}

function draw() {
background (144,224,214);

fill(0);
noStroke();
textSize(12);
text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);


ellipse (195,400,350,180);

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

circle (195,215,190); 
circle (150,193,40);
circle (235,193,40);
circle (195,250,40);

fill (0);
circle (150,193,20);
circle (235,193,20);


fill (0)
line (113,168,113,150);
line (277,168,277,150);
line(113,150,132,108);
line(277,150,258,108);  
line(132,108,258,108);

textSize(20);
fill (255);
text("Anthony Foulk", 120,61);
text ("portrait attempt", 120,81);
















}
