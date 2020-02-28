/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividiendo;
    var divisor;
    var total;

    dividiendo = document.getElementById("numeroDividendo").value;
    divisor = document.getElementById("numeroDivisor").value;

    dividiendo = parseInt(dividiendo);
    divisor = parseInt(divisor);
    total = dividiendo % divisor;
    alert("El resto es " + total)
}
