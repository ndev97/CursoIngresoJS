function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

var NumeroRandom;
var min;
var max;

min = 1;
max = 11;

NumeroRandom = Math.floor(Math.random() * (max - min)) + min;
alert(NumeroRandom);

}//FIN DE LA FUNCIÓN