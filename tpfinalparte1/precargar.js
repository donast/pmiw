function precargar() {
  for (let a = 0; a < imagen_cant; a++) {
    imagen.push(loadImage("assets/foto_" + a + ".png"));
  }
}

function mouseClicked() {
  let dRojo = dist(mouseX, mouseY, bx, by);
  let dVerde = dist(mouseX, mouseY, ax, ay);

  //pantalla inicio
  if (pantalla === "inicio") {
    if (mouseX > boton_start_x && mouseX < boton_start_x + boton_start_w && mouseY > boton_start_y && mouseY < boton_start_y + boton_start_h) {
      userStartAudio();
      if (!miSonido.isLooping()) {
        miSonido.loop();
      }
      pantalla = "juego"; 
    }
    
    //click boton creditos
    else if (mouseX > boton_creditos_x && mouseX < boton_creditos_x + boton_creditos_w && mouseY > boton_creditos_y && mouseY < boton_creditos_y + boton_creditos_h) {
      userStartAudio();
      if (!miSonido.isLooping()) {
        miSonido.loop();
      }
       width_texto = 0; 
      pantalla = "creditos";
    }
  }
  
  //creditos
  else if (pantalla === "creditos") {
    // Clic en el botón VOLVER
    if (mouseX > boton_volver_x && mouseX < boton_volver_x + boton_volver_w && mouseY > boton_volver_y && mouseY < boton_volver_y + boton_volver_h) {
       miSonido.stop(); 
       pantalla = "inicio";
    }
  }
  
  //pantalla juego
  else if (pantalla === "juego") {
    if ((estado == 6 || estado == 14 || estado == 16) && dVerde <= ar) {
      miSonido.stop();     
      pantalla = "inicio"; 
      estado = 0;
      userStartAudio();
    } else {
      
      //boton rojo
      if (dRojo <= br && estado != 0 && estado != 2 && estado != 4 && estado != 5 && estado != 6 && estado != 7 && estado != 8 && estado != 9 && estado != 11 && estado != 12 && estado != 13 && estado != 14 && estado != 15 && estado != 16) {
        if (estado == 1) {
          estado = 7; 
        } else if (estado == 3) {
          estado = 9; 
        } else if (estado == 10) {
          estado = 15; 
        } else {
          estado = estado + 1;
        }
      }

      //boton verde
      if (dVerde <= ar) {
        if (estado == 1) {
          estado = 2; 
        } else {
          estado = estado + 1;
        }
      }
    }
  }
}

function crearBotonInteractiva(x, y, w, h) {
  rect(x, y, w, h, 30);
}

function dibujarInicio() {
  
  image(f_inicio, 0, 0, 800, 450);
  textSize(18);
  fill(37, 163, 196);
  crearBotonInteractiva(235, 380, 130, 50);
  crearBotonInteractiva(415, 380, 170, 50);
  fill(255);
  text("JUGAR", 297, 414);
  text("CREDITOS", 501, 414);
}

function dibujarCreditos() {
  
  image(f_creditos, 0, 0, 800, 450);
  textSize(15);
  
  //boton volver
  fill(255, 0, 153);
  rect(290, 390, 240, 50, 50);
  fill(255);
  text("Volver al Menú", 285, 423, 250, 50);
  
  //texto
  fill(37, 196, 79);
  rect(245, 130, width_texto + 3, 60, 10);
  rect(245, 205, width_texto + 3, 100, 10);
  rect(245, 320, width_texto + 3, 50, 10);
  
  fill(255);
  text("Trabajo realizado por:", 250, 160, width_texto, 110);
  text("Donato Palmieri 125653/4 y Luciel Tejeda 122916/6, Comision 4.", 247, 235, width_texto, 110);
  text("Autor de la Obra: Fukio Mitsuji", 247, 344, width_texto, 110);
    
  if (width_texto < limite_texto){
    width_texto = width_texto + 8;
  }
}

function dibujarJuego() {
  
  textSize(11);
  
  if (imagen[estado]) {
    image(imagen[estado], 0, 0, 800, 450);
    fill(0, 125, 125);
    rect(140, 365, 515, 60);
    fill(255);
    text(frases[estado], 140, 381, 510, 100);
  }
  
  //boton rojo
  if (estado == 1) {
    fill(205, 0, 0);
    circle(bx, by, br * 2);
    fill(255);
    textSize(11);
    text("ir a una\ncasa aba\nndonada", bx, by - 5);
  } else if (estado == 3) {
    fill(205, 0, 0);
    circle(bx, by, br * 2);
    fill(255);
    textSize(12);
    text("seguir\ncamina\nndo", bx, by - 5);
  } else if (estado == 10) {
    fill(205, 0, 0);
    circle(bx, by, br * 2);
    fill(255);
    textSize(12);
    text("seguir\ncamina\nndo", bx, by - 5);
  }

  //boton verde
  if (estado == 1) {
    fill(0, 205, 0);
    circle(ax, ay, ar * 2);
    fill(255);
    textSize(12);
    text("ir al\nbosque\nmagico", ax, ay - 10);
  } else if (estado == 3) {
    fill(0, 205, 0);
    circle(ax, ay, ar * 2);
    fill(255);
    textSize(12);
    text("entrar\na la\ncueva", ax, ay - 5);
  } else if (estado == 10) {
    fill(0, 205, 0);
    circle(ax, ay, ar * 2);
    fill(255);
    textSize(12);
    text("ir a la\ncueva", ax, ay);
  } else if (estado == 6 || estado == 14 || estado == 16) {
    fill(0, 205, 0);
    circle(ax, ay, ar * 2);
    fill(255);
    textSize(13);
    miSonido.stop(); 
    text("reini\nciar", ax, ay);
  } else {
    fill(0, 205, 0);
    circle(ax, ay, ar * 2);
    fill(255);
    textSize(13);
    text("sigui\nente", ax, ay);
  }  
}
