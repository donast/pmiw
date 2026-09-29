function preload() {
  precargar();
}

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER, CENTER);
  textSize(12);
}

function draw() { 
  background(220);
 
  if (imagen[estado]) {
    image(imagen[estado], 0, 0, 800, 450);
  }
   
  //boton verde se dibuja en todos los estados EXCEPTO en el 5
  if (estado != 5) {
    fill(50, 200, 50);
    noStroke();
    circle(bx, by, br * 2);

    // Texto del Botón Rojo
    fill(255); // Texto blanco
    if (estado == 4) {
      text("Hacerle caso", bx, by);
    } else {
      text("Siguiente", bx, by);
    }
  }
  
  //boton rojo solo en estados 4 y 5
  if (estado == 4 || estado == 5) { 
    fill(200, 50, 50);
    noStroke();
    circle(ax, ay, ar * 2);
    fill(255);
    if (estado == 4) {
      text("No hacerle caso", ax, ay);
    } else {
      text("Siguiente", ax, ay);
    }
  }    
}
