function precargar() {
  for (let a = 0; a < imagen_cant; a++) {
    imagen.push(loadImage("assets/imagen_" + a + ".jpg"));
  }
  
}

function mouseClicked() {
  let dRojo = dist(mouseX, mouseY, bx, by);
  let dVerde = dist(mouseX, mouseY, ax, ay);

  //boton rojo
  if (dRojo <= br && estado != 5) {
    
    if (estado == 4) {
      //de bifurcacion a camino b
      estado = 7;
    } else if (estado == 8) {
      estado = 0;
    } else {
      estado = estado + 1;
    }
  }

  //boton verde
  if (dVerde <= ar) {
    if (estado == 4) {
      //de bifurcacion a camino a
      estado = 5;
    } else if (estado == 5) {
      estado = 6;
    }
  }
}
