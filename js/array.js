
//Ejercicio #1: El menor de los numeros

var menor_numero=function(num1,num2,num3){
	var numeros=[num1,num2,num3];
	var min=Math.min.apply(null,numeros);
	alert("El numero menor es "+min);
}
function entradaMenor_numero(){
	var num1=prompt("Ingresa tu primer numero");
	var num2=prompt("Ingresa tu segundo numero");
	var num3=prompt("Ingresa tu tercer numero");
	menor_numero(num1,num2,num3); 
}



//Ejercicio #2: Numero par o impar




//Ejercicio #3: Ordenando numeros 
/*Realizar una funsion a la cual le envie tres enteros y los muestre 
ordena.s de rnenor a mayor. */

var ordenados=function(num1,num2,num3){
	var numeros=new Array(num1,num2,num3);
	var ordenado= numeros.sort();
	alert("Array ordenado "+ordenado);
}
function entradaOrdenados(){
	var num1=prompt("Ingresa tu primer numero");
	var num2=prompt("Ingresa tu segundo numero");
	var num3=prompt("Ingresa tu tercer numero");
	ordenados(num1,num2,num3); 
}


//Ejercicio #4: Mayusculas o minusculas 
/*Definir una función que muestre información sobre una cadena de texto 
que se le pasa como argumento. A partir de la cadena que se le pasa, 
la funsion determina si esa cadena está formada sólo mayúsculas. sólo por
minúsculas o por una mezcla de ambas. */



function mayusMinus(cadena) {

	var resultado = "La cadena \""+cadena+"\" ";

	if(cadena == cadena.toUpperCase()) {
		alert(resultado += " está formada sólo por mayúsculas");
	}
	else if(cadena == cadena.toLowerCase()) {
		alert(resultado += " está formada sólo por minúsculas");
	}
	else {
		alert(resultado += " está formada por mayúsculas y minúsculas");
	}
}
function entradaMayusMinus(){
	var cadena=prompt("Ingrese una frase");
	mayusMinus(cadena);
}

//Ejercicio #5: Palindromo 
/*Definir una función que determine si la cadena dele,. que se 
le pasa como parámetro es un palíndromo. es decir, si se lee de 
la misrna forma desde la izquierda 'desde la derecha_ Ejemplo . 
palíndromo complejo: la ruta nos aporto .o paso natural.. */
/*
function palindrome(cadena){
	var cadena=prompt("Ingrese una cadena de texto");
 	var inicio=0;
 	var final= cadena.length-1; 
 	var contador= 0;
 	while(final>=0){
 		if(cadena.charAt(inicio) != cadena.charAt(final)){
 			contador++;
 		}
 		inicio++;
 		final--;
 		if(contador>0){
 			alert(cadena + " " + "no es un palindrome");
 		}
 	}
 	alert(cadena + " " + "si es un palindrome");

 	palindrome(cadena);
 }*/
//Ejercicio #6: Operaciones matematicas 
/*Realizar un programa que te opción de la operad. matemática que quieres realizar por medio de ronciones 
Ejercicio #7: Cuadrado de la suma de dos numeros 
Realizar un programa que calcule el cuadm. de la suma de dos Mirra-vos */


//Ejercicio #8: Numero primo 
/*Realizar un programa que por medio de una roncion nos indique si el número 
que el usua. ingresa es primo o no */
function esPrimo(numero){
	
	var primo=[numero];
	var contador=0;
	for (var i = 0; i <= primo; i++) {
		if (primo%i==0) {
			contador++;
		}
	}
	if (contador==2) {
		alert("el numero es primo");
	}
	else{
		alert("el numero no es primo");
	}
	
}
function entradaEsPrimo(){
	var numero=parseInt(prompt("Ingresa un numero"));
	esPrimo(numero);
}

//Ejercicio #9: Multiplos de un numero 
/*Programa que calcula los 10 primeros múltiplos del número que queramos, 
utilizando uro función que retoma parámetro. 


Ejercicio #10: Cantidad de digitos 
Desarrollar una función que retorne la cantidad de digitos que tiene una 
variable entera positiva */

function cantDigitos(numero){
	var contador=[0];
	var div=10;
	do{
		var res=numero/div;
		contador++;
		div=div*10;
	}
	while(res>=1){
		alert("El numero tiene "+contador+" digitos");
	}
}
function entradaCantDigitos(){
	var numero=parseInt(prompt("Ingrese un numero"));
	cantDigitos(numero);
}





