var c1, c2;

function setup() {
  cnv = createCanvas(800, 800);
  // Define colors
  c1 = color(10, 10, 70);
  c2 = color(255);
  m1 = new Moon(30, 400, 50);
}

function draw() {
    setGradient(c1, c2);
    m1.print();
    let f = 800/30;
    for(let i = 0; i < 30; i++){
        stroke(0);
        line(i*f, 800, i*f, 770);
        text(i + 1, i*f, 770);
    }
    fill("white");
    text("<-- drag the moon -->", 300, 30)
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
    if(dist(mouseX, mouseY, m1.x, m1.y) <= 25){
        m1.x = mouseX;
    }
}
function mouseClicked(e){
    m1.x = mouseX;
    console.log(m1);
    console.log('Coords: ' + map(m1.x, 30, 800, 270, 630) + " " + map(m1.x, 30, 800, 450, 90));
}

class Moon{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    print(){
        noStroke();
        fill(255);
        circle(this.x, this.y, this.r);
        fill(0);
        angleMode(DEGREES)  
        if(this.x <= 222){
            arc(this.x, this.y, this.r, this.r, map(this.x, 30, 800, 270, 630), map(this.x, 30, 800, 450, 90), CHORD);
        }
        else if(this.x > 222 && this.x <= 606){
            arc(this.x, this.y, this.r, this.r, map(this.x, 30, 800, 630, 270), map(this.x, 30, 800, 90, 450), CHORD);
        }
        else if(this.x > 606){
            arc(this.x, this.y, this.r, this.r, map(this.x, 30, 770, 270, 630), map(this.x, 30, 770, 450, 90), CHORD);
        }
    }
}