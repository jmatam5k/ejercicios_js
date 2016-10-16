//Ejercicio #1: Suma de dos números
/*var numero1 = parseInt(prompt("Ingresa primer numero"));
var numero2 = parseInt(prompt("Ingresa segundo numero"));

function suma(primerNumero, segundoNumero) {
  var resultado = primerNumero + segundoNumero;
  alert("El resultado de " + numero1 +"+ "+numero2+" es: " + resultado);
}
 
// Llamada a la función
suma(numero1, numero2);


//Ejercicio #2: Promediode 3 números
var p1=parseInt(prompt("Ingresa primer numero"));
var p2=parseInt(prompt("Ingresa segundo numero"));
var p3=parseInt(prompt("Ingresa tercero numero"));
var promedio=function(num1,num2,num3){
	resultado=(num1+num2+num3)/3;
	alert("El promedio de los 3 numeros es: "+resultado)
}
promedio(p1,p2,p3);
//Ejercicio #3: Cálculo área de un triángulo
var base=parseInt(prompt("Ingresa valor para la base"));
var altura=parseInt(prompt("Ingresa valor para la altura"));

function area_triangulo(base,altura){
	var area=(base*altura)/2;
	alert("El area de tu triángulo es: "+area);
}
area_triangulo(base,altura);*/


//Ejercicio #4: Cálcular cantidad galones de leche

/*un productor de leche lleva el registro de lo que produce en litros, 
pero cuando va la mercado a vender su produccion tiene que entregar 
galones. Por lo que necesita ayuda para saber cuanto va a ganar al final 
del dia si toda su produccion la debe transformar a galones. Realice un 
algoritmo que ayude al productor a saber cuanto galones va a poder vender 
al dia (1 galon=3.785 litros)

var litros=parseInt(prompt("Ingrese cantidad de litros"));

var galones=function(litros){
	var galon= litros/3.785;
	g=Math.floor(galon);
	alert(litros+" litros corresponde a "+g+" galones");
}
galones(litros);


//Ejercicio #5: Sueldo

var valorHora=parseInt(prompt("Ingrese el valor hora "));
var cantDias=parseInt(prompt("Ingrese numero de días en la semana trabajados"));
var cantHoras=valorHora*9;

function sueldo(valorHora,cantHoras){
	if(cantDias<=5){
		var pago=cantDias*cantHoras;
	}
	
	alert("Su sueldo semanal es de $"+pago);
}
sueldo(valorHora,cantHoras);

//Ejercicio #6: CONVERSION MEDIDAS DE LA TELA 
/*Una modista, para realizar sus prendas de vestir, encarga las telas al 
extranjero.Para cada pedido, tiene que proporcionar las medidas de la tela
en pulgadas, pero ella generalmente las tiene en metros. 
Realice un algoritmo para ayudar a resolver el problema, determinando 
cuántas pulgadas debe pedir con base en los metros que requiere. 
 (1 pulgada = 0.0254 m). 
var metros=parseInt(prompt("Ingrese cantidad de metros"));

var pulgadas=function(metros){
	var pulgada= metros/0.0254;
	pl=Math.trunc(pulgada);
	alert(metros+" metros corresponde a "+pl+" pulgadas");
}
pulgadas(metros); */



//Ejercicio #7: PINTURAS "LA BROCHA GORDA" 
/*Pinturas "La brocha gorda" requiere determinar cuánto cobrar por 
trabajos de pintura. Considere que se cobra por m2 y realice un  algoritmo que le 
permita ir generando presupuestos para cada cliente. 

var cliente=prompt("Ingrese su nombre");
var metros=parseInt(prompt(cliente+" ingrese cuantos metros cuadrados desea pintar"));


var brocha=function(metros){
	var valor=metros*2000;
	alert(metros+" metros tiene un valor de "+valor+" mil pesos, considerando que el mt2 vale $2.000")
}
brocha(metros);  */



//Ejercicio #8: AUTOBUSES "LA CURVA LOCA" 
/*La compañia de autobuses "La curva loca" requiere determinar el costo 
que tendrá el boleto de un viaje sencillo, esto basado en los kilómetros 
por recorrer y en el costo por kilómetro. 
var kilometros=parseInt(prompt("Ingrese kilometros a recorrer"));
var costo=210;

function autobuses(kilometros){
	var boleto= costo*kilometros;
	alert("Por "+kilometros+" kilometros, el valor del boleto es de $"+boleto);
}
autobuses(kilometros); */

