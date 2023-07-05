var textarea = document.querySelector('textarea');
var btnEncriptar = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById("btn-desencriptar");
var btnCopiar = document.getElementById("btn-copiar");
var indice=0;
textarea.focus();
var caracteresProhibidos = /[^a-z\s]/g; //cualquier caracter excepto minúsculas y espacios.

function encriptar() {
    
    var letras = [/e/g,/i/g,/a/g,/o/g,/u/g]; //lo puse en este orden para que la itineración secuencial respete los requisitos del desafio 
    var codigos = ["enter","imes","ai","ober","ufat"];
    var textoSinEncriptar = textarea.value; //evalue sacarlo de la función para ahorrar código pero aún no pude hacerlo viable.

    if ((caracteresProhibidos.test(textoSinEncriptar))) {
        alert("Usted ha ingresado un caracter prohibido.");
    } else {
        while(indice<letras.length) {
            var textoEncriptado = textoSinEncriptar.replace(letras[indice],codigos[indice]);
            textoSinEncriptar=textoEncriptado;
            indice++;
        }
        indice=0;
        mostrarAreaMensaje(textoEncriptado);
    }
}

function desencriptar() {

    var letras = ["a","e","i","o","u"];
    var codigos = [/ai/g,/enter/g,/imes/g,/ober/g,/ufat/g];
    var textoEncriptado = textarea.value;
    while(indice<letras.length) {
        var textoDesencriptado = textoEncriptado.replace(codigos[indice],letras[indice]);
        textoEncriptado=textoDesencriptado;
        indice++;
    }
    indice=0;
    mostrarAreaMensaje(textoDesencriptado);
}

function mostrarAreaMensaje (texto) {
    
    document.getElementById("output-default").style.display="none";
    document.getElementById("output-texto").style.display="block";
    document.getElementById("div-resultado").innerHTML = texto;
}

function copiarTexto () {
    
    var copyText = document.getElementById("div-resultado").textContent;
    textarea.select(); //ojo que capaz es al pedo esto (selecciona texto automaticamnte)
    navigator.clipboard.writeText(copyText);
    alert("¡Copiado!");

}
    
btnEncriptar.onclick= encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiarTexto;

