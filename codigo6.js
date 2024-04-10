// Ejercicio 6
/*

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 
'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 
'T'];

let stringDNI = prompt("Introduzca número de DNI con la letra :");
console.log ( " StringDNI es " + stringDNI);



let numDNI   = stringDNI.substring(0,8);
console.log ( " numDNI es " + numDNI);
let letraDNI = stringDNI.substring(8,9);
console.log ( " letraDNI es " + letraDNI);

$end = false;

if ((stringDNI.length != 9) ||
    (numDNI<0) || (numDNI>99999999))
    {console.log ( "El numero proporcionado no es valido ")
    }
else {
    numResto23 = numDNI  % 23;
    letraDNIasignada = letras [numResto23];
    if ( letraDNIasignada != letraDNI) 
        {
            console.log( " la letra asignada, que es " + letraDNIasignada+ " no se corresponde con la letra introducida");
        }
    else  console.log( " El DNI introducido es correcto "); 
}

*/
/* Ejercicio 7

let numero = prompt("Introduzca un numero:");
console.log ( " Numero es " + numero);
let elfactorial = 1;

for (let $i=1; $i <= numero ;$i++){ 
        console.log ( " $i " + $i );
         elfactorial = elfactorial * $i ;
         console.log ( " $i " + $i +" factorial "+ elfactorial );
        }

console.log ( "El factorial de "+ numero + " es " + elfactorial) */

/* Ejercicio 8

let numero = prompt("Introduzca un numero:");
console.log (parOimpar(numero));

function parOimpar(numero) {
    
    var elresto = numero % 2;
    if (elresto == 0)
    return  "El "+ numero + " es par"
    else 
    return ( "El "+ numero + " es impar");
}
*/
/* Ejercicio 9
let lacadena = prompt("Introduzca un frase mezcla, o no, de mayusculas y minusculas:");
console.log (lacadena);
let laSinEspacios = lacadena.replaceAll(" ","");

let letraActual = "";
let letraCambiada ="";
let contadorMayus = 0;
let contadorMinus = 0;

function fesMayuscula(letra){ 
    
    console.log (letra);
    console.log (letra.toUpperCase())
    console.log (letra === letra.toUpperCase())
    return letra === letra.toUpperCase();}

function fesMinuscula(letra){return letra === letra.toLowerCase();}
  
for (let i=0; i<laSinEspacios.length;i++){
    letraActual   = laSinEspacios.charAt(i);
    if (fesMayuscula(letraActual)) { contadorMayus++ }
    if (fesMinuscula(letraActual)) { contadorMinus++ } 
     }

if (contadorMayus == laSinEspacios.length) {console.log ("La cadena tiene solo letras mayusculas");}
else if (contadorMinus == laSinEspacios.length) {console.log ("La cadena tiene solo letras minusculas");}
else {console.log ("La cadena tiene "+contadorMinus+" letras minusculas y "+contadorMayus+" letras mayusculas");} 
*/
// Ejercicio 10

function esPalindromo (texto) {
    //invierte el texto
    let textoMinusculas = texto.toLowerCase();
    let textoSinEspacios = textoMinusculas.replaceAll(" ","");
 
    let textoInvertido ="";
//    console.log ("longitud de texto \'"+textoSinEspacios.lenght -1+"\'")
    for (let i=textoSinEspacios.length -1; i>=0;i--){
//        console.log("i="+ i + " "+ textoSinEspacios.charAt(i));
        textoInvertido += textoSinEspacios.charAt(i);
         }
//     console.log (textoInvertido) 
     if (textoInvertido===textoSinEspacios) return true;
    else return false;
}
let elTexto = "La ruta nos aporto otro paso natural"
if (esPalindromo(elTexto)) console.log ("\'"+elTexto+"\' es un palindromo"  );
else console.log ("\'"+elTexto+"\' no es un palindromo"  );

elTexto = "Isaac no ronca asi";
if (esPalindromo(elTexto)) console.log ("\'"+elTexto+"\' es un palindromo"  );
else console.log ("\'"+elTexto+"\' no es un palindromo"  );

elTexto = "Se verlas al reves";
if (esPalindromo(elTexto)) console.log ("\'"+elTexto+"\' es un palindromo"  );
else console.log ("\'"+elTexto+"\' no es un palindromo"  );

elTexto = "Amo la paloma";
if (esPalindromo(elTexto)) console.log ("\'"+elTexto+"\' es un palindromo"  );
else console.log ("\'"+elTexto+"\' no es un palindromo"  );

elTexto =  "Anita lava la tina";
if (esPalindromo(elTexto)) console.log ("\'"+elTexto+"\' es un palindromo"  );
else console.log ("\'"+elTexto+"\' no es un palindromo"  );

elTexto = "Luz azul";
if (esPalindromo(elTexto)) console.log ("\'"+elTexto+"\' es un palindromo"  );
else console.log ("\'"+elTexto+"\' no es un palindromo"  );

elTexto = "Alguna otra cosa";
if (esPalindromo(elTexto)) console.log ("\'"+elTexto+"\' es un palindromo"  );
else console.log ("\'"+elTexto+"\' no es un palindromo"  );
