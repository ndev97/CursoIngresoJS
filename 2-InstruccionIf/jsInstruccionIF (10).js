function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var NumeroRandom;
var min;
var max;

min = 1;
max = 10;

NumeroRandom = Math.floor(Math.random() * (max - min)) + min;
alert(NumeroRandom);

if (NumeroRandom >= 9){
alert ("EXCELENTE!") }
	else if (NumeroRandom <9 && NumeroRandom >4){
	alert ("APOBO")}
	else (NumeroRandom < 4) {
		alert ("Vamos, la proxima se puede")
	}
	

}//FIN DE LA FUNCIÓN