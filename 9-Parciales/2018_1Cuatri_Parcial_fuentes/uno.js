
function mostrar()
{
    var ancho;
    var largo;
    var perimetro;

    ancho = prompt("Valor del ANCHO del rectangulo");
    ancho = parseInt(ancho);
    while (isNaN(ancho) || ancho < 1) {
        ancho = prompt("Ingrese un numero valido:");
        ancho = parseInt(ancho);
    }

    largo = prompt("Valor del LARGO del rectangulo");
    largo = parseInt(largo);
    while (isNaN(largo) || largo < 1) {
        largo = promt("Ingrese un numero valido:");
        largo = parseInt(largo);
    }
    perimetro = 2 * (ancho + largo);
    perimetro = parseInt(perimetro);
    alert("El perimetro del rectangulo es " + perimetro);

}
