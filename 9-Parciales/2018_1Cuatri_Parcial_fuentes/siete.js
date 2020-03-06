function mostrar()
{
    var nota;
    var sexo;
    var contador = 0;
    var promedio;
    var sumaTotales = 0;
    var notaMasBaja;
    var contadorVarones = 0;
    var varonesAprobados = 0;

    while (contador <5) {
        nota = prompt("Ingrese una nota");
        nota = parseInt(nota);
        while(isNaN(nota) || (nota < 0 && nota > 10)) {
            nota = prompt("Ingrese una nota valida");
            nota = parseInt(nota);
        }
        sexo = prompt("Ingrese un sexo");
        while (sexo != "m" && sexo != "f") {
            sexo = prompt("Ingrese F o M");
            
        }
        contador++;
        sumaTotales += nota;
        
        if (sexo == "m") {
            contadorVarones++;
        }

        if (nota >= 6 && sexo == "m") {
            varonesAprobados++;
        }
    }

    promedio = sumaTotales / contador;
    alert("A) el promedio es " + promedio);
    alert("contador de varones " + contadorVarones);
    alert("suma notas " + sumaTotales);
    alert("C) varones aprobados " + varonesAprobados);
}
