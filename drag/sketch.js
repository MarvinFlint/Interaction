var c1, c2;
let stars = [];
let moonImg;
let started = false;
let c;
function preload(){
    moonImg = loadImage("moon.png");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  // Define colors
  c1 = color(10, 10, 80);
  c2 = color(0, 40, 150);
  m1 = new Moon(windowWidth/2 -30, windowHeight/2, 100);
  for(let i = 0; i < 90; i++){
      stars[i] = new Star(random(0, windowWidth), random(30, windowHeight));
  }
}

function draw() {
    setGradient(c1, c2);
    // stars
    for(let i = 0; i < stars.length; i++){
        stars[i].drawStar();
    }
    m1.print();
    fill("white");
    if(!started){
        textAlign(CENTER, CENTER)
        textSize(32);
        text("<--              -->", m1.x, m1.y);
    }
    stroke(255);
    if(started){
        line(0, windowHeight / 2, windowWidth, windowHeight / 2);
        textSize(25);
        text("Northern Hemisphere", windowWidth / 2, 50);
        text("Southern Hemisphere", windowWidth / 2, windowHeight - 50);
    }
    
    
}
function setGradient(c1, c2) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function mouseDragged(e){
        if(mouseX > m1.r / 2 && mouseX < windowWidth - m1.r / 2){
            m1.x = mouseX;
        }
        if(mouseX < m1.r / 2){
            m1.x = m1.r / 2;
        }
        if(mouseX > windowWidth - m1.r / 2){
            m1.x = windowWidth - m1.r / 2;
        }
        if(mouseY < windowHeight / 2){
            m1.y = windowHeight * 0.25;
        }
        else if(mouseY >= windowHeight / 2){
            m1.y = windowHeight * 0.75; 
        }
        started = true;
}
function mouseClicked(e){
    if(mouseX > m1.r / 2 && mouseX < windowWidth - m1.r / 2){
        m1.x = mouseX;
    }
    if(mouseX < m1.r / 2){
        m1.x = m1.r / 2;
    }
    if(mouseX > windowWidth - m1.r / 2){
        m1.x = windowWidth - m1.r / 2;
    }
    console.log(m1);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    for(let i = 0; i < 60; i++){
        stars[i] = new Star(random(0, windowWidth), random(30, windowHeight));
    }
}

function keyPressed(){
    console.log(m1.x, map(m1.x, m1.r / 2, windowWidth - m1.r / 2, 450, 90), map(m1.x, m1.r / 2, windowWidth - m1.r / 2, 270, 630));
}
class Moon{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    print(){
        fill("white");
        textSize(16);
        text(round(map(this.x, this.r / 2, windowWidth - this.r / 2, 1, 30)), this.x + cos(map(this.x, 0, windowWidth, 0, 180)) * 50, this.y - this.r);
        noStroke();
        image(moonImg, this.x - this.r/2, this.y - this.r/2, this.r, this.r);
        c = color('rgba(0, 0, 0, 0.7)');
        fill(c);
        angleMode(DEGREES)  
        // southern hemisphere
        if(this.y > windowHeight / 2){
            if(this.x <= windowWidth / 4 + this.r){
                arc(this.x, this.y, this.r, this.r, map(this.x, this.r / 2, windowWidth - this.r / 2, 450, 90), map(this.x, this.r / 2, windowWidth - this.r / 2, 270, 630), CHORD);
            }
            if(this.x >= windowWidth / 4 - this.r && this.x <= windowWidth * 0.75 - this.r){
                arc(this.x, this.y, this.r, this.r, map(this.x, this.r / 2, windowWidth - this.r / 2, 90, 450), map(this.x, this.r / 2, windowWidth - this.r / 2, 630, 270), CHORD);
            }
            if(this.x >= windowWidth * 0.75){
                arc(this.x, this.y, this.r, this.r, map(this.x, this.r / 2, windowWidth - this.r / 2, 450, 90), map(this.x, this.r / 2, windowWidth - this.r / 2, 270, 630), CHORD);
            }
        }
        // northern hemisphere
        else{
            if(this.x <= windowWidth / 4 + this.r){
                arc(this.x, this.y, this.r, this.r, map(this.x, this.r / 2, windowWidth - this.r / 2, 630, 270), map(this.x, this.r / 2, windowWidth - this.r / 2, 90, 450), CHORD);
            }
            if(this.x > windowWidth / 4 - this.r && this.x < windowWidth * 0.75 - this.r){
                arc(this.x, this.y, this.r, this.r, map(this.x, this.r / 2, windowWidth - this.r / 2, 270, 630), map(this.x, this.r / 2, windowWidth - this.r / 2, 450, 90), CHORD);
            }
            if(this.x > windowWidth * 0.75){
                arc(this.x, this.y, this.r, this.r, map(this.x, this.r / 2, windowWidth - this.r / 2, 630, 270), map(this.x, this.r / 2, windowWidth - this.r / 2, 90, 450), CHORD);
            }
        }
    }
}

class Star{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.w = 3;
        this.h = 10;
        this.rotation = random(0, 360);
    }
    drawStar(){
        push();
        ellipseMode(CENTER);
        fill(255, 255, 0);
        noStroke();
        translate(this.x, this.y);
        rotate(this.rotation);
        ellipse(0, 0, this.w, this.h);
        ellipse(0, 0, this.h, this.w);
        this.rotation += 10;
        pop();
    }
}