function mostrar()
{
//tomo la edad  

	var edad;
    var estadocivil;
    
    edad = document.ElementById("edad").value;
    estadocivil = document.ElementById("estadoCivil").value;

    console.log

    if(edad >=18 && estadocivil == "Soltero"){
        alert("Es soltero y no es menor");
    }
}//FIN DE LA FUNCIÓN