//Ejercicio #9: LLAMADA TELEFÓNICA 
/*Se requiere un algoritmo para determinar el costo que tendrá realizar 
una llamada telefónica con base en el tiempo que dura la llamada y en el
 costo por minuto. 
 var minutos=parseInt(prompt("Cuantos minutos va a hablar?"));
 var costo=60;

function llamada(minutos){
	var vllamada= costo*minutos;
	alert("Por "+minutos+" minutos, el valor de la llamada es de $"+vllamada);
}
llamada(minutos); */


//Ejercicio #10: Hotel "Cama Arena" 
/*El hotel "Cama Arena" requiere determinar lo que le debe cobrar a un 
huésped por su estancia en una de sus habitaciones. 

 var huesped=prompt("Cual es su nombre?");
 var estancia=parseInt(prompt(huesped+" de cuantos días será su estancia?"));
 var costo=12000;

function hotel(estancia){
	var vestancia= costo*estancia;
	alert(huesped+" por "+estancia+" días, el valor de su hospedaje es de $"+vestancia);
}
hotel(estancia);

//Ejercicio #1: División de números 
Haz un programa que divida 2 numeros, ¿Que sucede si en lugar de dividir
dos numeros, intentamos dividir 2 textos. ¿Qué sucede si el divisor es 
el numero 0? 
var eleccion=prompt("Ingresara texto o numero?")
var num1,num2,texto1;
function numeros_texto(){
if (eleccion=="numero") {
	var num1=parseInt(prompt("Ingresa un numero"));
	var num2=parseInt(prompt("Ingresa otro numero"));
		var operacion=num1/num2;
		resultado=Math.trunc(operacion)

		alert("La división del numero "+num1+" por el numero "+num2+" es: "+resultado);
	}
else if (eleccion=="texto") {
	var texto1=(prompt("Ingresa 2 palabras"));
	var separador=" ";
	var limite=2;
	
		var cadena=texto1.split(separador, limite);
		
		alert("La division del texto queda asi: "+cadena); 
	}
}
numeros_texto();
    /*


//Ejercicio #2: Conversión de edad 
/*Haz un programa que funcione de la siguiente forma:
El programa nos pregunta nuestro nombre y nuestra edad. 
El programa da como resultado nuestro nombre y a continuacion los días 
que hemos vivido hasta el momento , deberas multiplicar la edad por 365.

var nombre=prompt("Tu nombre?");
var edad=parseInt(prompt("Tu edad?"));

function conversion(tiempo){
	var vida=edad*365;
	alert("Tu nombre es "+nombre+" y haz vivido "+vida+ " días");
}
conversion(nombre,edad);  */

//Ejercicio #3: Formato de output 
/*Haz un programa que funcione de la siguiente forma:
 El programa nos pregunta nuestro nombre, primer apellido, residencia. 
var nombre=prompt("Tu nombre?");
var apellido=prompt("Tu primer apellido?");
var residencia=prompt("Cuál es tu lugar de residencia?");

function formato(nombre,apellido,residencia){
	alert("*************************************\n Tu nombre es "+nombre+" "+apellido+"\n"+" resides en "+residencia+
		   "\n*************************************");
}
formato(nombre,apellido,residencia);*/


//Ejercicio #4: Contadores 
/*Haz un programa que funcione de la siguiente forma:
 El programa nos pide un número
 Utiliza 3 contadores
 Primer contador suma 5 al numero introducido 
 Segundo contador suma 21 al resultado obtenido con el primer contador 
 Tercer contador resta 4 al resultado obtenido con el segundo contado
 El programa nos presenta los 4  numero obtenidos 
var numero=parseInt(prompt("Ingresa un numero"));
var contador1=numero+5;
var contador2=contador1+21;
var contador3=contador2-4;

var contadores=function(numero){
	alert("Numero Introducido: "+numero+"\n"+"Contadores: "+contador1+" "+contador2+" "+contador3);
}
contadores(numero);  */
//Ejercicio tt5: Producto escalar 
/*HaZ un programa que sova pa,a calcula, el producto escalar dedos vectores bel »no U fOrma Oi“kularlo es N Siguiente. U•in lu1•v11+ (u2•va Ezemzlo El ctoduco escalar de cuan vectores se casas, as:- 92.31* 15. (-rs) • 13 • -21. -10 - 6a -16 U *sabdd" ha de ser de l anuente loma Comprueba el tunCIOnanuent0 414 program). ulliand0 el Ceso concreo que aparece en la ebstr:ac,On 
*/


