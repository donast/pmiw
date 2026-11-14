class Arbusto {
  constructor(x, y, img) {
    this.posX = x;
    this.posY = y;
    this.img = img;
    this.tieneEspada = false;
    this.fueExplorado = false;
  }
  
  dibujar() {
    push();
      imageMode(CENTER);
      image(this.img, this.posX, this.posY, 130, 170);
    pop();
  }
  
  colisionaCon(personaje) {
    let distancia = dist(this.posX, this.posY, personaje.posX, personaje.posY);
    return distancia < 40;
  }
}
