//Ejercicio #1: Suma de dos números
var numero1 = parseInt(prompt("Ingresa primer numero"));
var numero2 = parseInt(prompt("Ingresa segundo numero"));

function suma(primerNumero, segundoNumero) {
  var resultado = primerNumero + segundoNumero;
  alert("El resultado de " + numero1 +"+ "+numero2+" es: " + resultado);
}
 
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
area_triangulo(base,altura);


//Ejercicio #4: Cálcular cantidad galones de leche
/*un productor de leche lleva el registro de lo que produce en litros, 
pero cuando va la mercado a vender su produccion tiene que entregar 
galones. Por lo que necesita ayuda para saber cuanto va a ganar al final 
del dia si toda su produccion la debe transformar a galones. Realice un 
algoritmo que ayude al productor a saber cuanto galones va a poder vender 
al dia (1 galon=3.785 litros)*/

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
 (1 pulgada = 0.0254 m). */
var metros=parseInt(prompt("Ingrese cantidad de metros"));

var pulgadas=function(metros){
	var pulgada= metros/0.0254;
	pl=Math.trunc(pulgada);
	alert(metros+" metros corresponde a "+pl+" pulgadas");
}
pulgadas(metros); 



//Ejercicio #7: PINTURAS "LA BROCHA GORDA" 
/*Pinturas "La brocha gorda" requiere determinar cuánto cobrar por 
trabajos de pintura. Considere que se cobra por m2 y realice un  algoritmo que le 
permita ir generando presupuestos para cada cliente. */

var cliente=prompt("Ingrese su nombre");
var metros=parseInt(prompt(cliente+" ingrese cuantos metros cuadrados desea pintar"));


var brocha=function(metros){
	var valor=metros*2000;
	alert(metros+" metros tiene un valor de "+valor+" mil pesos, considerando que el mt2 vale $2.000")
}
brocha(metros);  



//Ejercicio #8: AUTOBUSES "LA CURVA LOCA" 
/*La compañia de autobuses "La curva loca" requiere determinar el costo 
que tendrá el boleto de un viaje sencillo, esto basado en los kilómetros 
por recorrer y en el costo por kilómetro. */
var kilometros=parseInt(prompt("Ingrese kilometros a recorrer"));
var costo=210;

function autobuses(kilometros){
	var boleto= costo*kilometros;
	alert("Por "+kilometros+" kilometros, el valor del boleto es de $"+boleto);
}
autobuses(kilometros); 

//Ejercicio #9: LLAMADA TELEFÓNICA 
/*Se requiere un algoritmo para determinar el costo que tendrá realizar 
una llamada telefónica con base en el tiempo que dura la llamada y en el
 costo por minuto. */
 var minutos=parseInt(prompt("Cuantos minutos va a hablar?"));
 var costo=60;

function llamada(minutos){
	var vllamada= costo*minutos;
	alert("Por "+minutos+" minutos, el valor de la llamada es de $"+vllamada);
}
llamada(minutos); 


//Ejercicio #10: Hotel "Cama Arena" 
/*El hotel "Cama Arena" requiere determinar lo que le debe cobrar a un 
huésped por su estancia en una de sus habitaciones. */

 var huesped=prompt("Cual es su nombre?");
 var estancia=parseInt(prompt(huesped+" de cuantos días será su estancia?"));
 var costo=12000;

function hotel(estancia){
	var vestancia= costo*estancia;
	alert(huesped+" por "+estancia+" días, el valor de su hospedaje es de $"+vestancia);
}
hotel(estancia);

//Ejercicio #1: División de números 
/*Haz un programa que divida 2 numeros, ¿Que sucede si en lugar de dividir
dos numeros, intentamos dividir 2 textos. ¿Qué sucede si el divisor es 
el numero 0? */
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
  


//Ejercicio #2: Conversión de edad 
/*Haz un programa que funcione de la siguiente forma:
El programa nos pregunta nuestro nombre y nuestra edad. 
El programa da como resultado nuestro nombre y a continuacion los días 
que hemos vivido hasta el momento , deberas multiplicar la edad por 365*/

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
formato(nombre,apellido,residencia);


//Ejercicio #4: Contadores 
/*Haz un programa que funcione de la siguiente forma:
 El programa nos pide un número
 Utiliza 3 contadores
 Primer contador suma 5 al numero introducido 
 Segundo contador suma 21 al resultado obtenido con el primer contador 
 Tercer contador resta 4 al resultado obtenido con el segundo contado
 El programa nos presenta los 4  numero obtenidos */
var numero=parseInt(prompt("Ingresa un numero"));
var contador1=numero+5;
var contador2=contador1+21;
var contador3=contador2-4;

var contadores=function(numero){
	alert("Numero Introducido: "+numero+"\n"+"Contadores: "+contador1+" "+contador2+" "+contador3);
}
contadores(numero);  

//Ejercicio #1: APROBADO O REPROBADO 
/*Se pide leer tres notas de un alumno. Obtener su nota y enviar un 
mensaje donde diga si el alumno aprobó o reprobó el curso (tomar en 
cuenta que si obtiene 6 o más aprueba, de lo contrario no) */ 
var nota1=parseInt(prompt("Ingrese nota"));
var nota2=parseInt(prompt("Ingrese nota"));
var nota3=parseInt(prompt("Ingrese nota"));

