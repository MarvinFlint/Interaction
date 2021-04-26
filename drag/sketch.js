// color vars
let cR = 0;
let cG = 0;
let cB = 0;
let c2 = 0;
// radius
let r = 200;
let r2 = 200;

// positions
cx = 200;
cy = 600;

cx2 = 600;
cy2 = 600;

// circle array
let circles = [];

function preLoad(){

}

function setup(){
    cnv = createCanvas(800, 800);
    cnv.mouseWheel(setRadius);
    background("#f0f0f0");
    cR = random(255);
    cG = random(255);
    cB = random(255);
}

function mouseDragged(){
    // upper left
    cR++;
    cG += random(3);
    cB += random(10);
    console.log(cR, cG, cB);
    if(cR > 255){
        cR = 0;
    }
    if(cG > 255){
        cG = 0;
    }
    if(cB > 255){
        cB = 0;
    }

    // upper right
    if(pmouseX > mouseX){
        r--;
    }
    else if(pmouseX < mouseX){
        r++;
    }

    // bottom left
    if(dist(mouseX, mouseY, cx, cy) <= 100){
        cx = mouseX;
        cy = mouseY;
        circle(pmouseX, pmouseY, 200);
    }

    // bottom right
    if(dist(mouseX, mouseY, cx2, cy2) <= 100){
        cx2 = mouseX;
        cy2 = mouseY;
        circles.push(new Circle(pmouseX, pmouseY, r2))
    }
    
}

function draw(){
    noStroke();
    background("#f0f0f0");
    // upper left
    fill(cR, cG, cB);
    circle(200, 150, 200);

    // upper right
    fill(0);
    circle(600, 150, r);

    // bottom left
    fill(0);
    circle(cx, cy, 200);

    // bottom right
    fill(c2);
    circle(cx2, cy2, r2);

    // circle array draw
    for(let i = 0; i < circles.length; i++){
        circles[i].print()
    }
}

function setRadius(e){
    if (e.deltaY > 0) {
        r2 += 10;
      }
      else {
        r2 -= 10;
      }
}

function mousePressed(){
    // upper right reset
    if(dist(mouseX, mouseY, 600, 150) <= r/2){
        r = 200;
    }
}

function keyPressed(){
    // LSD-trip remover
    circles = [];
}

class Circle{
    constructor(x, y, cr){
        this.x = x;
        this.y = y;
        this.cr = cr;
    }
    print(){
        let c = color(random(255), random(255), random(255));
        fill(c);
        circle(this.x, this.y, this.cr);
    }
}