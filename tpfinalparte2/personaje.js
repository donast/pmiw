class Personaje {
  constructor(posX, posY, imgFrente, imgEspalda, imgIzquierda, imgDerecha) {
    this.posX = posX;
    this.posY = posY;

    this.imgFrente = imgFrente;
    this.imgEspalda = imgEspalda;
    this.imgIzquierda = imgIzquierda;
    this.imgDerecha = imgDerecha;

    this.direccion = "frente";

    this.vida = 3;
    this.velocidad = 3;

    this.ancho = 100;
    this.alto = 116;
  }

  dibujar() {
    let imagenActual;

    if (this.direccion === "frente") {
      imagenActual = this.imgFrente;
    } else if (this.direccion === "espalda") {
      imagenActual = this.imgEspalda;
    } else if (this.direccion === "izquierda") {
      imagenActual = this.imgIzquierda;
    } else if (this.direccion === "derecha") {
      imagenActual = this.imgDerecha;
    }

    let escala = min(
      this.ancho / imagenActual.width,
      this.alto / imagenActual.height
    );

    let nuevoAncho = imagenActual.width * escala;
    let nuevoAlto = imagenActual.height * escala;

    push();
    imageMode(CENTER);
    image(imagenActual, this.posX, this.posY, nuevoAncho, nuevoAlto);
    pop();
  }

  moverIzquierda() {
    this.posX -= this.velocidad;
    this.direccion = "izquierda";
  }

  moverDerecha() {
    this.posX += this.velocidad;
    this.direccion = "derecha";
  }

  moverArriba() {
    this.posY -= this.velocidad;
    this.direccion = "espalda";
  }

  moverAbajo() {
    this.posY += this.velocidad;
    this.direccion = "frente";
  }

  estaVivo() {
    return this.vida > 0;
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
