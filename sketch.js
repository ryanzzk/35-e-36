let cor;
let circuloX // horizontal
let circuloY // vertical

let posicaoHorizontal12; // x
let posicaoVertical12; // y

function setup() {
  createCanvas(400, 400);
  background(color(100, 0 ,0));
  
  
  cor = color(random(255), random(255), random(255));
  circuloX = [0, 0];
  circuloY = [random(height), random(height)];
}

function draw() {
   fill(cor)
  
 for(let contador in circuloX) {
   circle(circuloX[contador], circuloY[contador], 50);
   circuloX[contador]+= random(0, 3);
   circuloY[contador]+= random(-3, 3);
   
   if(circuloX[contador] >= width) {
     circuloX[contador] = 0;
     circuloY[contador] = random(height);
   }
 }
   
   if(mouseIsPressed) {
     cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
   }
  
}