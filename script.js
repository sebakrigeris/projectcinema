// Inicio

alert("Bienveni@ a CineApp");
alert("Por favor ingresa tu usuario y contraseña");

let usuario = prompt("Para ingresar a nuestra web, por favor ingresa el nombre de usuario: cineapp").toLowerCase();

while(usuario != "cineapp") {
    usuario = prompt("Usario incorrecto, por favor, vuelve a ingresar los datos correspondientes.").toLowerCase();
    
}

let contraseña = prompt("Para ingresar a nuestra web, por favor ingresa la siguiente contraseña: funcion123").toLowerCase();

while(contraseña != "funcion123") {
    contraseña = prompt("Contraseña incorrecta, por favor, vuelve a ingresar los datos correspondientes.").toLowerCase();
}

alert("Muy bien, has accedido con éxito a nuestra tienda virtual.");

let ingresarNombre = prompt("Ingresa tu nombre para poder continuar").toLowerCase();

alert("Hola" + " " + ingresarNombre + ", a continuación verás un listado de todas nuestras funciones y una vez que lo decidas, procedé a optar por cual de ellas te gustaría recurrir.");
alert("Funciones de la semana: Piratas del Caribe 5, Transformers 4, Matrix.");

// Compra de entradas

const peli1 = "piratas del caribe 5";
const peli2 = "transformers 5";
const peli3 = "matrix";
let userChoice = prompt("Bienvenido a nuestro sitio oficial de ventas, por favor, elige una pelicula").toLowerCase();


while((userChoice !== peli1) && (userChoice !== peli2) && (userChoice !== peli3)) {
    alert("Película no valida")
    userChoice = prompt("Porfavor, seleccione una película que se encuentre en nuestra cartelera.").toLowerCase();
}

switch(userChoice) {
    case "piratas del caribe 5":

    alert("Gracias por elegir: Piratas del Caribe 5, ahora necesitamos que nos indiques en qué horario desearías ver esta película en CineApp");

    break;

    case "transformers 4":

    alert("Gracias por elegir: Transformers 4: El lado oscuro de la luna, ahora necesitamos que nos indiques en qué horario desearías ver esta película en CineApp");

    break;

    case "matrix":

    alert("Gracias por elegir: Matrix: El quinto nivel, ahora necesitamos que nos indiques en qué horario desearías ver esta película en CineApp");

    break;

    default:

    alert("Esta película aún no se encuentra en nuestra cartelera.");

    break;
}


alert("Horarios disponibles: 12:30hs, 15:30hs, 20:30hs")

const hora1 = "12:30hs";
const hora2 = "15:30hs";
const hora3 = "20:30hs";

let horario = prompt("Por favor, elige el horario en el que deseas ver esta pelicula").toLowerCase();

while((horario !== hora1) && (horario !== hora2) && (horario !== hora3)) {
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


function agradecimientoEmail () {
    
    alert("Gracias por elegir este horario, a continuación indica tu e-mail para que te enviemos la ubicación en sala.");
    
}