var aprobado=function(nota1,nota2,nota3){
	var promedio=(nota1+nota2+nota3)/3;
	if (promedio>6) {
		alert("Haz aprobado");
	}
	else{
		alert("Haz reprobado");
	}
}
aprobado(nota1,nota2,nota3);   


//Ejercicio #2: ¿CUÁL ES EL NÚMERO MAS GRANDE? 
/*Se desea implementar un algoritmo para determinar cuál de dos valores 
proporcionados es el mayor. */
var num1=parseInt(prompt("Ingrese un numero"));
var num2=parseInt(prompt("Ingrese otro numero"));

function numGrande(num1,num2){
	if (num1>num2) {
		alert(num1+" es mas grande")
	}
	else {
		alert(num2+" es mas grande")
	}

}
numGrande(num1,num2);


//Ejercicio #3: POSITIVO O NEGATIVO 
/*Realice un algoritmo para determinar si un número es positivo o 
negativo. */

var num=parseInt(prompt("Ingrese un número"));

var pos_neg= function(num){
	if (num<0) {
		alert(num+" es negativo");
	}
	else{
		alert(num+" es positivo");
	}
}
pos_neg(num); 


//Ejercicio #4: Almacenes "El harapiento distinguido" 
/*Almacenes 'El harapiento distinguido' tiene una promoción: a todos los 
trajes que tienen un precio superior a $2500.00 se les aplicará un 
descuento de 15 %, a todos los demás se les aplicará sólo 8 %. Realice 
un algoritmo para determinar el precio final que debe pagar una persona 
por comprar un traje y de cuánto es el descuento que obtendrá. */

var precio=parseInt(prompt("Ingrese el precio del traje"));

function almacenes (precio){
	var desc1=(precio*25)/100;
	var oferta1=precio-desc1;
	var desc2=(precio*8)/100;
	var oferta2=precio-desc2;
	if (precio>2500.00) {
		alert("Su descuento es de $"+desc1+", el valor de su traje es de $"+oferta1);

	}
	else {
		alert("Su descuento es de $"+desc2+", el valor de su traje es de $"+oferta2);
	}
}
almacenes(precio);  


//Ejercicio #5: EL MAYOR DE LOS NÚMEROS 
/*Se requiere determinar cuál de tres cantidades proporcionadas es la 
mayor. */

var num1=parseInt(prompt("Ingrese un numero"));
var num2=parseInt(prompt("Ingrese otro numero"));
var num3=parseInt(prompt("Ingrese otro numero"));

function mayor_num (num1,num2,num3){
	if (num1>num2 && num1>num3) {
		alert("El numero mayor es "+num1);

	}
	else if (num2>num1 && num2>num3)  {
		alert("El numero mayor es "+num2);
	}
	else{
		alert("El numero mayor es "+num3);
	}
}
mayor_num(num1,num2,num3);  

//Ejercicio #6: BANQUETES "La langosta ahumada" 
/*"La langosta ahumada es una empresa dedicada a ofrecer banquetes; sus 
tarifas son las siguientes: el costo de platillo por persona es de 
$95.00, pero si el número de personas es mayor a 200 pero menor o igual 
a 300, el costo es de 585.00. Para más de 300 personas el costo por 
platillo es de $75.00. Se requiere un algoritmo que ayude a determinar 
el presupuesto que se debe presentar a los clientes que deseen realizar 
un evento.*/


//Ejercicio #7: VIAJE ESCOLAR 
/*El director de una escuela está organizando un viaje de estudios, y 
requiere determinar cuánto debe cobrar a cada alumno y cuánto debe pagar 
a la compañia de viajes por el servicio. La forma de cobrar es la 
siguiente: si son 100 alumnos o más, el costo por cada alumno es de 
$65.00: de 50 a 99 alumnos, el costo es de 570.00, de 30 a 49, de
 695.00. y si son menos de 30, el costo de la renta del autobús es de 
 $4000.00, sin importar el número de alumnos. 
Realice un algoritmo que permita determinar el pago a la compañia de 
autobuses y lo que debe pagar cada alumno por el viaje*/
//Ejercicio #8: COMPAÑIA DE AUTOBUSES 
/*Una compañia de viajes cuenta con tres tipos de autobuses (A, B y C), 
cada uno tiene un precio por kilómetro recorrido por persona, los costos 
respectivos son 62.0. 52.5 y $3.0. 
Se requiere determinar el costo total y por persona del viaje 
considerando que cuando éste se presupuesta debe haber un mínimo de 20 
personas, de lo contrario el cobro se realiza con base en este número 
limite */
//Ejercicio #9: HAMBURGUESAS "El náufrago satisfecho" 
/*'El náufrago satisfecho« ofrece hamburguesas sencillas, dobles y 
triples, las cuales tienen un costo de $20.00, $25.00 y 628.00 
respectivamente. La empresa acepta tarjetas de crédito con un cargo de 
5 % sobre la compra. Suponiendo que los clientes adquieren sólo un tipo 
de hamburguesa, realice un algoritmo para determinar cuánto debe pagar 
una persona por N hamburguesas. */


