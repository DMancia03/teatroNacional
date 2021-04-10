function enviarConsulta() {
    var nombre = document.getElementById("txtNombre");
    var texto;
    texto = "Estimado " + nombre.value + " su consulta será enviada y gestionada por el Ministerio de Cultura.";
    alert(texto);
}