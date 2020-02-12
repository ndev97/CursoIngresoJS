function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch (mesDelAño) {
        case "Enero":
        alert ("Este mes tiene 30 dias o mas")
        break;
        case "Febrero":
        alert ("Este dia no tiene mas de 29 dias")
        break;
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
        case "Julio":
        case "Agosto":
        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
        alert ("Este mes tiene 30 dias o mas")
        break;
        default:
        break;
    }


}//FIN DE LA FUNCIÓN