function mostrar()
{
    var nota;
    var promedio;
    var notaMinima;
    var cantidadVarones;
    var sexo;
    var contador = 0;
    var contadorNotas = 0;
    var acumuladorNotas = 0;
    
    
    while (contador < 5) {
        nota = prompt("Ingrese una NOTA");
        nota = parseInt(nota);

        while(isNaN(nota) || nota < 1 || nota > 10) {
            nota = prompt("Ingrese una nota valida");
            nota = parseInt(nota);
        }
        sexo = prompt("Ingrese un sexo");
        while(sexo != "f" && sexo != "m") {
            sexo = prompt("Ingrese F o M");
        }
        contador++;
    }

}
