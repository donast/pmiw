class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.miColor = color(255, 255, 0);
    this.vida = 3;
  }
  
  dibujar() {
    fill(this.miColor);
    circle(this.posX, this.posY, 60, 60);
  }
  
  moverIzquierda() {
    this.posX -= 3;
  }
  
  moverDerecha() {
    this.posX += 3;
  }
  
  moverArriba() {
    this.posY -= 3;
  }
  
  moverAbajo() {
    this.posY += 3;
  }
  
  estaVivo() {
    
  }
  
  controlarMovimiento() {
    if (keyIsDown(LEFT_ARROW)) {
      this.moverIzquierda();
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.moverDerecha();
    }
    if (keyIsDown(UP_ARROW)) {
      this.moverArriba();
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.moverAbajo();
    }
  }
}
