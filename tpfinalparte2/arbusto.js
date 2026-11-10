class Arbusto{
  constructor(posX, posY){
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(0,255,0);
    this.tieneEspada = false;
    this.fueExplorado = false;
  }
  
  dibujar() {
    push();
    rectMode(CENTER);
    fill(this.miColor);
    rect(this.posX, this.posY, 50, 50);
    
    if (this.fueExplorado && !this.tieneEspada) {
      fill(100, 150, 100);
      rect(this.posX, this.posY, 30, 30);
    }
    pop();
  }
  
  colisionaCon(personaje) {
    let distancia = dist(this.posX, this.posY, personaje.posX, personaje.posY);
    return distancia < 40; 
  }
}
