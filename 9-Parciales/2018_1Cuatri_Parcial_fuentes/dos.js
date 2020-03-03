function mostrar()
{
  var nombre;
  var localidad;

  nombre = document.getElementById("elNombre").value;
  while (nombre = !isNaN(nombre)) {
    alert("Ingrese un nombre valido");
  }
  localidad = document.getElementById("laLocalidad").value;
  while (localidad = isNaN(localidad)) {
    alert("Ingrese una localidad valida.");
  }
  alert("usted es " + nombre + " y vive en la localidad de " + localidad);
}
