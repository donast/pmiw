let objJuego;

function setup() {
  createCanvas(800, 450);
  objJuego = new Juego(6);
}

function draw() {
  objJuego.actualizar();
  objJuego.dibujar();
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}

function mousePressed() {
  objJuego.clicMouse();
}
