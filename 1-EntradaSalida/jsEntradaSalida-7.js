/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
    var numero2;
    var total;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    total = numero1 + numero2;

    alert ("la suma es " + total);
}

function restar()
{
	numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    total = numero1 - numero2;

    alert ("la resta es de " + total);
}

function multiplicar()
{ 
	var numero51;
    var numero6;
    var total;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    total = numero1 * numero2;

    alert("la multiplicación es de " + total);
}

function dividir()
{
	var numero1;
    var numero2;
    var total;

    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    total = numero1 / numero2;

    alert("la división es de " + total);
}

