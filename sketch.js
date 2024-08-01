let cor;
let posicaoHorizontal;
let posicaoVertical; 

function setup() {

    createCanvas(800, 800);
    background("green");
    cor = color(random(0, 255), random(0, 250), random(0,255));
    posicaoHorizontal = 400;
    posicaoVertical = 400;
    }
    
 function draw() {
    
     fill(cor);
    circle(posicaoHorizontal, posicaoVertical, 50);

if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
    }

if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
    }
  

if(mouseY < posicaoVertical) {
posicaoVertical --;
}
    
if(mouseY > posicaoVertical) {
posicaoVertical ++;
}


 if(mouseIsPressed) {
     cor = color(random(0, 255), random(0, 255), random(0,255));
 } 
 
 }