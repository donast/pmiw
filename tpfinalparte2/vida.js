class Vida{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255,0,0);
    this.vida = 3;
  }
  
  dibujar(){
    fill(this.miColor);
    circle(this.posX + 30,this.posY,40,40);
  }
  
}
