function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var NumeroRandom;
var min;
var max;

min = 1;
max = 10;

NumeroRandom = Math.floor(Math.random() * (max - min)) + min;

if (NumeroRandom >= 9) {
alert (NumeroRandom +" - EXCELENTE!") }
	else if (NumeroRandom <9 && NumeroRandom >4) {
	alert (NumeroRandom +" - APOBÓ")}
	else if (NumeroRandom < 4) {
		alert (NumeroRandom +" - Vamos, la proxima se puede")
	}
	

}//FIN DE LA FUNCIÓN