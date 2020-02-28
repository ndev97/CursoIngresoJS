function mostrar()
{
//tomo la edad  
/*var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Enero":
    alert ("falta para el invierno")
    break;
    case "Febrero":
    alert ("falta para el invierno")
    break;
    case "Marzo":
    alert ("falta para el invierno")
    break;
    case "Abril":
    alert ("falta para el invierno")
    break;
    case "Mayo":
    alert ("falta para el invierno")
    break;
    case "Junio":
    alert ("falta para el invierno")
    break;
    case "Julio":
    alert ("Estamos en invierno. Abrigate que hace frio.")
    break;
    case "Agosto":
    alert ("Estamos en invierno. Abrigate que hace frio.")
    break;
    case "Septiembre":
    alert ("Ya pasamos el frio, ahora calor!")
    break;
    case "Octubre":
    alert ("Ya pasamos el frio, ahora calor!")
    break;
    case "Noviembre":
    alert ("Ya pasamos el frio, ahora calor!")
    break;
    case "Diciembre":
    alert ("Ya pasamos el frio, ahora calor!")
    break;
    default:
    break;*/

    //para hacerlo mas corto:

    var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño){
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    alert("Falta para el invierno.");
    break;
    case "Julio":
    alert("Abrigate que hace frio.");
    break;
    case "Agosto":
    alert("Abrigate que hace frio.");
    break;
    default:
    alert("Ya pasamos el frio, ahora calor!!!");
    break;
}


}//FIN DE LA FUNCIÓN