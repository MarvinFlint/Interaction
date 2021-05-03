let images = [];
let cCursor = 0;
function preload(){
    
}

function setup(){
    cnv = createCanvas(800, 800);
    images[0] = new dImage("img/1997.png", 1997);
    images[1] = new dImage("img/1998.png", 1998);
    images[2] = new dImage("img/1999.png", 1999);
    images[3] = new dImage("img/2010.png", 2010);
    images[4] = new dImage("img/2015.png", 2015);
    cnv.mouseWheel(scrollImages);
}

function draw(){
    background(255);
    image(images[round(cCursor/10)].imgPath, 150, 250);
    fill(0);
    textSize(30);
    text(images[round(cCursor/10)].imgYear, 600, 330);
   
    // loading bar
    noFill();
    stroke(0);
    rect(200, 450, 300, 30);
    noStroke();
    fill(255, 0, 0);
    rect(200, 450, map(cCursor, 0, 40, 0, 300), 30);
}

function scrollImages(e){
    console.log(cCursor);
    if(e.deltaY < 0 && cCursor < 40){
            cCursor++;
        
    }
    else if(e.deltaY > 0 && cCursor > 0){
            cCursor--;
        
    }
    console.log(cCursor);
}

class dImage{
    constructor(imgPath, imgYear){
        this.imgPath = loadImage(imgPath);
        this.imgYear = imgYear;
    }
}