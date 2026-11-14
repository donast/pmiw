class Juego {
  constructor(cantidadArbustos, imgArbusto, imgPasto, imgCorazon, imgFrente, imgEspalda, imgIzquierda, imgDerecha, imgEspada, fuente) {
    this.cantidadArbustos = cantidadArbustos;
    this.imgArbusto = imgArbusto;
    this.imgPasto = imgPasto;
    this.imgCorazon = imgCorazon;
    this.imgEspada = imgEspada;

    this.imgFrente = imgFrente;
    this.imgEspalda = imgEspalda;
    this.imgIzquierda = imgIzquierda;
    this.imgDerecha = imgDerecha;

    this.fuente = fuente;
    this.estadoJuego = "inicio";

    this.inicializarVariables();
  }

  inicializarVariables() {
    this.crearPersonaje();
    this.crearArbustos();
    this.crearVidas();
    this.asignarEspadaAleatoria();
    this.tiempoInicioEspada = 0;
  }

  dibujar() {
    push();
    imageMode(CORNER);
    image(this.imgPasto, 0, 0, width, height);
    pop();

    textFont(this.fuente);

    if (this.estadoJuego === "inicio") {

      fill(70, 100, 160);
      rect(145, 51, 505, 75, 10);
      fill(255, 200, 0);
      rect(162, 145, 475, 70, 10);

      fill(255);
      textSize(25);
      textAlign(CENTER, CENTER);
      text("BUBBLE BOBBLE:\nENCUENTRA LA ESPADA", 150, 60, 500, 60);

      textSize(12);
      fill(30);
      text("Usa las flechas del teclado para moverte.\nAcércate a un arbusto y presiona ESPACIO para revisar.", 160, 30, 490, 300);

      push();
        rectMode(CENTER);
        fill(70, 100, 160);
        stroke(255);
        strokeWeight(2);
        rect(width / 2 - 85, height / 2 + 80, 140, 50, 10);
        noStroke();
        fill(255);
        textSize(12);
        textAlign(CENTER, CENTER);
        text("JUGAR", width / 2 - 85, height / 2 + 80);
      pop();

      push();
        rectMode(CENTER);
        fill(70, 100, 160);
        stroke(255);
        strokeWeight(2);
        rect(width / 2 + 85, height / 2 + 80, 140, 50, 10);
        noStroke();
        fill(255);
        textSize(12);
        textAlign(CENTER, CENTER);
        text("CREDITOS", width / 2 + 85, height / 2 + 80);
      pop();

    } else if (this.estadoJuego === "creditos") {

      textAlign(CENTER, CENTER);

      fill(70, 100, 160);
      rect(245, 38, 305, 60, 10);
      fill(255, 200, 0);
      rect(235, 110, 335, 60, 10);
      rect(195, 185, 405, 80, 10);

      fill(255);
      textSize(25);
      text("CREDITOS", width / 2, height / 2 - 130);

      fill(20);
      textSize(15);
      text("Trabajo realizado\npor:", 250, 85, 305, 110);

      textSize(15);
      text("Donato Palmieri 125653/4\ny Luciel Tejeda 122916/6\nComisión 4",100,78,600,300);

      push();
        rectMode(CENTER);
        fill(70, 100, 160);
        stroke(255);
        strokeWeight(2);
        rect(width / 2, height / 2 + 110, 190, 50, 10);
        noStroke();
        fill(255);
        textSize(10);
        textAlign(CENTER, CENTER);
        text("VOLVER AL INICIO", width / 2, height / 2 + 110);
      pop();

    } else if (this.estadoJuego === "jugando" || this.estadoJuego === "revelando") {

      for (let i = 0; i < this.cantidadArbustos; i++) {
        this.arbustos[i].dibujar();
      }

      this.personaje.dibujar();

      if (this.estadoJuego === "revelando") {
        push();
          imageMode(CENTER);
          image(this.imgEspada,this.arbustos[this.indiceEspada].posX,this.arbustos[this.indiceEspada].posY - 30,40,40);
        pop();
      }

      for (let i = 0; i < this.personaje.vida; i++) {
        this.vidas[i].dibujar();
      }

    } else if (this.estadoJuego === "ganaste") {

      fill(0, 200, 100);
      rect(130, 105, 555, 70, 10);
      
      fill(255, 255, 255);
      textSize(20);
      textAlign(CENTER, CENTER);
      text("¡Encontraste la espada! ¡Ganaste!", 100, 60, 600, height / 2 - 40);

      push();
        rectMode(CENTER);
        fill(0, 200, 100);
        stroke(255);
        strokeWeight(2);
        rect(width / 2, height / 2 + 50, 220, 50, 10);
        noStroke();
        fill(255);
        textSize(11);
        textAlign(CENTER, CENTER);
        text("VOLVER AL INICIO", width / 2, height / 2 + 50);
      pop();

    } else if (this.estadoJuego === "perdiste") {

      fill(200, 50, 50);
      rect(130, 105, 555, 70, 10);
      
      fill(255);
      textSize(20);
      textAlign(CENTER, CENTER);
      text("Te quedaste sin vidas. Fin del juego.", 110, 60, 600, height / 2 - 40);

      push();
        rectMode(CENTER);
        fill(200, 50, 50);
        stroke(255);
        strokeWeight(2);
        rect(width / 2, height / 2 + 50, 220, 50, 10);
        noStroke();
        fill(255);
        textSize(11);
        textAlign(CENTER, CENTER);
        text("VOLVER AL INICIO", width / 2, height / 2 + 50);
      pop();
    }
  }

  actualizar() {
    if (this.estadoJuego === "jugando") {
      this.personaje.controlarMovimiento();

    } else if (this.estadoJuego === "revelando") {

      if (millis() - this.tiempoInicioEspada >= 1000) {
        this.estadoJuego = "ganaste";
      }
    }

    this.actualizarMusica();
  }

  actualizarMusica() {
    if (this.estadoJuego === "jugando" || this.estadoJuego === "creditos") {
      if (!cancion.isPlaying()) {
        cancion.loop();
      }
    } else {
      if (cancion.isPlaying()) {
        cancion.stop();
      }
    }
  }

  crearArbustos() {
    this.arbustos = [];
    let inicioX = 60;
    let separacionX = 135;
    let alturaCentro = 110;
    
    let centro = (this.cantidadArbustos - 1) / 2;
    
    for (let i = 0; i < this.cantidadArbustos; i++) {
      let x = inicioX + (i * separacionX);
      let distanciaAlCentro = i - centro;
      let y = alturaCentro + (distanciaAlCentro * distanciaAlCentro * 20);
      
      this.arbustos.push(new Arbusto(x, y, this.imgArbusto));
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width / 2,300, this.imgFrente, this.imgEspalda, this.imgIzquierda, this.imgDerecha);
  }

  crearVidas() {
    this.vidas = [];
    for (let i = 0; i < 3; i++) {
      this.vidas[i] = new Vida(35 + i * 55, 30, this.imgCorazon);
    }
  }

  asignarEspadaAleatoria() {
    let indiceAfortunado = floor(random(this.cantidadArbustos));
    this.arbustos[indiceAfortunado].tieneEspada = true;
    this.indiceEspada = indiceAfortunado;
  }

  teclaPresionada(keyCodeValue) {
    if (keyCodeValue === 32 && this.estadoJuego === "jugando") {
      let accionRealizada = false;
      for (let i = 0; i < this.cantidadArbustos; i++) {
        if (!accionRealizada && this.arbustos[i].colisionaCon(this.personaje) && !this.arbustos[i].fueExplorado) {
          this.arbustos[i].fueExplorado = true;
          if (this.arbustos[i].tieneEspada) {
            this.tiempoInicioEspada = millis();
            this.estadoJuego = "revelando";
          } else {
            this.personaje.vida--;
            if (this.personaje.vida <= 0) {
              this.estadoJuego = "perdiste";
            }
          }
          accionRealizada = true;
        }
      }
    }
    this.actualizarMusica();
  }

  clicMouse() {
    if (this.estadoJuego === "inicio") {

      if (mouseX > width / 2 - 155 && mouseX < width / 2 - 15 && mouseY > height / 2 + 55 && mouseY < height / 2 + 105) {
        this.estadoJuego = "jugando";
      }

      else if (mouseX > width / 2 + 15 && mouseX < width / 2 + 155 && mouseY > height / 2 + 55 && mouseY < height / 2 + 105) {
        this.estadoJuego = "creditos";
      }

    } else if (this.estadoJuego === "creditos") {

      if (mouseX > width / 2 - 95 && mouseX < width / 2 + 95 && mouseY > height / 2 + 85 && mouseY < height / 2 + 135) {
        this.estadoJuego = "inicio";
      }

    } else if (this.estadoJuego === "ganaste" || this.estadoJuego === "perdiste") {

      if (mouseX > width / 2 - 110 && mouseX < width / 2 + 110 && mouseY > height / 2 + 25 && mouseY < height / 2 + 75) {
        this.inicializarVariables();
        this.estadoJuego = "inicio";
      }
    }
    this.actualizarMusica();
  }
}
