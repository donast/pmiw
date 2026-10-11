function preload() {
  precargar();
  miSonido = loadSound('assets/cancion.m4a');
  miFuente = loadFont('assets/PressStart2P.ttf');
}

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER);
  textFont(miFuente);
  f_inicio = loadImage("assets/inicio.jpg");
  f_creditos = loadImage("assets/creditos.jpg");
  pantalla = "inicio";
  miSonido.setVolume(0.1);
}

function draw() {

  if (pantalla == "inicio") {
    dibujarInicio();
  } else if (pantalla == "creditos") {
    dibujarCreditos();
  } else if (pantalla == "juego") {
    dibujarJuego();
  }
  
}
