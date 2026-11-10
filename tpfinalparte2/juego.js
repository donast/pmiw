class Juego {
  constructor(cantidadArbustos) {
    this.cantidadArbustos = cantidadArbustos;
    this.estadoJuego = "jugando";
    this.ultimoIndice = -1; 
    this.inicializarVariables();
  }
  
  inicializarVariables() {
    this.crearPersonaje();
    this.crearArbustos();
    this.crearVidas();
    this.asignarEspadaAleatoria();
  }
  
  dibujar() {
    background(0, 125, 0);
    
    if (this.estadoJuego === "jugando") {
      for (let i = 0; i < this.cantidadArbustos; i++) {
        this.arbustos[i].dibujar();
      }
      
      this.personaje.dibujar();
      
      for (let i = 0; i < this.personaje.vida; i++) {
        this.vidas[i].dibujar();
      }
      
    } else if (this.estadoJuego === "ganaste") {
      fill(255, 255, 255);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("¡Encontraste la espada! ¡Ganaste!", width / 2, height / 2 - 40);
      
      fill(0, 200, 100);
      rectMode(CENTER);
      rect(width / 2, height / 2 + 50, 200, 50, 10);
      
      fill(255);
      textSize(16);
      text("VOLVER A JUGAR", width / 2, height / 2 + 50);
      
    } else if (this.estadoJuego === "perdiste") {
      fill(255, 0, 0);
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Te quedaste sin vidas. Fin del juego.", width / 2, height / 2 - 40);
      
      fill(0, 200, 100);
      rectMode(CENTER);
      rect(width / 2, height / 2 + 50, 200, 50, 10);
      
      fill(255);
      textSize(16);
      text("VOLVER A JUGAR", width / 2, height / 2 + 50);
    }
  }
  
  actualizar() {
    if (this.estadoJuego === "jugando") {
      this.personaje.controlarMovimiento();
    }
  }
  
  crearArbustos() {
    this.arbustos = [];
    
    let posiciones = [
    //arbustos izq
      { x: 150, y: 320 },
      { x: 220, y: 210 }, 
      { x: 300, y: 120 },
    //arbustos der
      { x: 500, y: 120 },
      { x: 580, y: 210 }, 
      { x: 650, y: 320 } 
    ];
    
    for (let i = 0; i < this.cantidadArbustos; i++) {
      let x = posiciones[i].x;
      let y = posiciones[i].y;
      this.arbustos[i] = new Arbusto(x, y);
    }
  }
  
  crearPersonaje() {
    this.personaje = new Personaje(width / 2, 300);
  }
  
  crearVidas() {
    this.vidas = [];
    for (let i = 0; i < 3; i++) {
      this.vidas[i] = new Vida(i * 50, 30);
    }
  }
  
  asignarEspadaAleatoria() {
    let indiceAfortunado = floor(random(this.cantidadArbustos));
    this.arbustos[indiceAfortunado].tieneEspada = true;
  }
  
  teclaPresionada(keyCodeValue) {
    if (keyCodeValue === 32 && this.estadoJuego === "jugando") {
      for (let i = 0; i < this.cantidadArbustos; i++) {
        if (this.arbustos[i].colisionaCon(this.personaje) && !this.arbustos[i].fueExplorado) {
          this.arbustos[i].fueExplorado = true;
          
          if (this.arbustos[i].tieneEspada) {
            this.estadoJuego = "ganaste";
          } else {
            this.personaje.vida--;
            if (this.personaje.vida <= 0) {
              this.estadoJuego = "perdiste";
            }
          }
        }
      }
    }
  }
  
  clicMouse() {
    if (this.estadoJuego === "ganaste" || this.estadoJuego === "perdiste") {
      if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 &&
          mouseY > height / 2 + 25 && mouseY < height / 2 + 75) {
        this.inicializarVariables();
        this.estadoJuego = "jugando";
      }
    }
  }
}
