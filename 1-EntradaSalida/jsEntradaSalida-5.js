/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var dato;
    var dato2;
    var dato3;

    dato = document.getElementById("ElNombre").value; 
    dato2 = document.getElementById("laEdad").value;
    dato3 = "Usted se llama " + dato + ", y tiene " + dato2 + " años.";

    alert(dato3);
}

