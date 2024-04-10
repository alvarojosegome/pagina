
function cambiarPosicion(elemento) {
    var arriba = Math.random() * (window.innerHeight - 50);
    var izquierda = Math.random() * (window.innerWidth - 150);
    elemento.style.position = 'absolute';
    elemento.style.top = arriba + 'px';
    elemento.style.left = izquierda + 'px';
}

function dijoSi() {
    var siDiv = document.getElementById('si');
    siDiv.style.display = 'block';
}
