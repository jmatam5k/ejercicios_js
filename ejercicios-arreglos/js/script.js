//Ejercicio #1: El menor de los numeros
var num1=prompt("Ingresa tu primer numero");
var num2=prompt("Ingresa tu segundo numero");
var num3=prompt("Ingresa tu tercer numero");
var menor_numero=function(){
	if (num1==num2 && num3==num1) {
		console.log("Todos los numeros son iguales");
	}
	if (num1<num2 && num1<num3) {
		console.log(num1+" "+"es menor")
	}
	else if (num2<num1 && num2<num3) {
		console.log(num2+" "+"es menor")
	}	
	else if (num3<num2 && num3<num1){
		console.log(num3+" "+"es menor")
	}
}
menor_numero(num1,num2,num3);
//Ahora en un Array:

//Ejercicio #2: Numero par o impar

/*var npar=prompt("Ingresa tu numero");

var numero_par=function(num){
	var npar=num;
	if (npar%2==0) {
		console.log(npar+" "+"es par");
	}
	else{
		console.log(npar+" "+"es impar");
	}

}
numero_par(npar);*/

//


