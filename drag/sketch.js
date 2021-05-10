var c1, c2;
let stars = [];
let moonImg;
let started = false;
function preload(){
    moonImg = loadImage("moon.png");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  // Define colors
  c1 = color(10, 10, 70);
  c2 = color(10, 10, 150);
  m1 = new Moon(windowWidth/2, windowHeight/2, 100);
  for(let i = 0; i < 60; i++){
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
        text("<--      -->", windowWidth / 2 * 0.92, windowHeight / 2 * 1.2);
    }
    stroke(255);
    if(started){
        line(0, windowHeight / 2, windowWidth, windowHeight / 2);
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
    console.log('Coords: ' + map(m1.x, 30, windowWidth, 270, 630) + " " + map(m1.x, 30, windowWidth, 450, 90));
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    for(let i = 0; i < 60; i++){
        stars[i] = new Star(random(0, windowWidth), random(30, windowHeight));
    }
    console.log(windowWidth);
}

class Moon{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    print(){
        fill("white");
        text(round(map(this.x, this.r / 2, windowWidth - this.r / 2, 1, 30)), this.x + cos(map(this.x, 0, windowWidth, 0, 180)) * 50, this.y - this.r);
        noStroke();
        let c = color(0, 0, 0, 0.2);
        fill(c);
        image(moonImg, this.x - this.r/2, this.y - this.r/2, this.r, this.r);
        fill(0);
        angleMode(DEGREES)  
        if(this.y > windowHeight / 2){
            if(this.x <= 222){
                arc(this.x, this.y, this.r, this.r, map(this.x, this.r / 2, windowWidth - this.r / 2, 270, 630), map(this.x, 30, windowWidth, 450, 90), CHORD);
            }
            else if(this.x > 222 && this.x <= 606){
                arc(this.x, this.y, this.r, this.r, map(this.x, this.r / 2, windowWidth - this.r / 2, 630, 270), map(this.x, 30, windowWidth, 90, 450), CHORD);
            }
            else if(this.x > 606){
                arc(this.x, this.y, this.r, this.r, map(this.x, this.r / 2, windowWidth - this.r / 2, 270, 630), map(this.x, 30, windowWidth, 450, 90), CHORD);
            }
        }
        else{
            if(this.x <= 222){
                arc(this.x, this.y, this.r, this.r, map(this.x, this.r / 2, windowWidth - this.r / 2, 630, 270), map(this.x, 30, windowWidth, 90, 450), CHORD);
            }
            else if(this.x > 222 && this.x <= 606){
                arc(this.x, this.y, this.r, this.r, map(this.x, this.r / 2, windowWidth - this.r / 2, 270, 630), map(this.x, 30, windowWidth, 450, 90), CHORD);
            }
            else if(this.x > 606){
                arc(this.x, this.y, this.r, this.r, map(this.x, this.r / 2, windowWidth - this.r / 2, 630, 270), map(this.x, 30, windowWidth, 90, 450), CHORD);
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
    }
    drawStar(){
        ellipseMode(CENTER);
        fill(255, 255, 0);
        noStroke();
        ellipse(this.x, this.y, this.w, this.h);
        ellipse(this.x, this.y, this.h, this.w)
    }
}