function preload() {
  precargar();
  img_fondo = loadImage("assets/fondo.jpg");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  image(img_fondo, pos_fondo, 0, 1200, 600); 
  image(img_fondo, pos_fondo + 1200, 0, 1200, 600); 
  
  bowser_sentado();

  if (estado_pers === "CAMINAR") {
    accion_caminar();
    act_fondo(vel_fondo, -1200); 
  } else if (estado_pers === "QUIETO") {
    accion_quieto();
  } else if (estado_pers === "RODAR") {
    accion_rodar();
    act_fondo(vel_fondo, -1200);
  } else if (estado_pers === "FIN") {
    dibujar_cartel();
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    reiniciar_escena();
  }
}
