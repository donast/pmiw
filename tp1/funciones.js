function accion_caminar() {
  let frame = obt_frame_actual(caminar_cant, vel_anim);
  dibujar_personaje(caminar, pos_x, 540, frame);
  pos_x += 2; 
  
  if (pos_x === 356) {
    estado_pers = "QUIETO"; 
    tiempo_quieto = millis(); 
  }
}

function accion_quieto() {
  let frame = obt_frame_actual(quieto_cant, vel_anim);
  dibujar_personaje(quieto, pos_x, 540, frame);
  
  let tiempo_transcurrido = millis() - tiempo_quieto;
  
  if (tiempo_transcurrido > 3000) { 
    estado_pers = "RODAR"; 
  }
}

function accion_rodar() {
  let frame = obt_frame_actual(rodar_cant, vel_anim);
  dibujar_personaje(rodar, pos_x, 540, frame);
  pos_x += 2; 
  
  if (pos_x > 800) {
    estado_pers = "FIN";
  }
}

function bowser_sentado() {
  let frame = floor(cont_bowser / vel_anim) % bowser_cant;
  
  push();
    translate(730 + pos_fondo, 345);
    let img = bowser[frame];
    if (img) {
      image(img, 0, 0);
    }
  pop();

  if (estado_pers !== "FIN") {
    cont_bowser++;
  }
}

function obt_frame_actual(cant_frames, velocidad) {
  return floor(frameCount / velocidad) % cant_frames;
}

function dibujar_personaje(arreglo, x, y, frame) {
  let img = arreglo[frame];
  if (img) {
    push();
      translate(x, y);
      scale(-escala_coco, escala_coco);
      image(img, -img.width, -img.height); 
    pop();
  }
}

function act_fondo(velocidad, limite) {
  pos_fondo -= velocidad; 
  if (pos_fondo <= limite) {
    pos_fondo = 0;
  }
}

function reiniciar_escena() {
  pos_x = 0;
  pos_fondo = 0;
  cont_bowser = 0;
  estado_pers = "CAMINAR";
}

function dibujar_cartel() {
  push();
    fill(0, 150);
    noStroke();
    rect(150, 250, 500, 100, 10);
    fill(255);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("Apreta 'R' para reiniciar la escena", 400, 300);
  pop();
}
