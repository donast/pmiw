function precargar() {
  for (let a = 0; a < caminar_cant; a++) {
    caminar.push(loadImage("assets/caminar_" + a + ".png"));
  }
  for (let a = 0; a < quieto_cant; a++) {
    quieto.push(loadImage("assets/quieto_" + a + ".png"));
  }
  for (let a = 0; a < rodar_cant; a++) {
    rodar.push(loadImage("assets/rodar_" + a + ".png"));
  }
  for (let a = 0; a < bowser_cant; a++) {
    bowser.push(loadImage("assets/bowser_" + a + ".png"));
  }
}
