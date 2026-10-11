let imagen_cant = 17;
let imagen = [];
let estado = 0;

//rojo
let bx = 80;
let by = 380;
let br = 50; 

//verde
let ax = 720;
let ay = 380;
let ar = 50; 

//jugar
let boton_start_x = 235;
let boton_start_y = 380;
let boton_start_w = 130;
let boton_start_h = 50;

//creditos
let boton_creditos_x = 415;
let boton_creditos_y = 380;
let boton_creditos_w = 170;
let boton_creditos_h = 50;

//voler al menu
let boton_volver_x = 290;
let boton_volver_y = 390;
let boton_volver_w = 240;
let boton_volver_h = 50;

//reinicar
let boton_reinicio_x = 400;
let boton_reinicio_y = 380;
let boton_reinicio_w = 100;
let boton_reinicio_h = 50;

let f_inicio;
let f_creditos;
let pantalla;
let miSonido;

let width_texto = 1;
let limite_texto = 305;


let frases = [
  //final malo
  "Bobby llega a casa y nota que sus padres no están pero hay una carta en la mesa...", 
  "La carta dice: 'HE SECUESTRADO A TUS PARES Y A TU HERMANO BUBBY, PARA RESCATARLOS DEBERAS IR A UN LUGAR QUE TE GENERA MUCHO MIEDO!!!', a donde debería ir bobby?", 
  "Bobby empieza a caminar por el bosque mágico en busca de la famosa cueva maldita", 
  "Bobby encuentra la cueva maldita, que decidis hacer?", 
  "Bobby entra a la cueva y se encuentra con el mago malvado junto con su familia!!!", 
  "El mago malvado te lanza un hechizo pero como no tienes ningún arma no puedes defenderte, provocando que el mago te convierta en un dragon", 
  "BAD ENDING, el mago malvado te convirtió a ti y a bubby en dragones y tus padres siguen secuestrados", 
  
  //final bueno
  "Decides ir a una casa abandonada la cual te da miedo desde pequeño a ver que puede haber...", 
  "Dentro de la casa te encuentras con un duende!!! decides contarle todo y te dice que debes ir al bosque pero si encuentras una cueva tienes que evitarla...", 
  "Bobby decide emprender viaje por el bosque pero ahora si teniendo cuidado de lo que pueda pasar...", 
  "Entre unos arbustos bobby se encuentra con una espada, ahora si se siente preparado para ir a la cueva, que debería hacer bobby?", 
  "Bobby porfin encuentra la famosa cueva maldita y decide meterse para ver que puede llegar a haber adentro...", 
  "Dentro de la cueva bobby se encuentra con...EL MAGO MALVADO Y A TU FAMILIA!!!, ahora si es el momento en el que bobby debe pelear contra el mago malvado...", 
  "EL MAGO MALVADO ATACA! le tira un rayo a bobby pero él logra poner la espada al frente creando una especie de escudo y haciendo que el rayo rebote contra el mago malvado", 
  "GOOD ENDING! lograste vencer al MAGO MALVADO! el hechizo que tenia tu hermano bubby desapareció y pudiste rescatar a tu familia!",
  
  //final alternativo
  "Decidiste seguir caminando y te cruzas con una bruja! la bruja se asusta y te lanza un hechizo!", 
  "Final alternativo! La bruja te termino convirtiendo en sapo y ahora olvidaste tu vida pasada." 
];
