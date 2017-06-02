crearTabla();
function crearTabla() {
    var aux = document.getElementById("puntuacion");
    if(aux.firstChild)aux.removeChild(aux.firstChild);
    var tabla = document.createElement('table');
    tabla.style = "width:100%;text-align:center";
    cabecera();
    if (localStorage.getItem("tuplas")) tablaCuerpo();
    document.getElementById("puntuacion").appendChild(tabla);

    function cabecera() {
        var fila = document.createElement('tr');
        var titulos = ['Nombre', 'Dificultad', 'Tiempo'];

        for (var i = 0; i < titulos.length; i++) {
            var celda = document.createElement('th');
            var texto = document.createTextNode(titulos[i]);
            celda.appendChild(texto);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    function tablaCuerpo() {
        var tuplas = JSON.parse(localStorage.getItem("tuplas"));
        for (var i = 0; i < tuplas.length; i++) {
            tabla.appendChild(tablaFila(tuplas[i]));
        }
    }

    function tablaFila(obj) {
        var fila = document.createElement('tr');
        var celda = document.createElement('td');
        var celda1 = document.createElement('td');
        var celda2 = document.createElement('td');
        var texto = document.createTextNode(obj.nom);
        celda.appendChild(texto);
        fila.appendChild(celda);
        texto = document.createTextNode(obj.dif);
        celda1.appendChild(texto);
        fila.appendChild(celda1);
        texto = document.createTextNode(obj.tiempo);
        celda2.appendChild(texto);
        fila.appendChild(celda2);
        return fila;
    }

}