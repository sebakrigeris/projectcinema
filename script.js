// Inicio

alert("Bienvenido a Magic Cinema");
alert("Por favor, en caso de no contar con un usuario y contraseña, crear una cuenta para poder visualizar y operar sobre nuestra tienda online.")

function usuarioYContrasena(usuario, contrasena, email){
    this.usuario = usuario;
    this.contraseña = contrasena
    this.email = email;
}

const usuario = prompt("Ingrese usuario a crear.");
const contrasena = prompt("Ingrese contraseña a crear.");
const email = prompt("Ingrese e-mail para recibir notificaciones de nuestra tienda online.");

const cuenta = new usuarioYContrasena(usuario, contrasena, email);


alert("Ingresaste a nuestra web con éxito.")

let ingresarNombre = prompt("Ingresa tu nombre para poder continuar");

alert("Hola" + " " + ingresarNombre + ", a continuación verás un listado de todas nuestras funciones y una vez que lo decidas, procedé a optar por cual de ellas te gustaría disfrutar en Magic Cinema.");
alert("Funciones de la semana: Piratas del Caribe 5, Transformers 4, Matrix.");

// Compra de entradas

const peliculas = {
    peli1: "piratas del caribe 5",
    peli2: "transformers 5",
    peli3: "matrix"
}

let userChoice = prompt("Bienvenido a nuestro sitio oficial de ventas, por favor, elige una pelicula").toLowerCase();


while((userChoice !== peliculas.peli1) && (userChoice !== peliculas.peli2) && (userChoice !== peliculas.peli3)) {
    alert("Película no valida")
    userChoice = prompt("Porfavor, seleccione una película que se encuentre en nuestra cartelera.").toLowerCase();
}

switch(userChoice) {
    case "piratas del caribe 5":

    alert("Gracias por elegir: Piratas del Caribe 5, ahora necesitamos que nos indiques en qué horario desearías ver esta película en Magic Cinema");

    break;

    case "transformers 4":

    alert("Gracias por elegir: Transformers 4: El lado oscuro de la luna, ahora necesitamos que nos indiques en qué horario desearías ver esta película en Magic Cinema");

    break;

    case "matrix":

    alert("Gracias por elegir: Matrix: El quinto nivel, ahora necesitamos que nos indiques en qué horario desearías ver esta película en Magic Cinema");

    break;

    default:

    alert("Esta película aún no se encuentra en nuestra cartelera.");

    break;
}


alert("Horarios disponibles: 12:30hs, 15:30hs, 20:30hs")

const horarios = {
    hora1: "12:30hs",
    hora2: "15:30hs",
    hora3: "20:30hs"
}

let horario = prompt("Por favor, elige el horario en el que deseas ver esta pelicula").toLowerCase();

while((horario !== horarios.hora1) && (horario !== horarios.hora2) && (horario !== horarios.hora3)) {
    alert("Horario no válido");
    horario = prompt("Porfavor, seleccione un horario válido").toLowerCase();
}

switch(horario) {
    case "12:30hs":

    agradecimientoEmail ();

    break;

    case "15:30hs":
        
    agradecimientoEmail ();
    
    break;

    case "20:30hs":

    agradecimientoEmail ();
    
    break;

    default:
    
    alert("Porfavor, elije alguno de nuestros horarios disponibles.")

    break;
}

let ingresaEmail = prompt("Por favor, Ingresa tu e-mail.")

alert("Gracias por adjuntarnos tu e-email, en las próximas 2hs te envíaremos el comprobante de la operación realizada, en conjunto de la ubicación en la sala.");

let continuarOCancelar = prompt("Si desea ver nuestros próximos estrenos en cartelera escriba Aceptar, de lo contrario, escriba Cancelar para finalizar con su solicitud");


while((continuarOCancelar != "Aceptar") && (continuarOCancelar !== "Cancelar")){
    alert("Marque una opción correcta");
    continuarOCancelar = prompt("Seleccione la opción correcta");
}

if(continuarOCancelar == "Aceptar"){
    alert("Estrenos: Jurassic Park, Anabelle, El Conjuro, Matrix 2, Rapido y Furioso 6, Mike Tyzon: La Historia, Tu amigo fiel.")
}

class Estrenos {
    constructor (nombre, fechaestreno) {

    this.nombre = nombre;
    this.fechaestreno = fechaestreno;
}
}
const carteleraYEstrenos = [];
carteleraYEstrenos.push(new Estrenos("Jurassic Park", "10 DIC"));
carteleraYEstrenos.push(new Estrenos("Anabelle", "12 DIC"));
carteleraYEstrenos.push(new Estrenos("El Conjuro", "13 DIC"));
carteleraYEstrenos.push(new Estrenos("Matrix 2", "14 DIC"));
carteleraYEstrenos.push(new Estrenos("Rapido y Furioso 6", "15 DIC"));
carteleraYEstrenos.push(new Estrenos("Mike Tyzon: La Historia", "16 DIC"));
carteleraYEstrenos.push(new Estrenos("Tu amigo fiel", "17 DIC"));

for(const estrenos of carteleraYEstrenos)
console.log(carteleraYEstrenos);

const estrenosDiciembre = carteleraYEstrenos.find((el) => el.nombre === "Jurassic Park");
const estrenosDiciembre1 = carteleraYEstrenos.find((el) => el.nombre === "Anabelle");
const estrenosDiciembre2 = carteleraYEstrenos.find((el) => el.nombre === "Tu amigo fiel");
console.log(estrenosDiciembre)
console.log(estrenosDiciembre1)
console.log(estrenosDiciembre2)




function agradecimientoEmail () {
    
    alert("Gracias por elegir este horario, a continuación indica tu e-mail para que te enviemos la ubicación en sala.");
    
}


