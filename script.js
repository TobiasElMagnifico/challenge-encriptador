var textarea = document.querySelector('textarea');
var indice=0;
textarea.focus();
var caracteresProhibidos = /[^a-z\s]/g; //cualquier caracter excepto minúsculas y espacios.

function encriptar() {
    
    var letras = [/a/g,/e/g,/i/g,/o/g,/u/g,/aimes/g];
    var codigos = ["ai","enter","imes","ober","ufat","ai"];
    var textoSinEncriptar = textarea.value;

    if ((caracteresProhibidos.test(textoSinEncriptar))) {
        alert("Usted ha ingresado un caracter prohibido.");
    } else {
        while(indice<letras.length) {
            var textoEncriptado = textoSinEncriptar.replace(letras[indice],codigos[indice]);
            textoSinEncriptar=textoEncriptado;
            indice++;
        }
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
    mostrarAreaMensaje(textoDesencriptado);
}

function mostrarAreaMensaje (funcion) {
    
    document.getElementById("output-default").style.display="none";
    document.getElementById("output-texto").style.display="block";
    document.getElementById("demo").innerHTML = funcion;
}
    

var btnEncriptar = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById("btn-desencriptar");
btnEncriptar.onclick= encriptar;
btnDesencriptar.onclick = desencriptar;

