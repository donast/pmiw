// https://youtu.be/blfnbv-Rn4U

let objJuego;
let imgArbusto, imgPasto, imgCorazon;
let imgFrente, imgEspalda, imgIzquierda, imgDerecha;
let imgEspada;
let fuente;
let cancion;

function preload() {
  imgArbusto = loadImage('assets/arbusto.png');
  imgPasto = loadImage('assets/pasto.jpg');
  imgCorazon = loadImage('assets/corazon.png');
  imgEspada = loadImage('assets/espada.png');

  imgFrente = loadImage('assets/personaje_frente.png');
  imgEspalda = loadImage('assets/personaje_espalda.png');
  imgIzquierda = loadImage('assets/personaje_izquierda.png');
  imgDerecha = loadImage('assets/personaje_derecha.png');

  fuente = loadFont('assets/PressStart2P.ttf');
  cancion = loadSound('assets/cancion.m4a');
}

function setup() {
  createCanvas(800, 400);

  objJuego = new Juego(6,imgArbusto,imgPasto,imgCorazon,imgFrente,imgEspalda,imgIzquierda,imgDerecha,imgEspada,fuente);

  cancion.setVolume(0.1);
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
