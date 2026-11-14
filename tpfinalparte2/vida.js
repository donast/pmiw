class Vida {
  constructor(x, y, img) {
    this.posX = x;
    this.posY = y;
    this.img = img;
  }
  
  dibujar() {
    push();
    imageMode(CENTER);
    image(this.img, this.posX, this.posY, 60, 60);
    pop();
  }
}
