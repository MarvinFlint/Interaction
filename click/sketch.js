let rectangles = [];
let run = true;
function preload(){

}

function setup(){
    createCanvas(800, 800);
    rectangles.push(new Rectangle(20, 20, color(random(255), random(50), random(255)), 0, true));
}

function draw(){
    background("#f0f0f0");
    if(run){
        for(let i = 0; i < rectangles.length; i++){
            rectangles[i].print();
        }  
    }
}

function mousePressed(){
    if(mouseButton = LEFT){
        console.log("left")
        for(let i = 0; i < rectangles.length; i++){
            rectangles[i].currentRect = false;
        }
        let previousX = rectangles[rectangles.length - 1].x + rectangles[rectangles.length - 1].w;
        let previousY = rectangles[rectangles.length - 1].y;
        rectangles.push(new Rectangle(previousX, previousY, color(random(50), random(255), random(255)), 0, true));   
    }
    if(mouseButton = CENTER){
        console.log("center");
        for(let i = 0; i < rectangles.length; i++){
            rectangles[i].currentRect = false;
        }
        rectangles.push(new Rectangle(mouseX, mouseY, color(random(50), random(255), random(255)), 0, true))
    }
    
}

function keyPressed(){
    for(let i = 0; i < rectangles.length; i++){
        rectangles[i].currentRect = false;
    }
    let previousX = rectangles[rectangles.length - 1].x + rectangles[rectangles.length - 1].w;
    let previousY = rectangles[rectangles.length - 1].y;
    rectangles.push(new Rectangle(previousX, previousY, color(random(50), random(255), random(255)), 0, true));
}

function windowResized(){
    if(windowWith < 800 && windowHeight < 800){
        resizeCanvas(windowWidth, windowHeight);
    }
    else if(windowWidth < 800){
        resizeCanvas(windowWidth, 800);
    }
    else if(windowHeight < 800){
        resizeCanvas(800, windowWidth);
    }
}

class Rectangle{
    constructor(x, y, c, w, currentRect){
        this.x = x;
        this.y = y;
        this.c = c;
        this.w = w;
        this.currentRect = currentRect;
    }

    print(){
        fill(this.c);
        rect(this.x, this.y, this.w, 50);
        if(this.currentRect && this.x + this.w < 800){
            this.w++;
        }
    }
}