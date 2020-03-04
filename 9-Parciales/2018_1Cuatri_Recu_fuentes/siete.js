function mostrar()
{
    var nota;
    var promedio;
    var notaMinima;
    var cantidadVarones;
    var sexo;
    var contador = 0;
    var acumuladorNotas = 0;
    var sumaNotas;
    
    
    while (contador < 5) {
        nota = prompt("Ingrese una nota");
        nota = parseInt(nota);

        while(isNaN(nota) && (nota < 1 || nota > 10)) {
            nota = prompt("Ingrese una nota valida");
            nota = parseInt(nota);
        }
        sexo = prompt("Ingrese un sexo");
        while(sexo != "f" && sexo != "m") {
            sexo = prompt("Ingrese F o M");
        }
        contador++;
        acumuladorNotas++;
    }
    //punto A:
    /*if(acumuladorNotas == 5) {
        alert("El acumulador de notas es " + acumuladorNotas);
    }*/
    sumaNotas += nota;
    sumaNotas = parseInt(sumaNotas);
    alert("La suma de notas es " + sumaNotas);

}
