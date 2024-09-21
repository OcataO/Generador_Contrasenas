//Con F12 se abre al lado de la ip que ejecuta esto en navegador la Consola para ver el tipo de dato de la variable

let cantidad = document.getElementById('cantidad'); //; en Javascript es opcional / LET es Javascript es Var
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';

function generar(){

    let numeroDigitado = parseInt(cantidad.value);
    //console.log(numeroDigitado);
    if ( numeroDigitado < 6){
        alert("La cantidad de caracteres debe ser mayor que 6");
        contrasena.value = ''; //Deja el campo en blanco si no se cumple la condicion
        return; 
    }
    
    let password = '';
    for(let i=0; i < numeroDigitado ; i++ ) {//i++ es i + 1

    let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
    console.log(caracterAleatorio);

    password += caracterAleatorio; 

    }
    contrasena.value = password;
}










