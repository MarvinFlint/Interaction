let timer;
let tMinutes = 0;
let tSeconds = 0;

let countDownTimer = false;

function preload(){

}

function setup(){
    cnv = createCanvas(800, 800);
    cnv.mouseWheel(adjustTimer);
    textSize(80);
    
}

function draw(){
    background("#f0f0f0");
    fill(0);
    textAlign(RIGHT);
    if(tMinutes < 10){
        text("0" + tMinutes, 350, 350);
    }
    else{
        text(tMinutes, 350, 350);
    }
    textAlign(LEFT);
    text(":", 355, 345);
    if(tSeconds < 10){
        text("0" + tSeconds, 380, 350);
    }
    else{
        text(tSeconds, 380, 350);
    }
    
    if(countDownTimer){
        countDownT();
        frameRate(1);
    }
    else{
        frameRate(60);
    }

    if(tSeconds == 0 && tMinutes == 0 && countDownTimer){
        fill(255, 100, 100);
        text("BOOM", 350, 700);
    }
}

function mousePressed(){
    countDownTimer = !countDownTimer;
}

function adjustTimer(e){
    if(mouseX > 400){
        if(e.deltaY < 0){
            tSeconds++;
            if(tSeconds > 59){
            tMinutes++;
            tSeconds = 0;
            }
        }
        else{
            tSeconds--;
            if(tSeconds < 0 && tMinutes >= 1){
                tMinutes--;
                tSeconds = 59;
            }
            else if(tSeconds < 0){
                tSeconds = 0;
            }
        }
    }
    else{
        if(e.deltaY < 0){
            tMinutes++;
        }
        else{
            tMinutes--;
            if(tMinutes <= 0){
                tMinutes = 0;
            }
        }
    }
    
    
}

function countDownT(){
    tSeconds--;
    if(tSeconds < 0 && tMinutes >= 1){
        tMinutes--;
        tSeconds = 59;
    }
    else if(tSeconds < 0){
        tSeconds = 0;
    }
}

function windowResized(){
    if(windowWidth < 800 && windowHeight < 800){
        resizeCanvas(windowWidth, windowHeight);
    }
    else if(windowWidth < 800){
        resizeCanvas(windowWidth, 800);
    }
    else if(windowHeight < 800){
        resizeCanvas(800, windowWidth);
    }
}