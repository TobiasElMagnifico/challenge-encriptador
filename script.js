var textarea = document.querySelector('textarea');
var btnEncriptar = document.getElementById("btn-encriptar");
var btnDesencriptar = document.getElementById("btn-desencriptar");
var btnCopiar = document.getElementById("btn-copiar");
var indice=0;
var caracteresProhibidos = /[^a-z\s]/g; //cualquier caracter excepto minúsculas y espacios.
textarea.focus();

function encriptar() {
    
    var letras = [/e/g,/i/g,/a/g,/o/g,/u/g]; //lo puse en este orden para que la itineración secuencial respete los requisitos del desafio 
    var codigos = ["enter","imes","ai","ober","ufat"];
    var textoSinEncriptar = textarea.value; //evalue sacarlo de la función para ahorrar código pero aún no pude hacerlo viable.
    var testTexto = caracteresProhibidos.test(textoSinEncriptar);
    
    if(textoSinEncriptar == "") {
        textarea.focus();
    } else {

        if ((testTexto)) {
            alert("Usted ha ingresado un caracter inválido. Corrija su texto y vuela a intentarlo");
        } else {
            while(indice<letras.length) {
                var textoEncriptado = textoSinEncriptar.replace(letras[indice],codigos[indice]);
                textoSinEncriptar=textoEncriptado;
                indice++;
            }
            indice=0;
            mostrarAreaMensaje(textoEncriptado);
            //window.scroll({top:500,behavior:"smooth"}); función para scrollear automaticamente hasta resultado
            
        }
    }
}

function desencriptar() {

    var letras = ["a","e","i","o","u"];
    var codigos = [/ai/g,/enter/g,/imes/g,/ober/g,/ufat/g];
    var textoEncriptado = textarea.value;

    if(textoEncriptado == "") {
        textarea.focus();
    } else {
        while(indice<letras.length) {
            var textoDesencriptado = textoEncriptado.replace(codigos[indice],letras[indice]);
            textoEncriptado=textoDesencriptado;
            indice++;
        }
        indice=0;
        mostrarAreaMensaje(textoDesencriptado);
        //window.scroll({top:600,behavior:"smooth"});//función para scrollear automaticamente hasta resultado
    }
}

function mostrarAreaMensaje (texto) {
    
    document.getElementById("output-default").style.display="none";
    document.getElementById("output-texto").style.display="block";
    document.getElementById("textarea-resultado").innerHTML = texto;
}

function copiarTexto () {
    
    var copyText = document.getElementById("textarea-resultado").textContent;
    textarea.select(); //ojo que capaz es al pedo esto (selecciona texto automaticamnte)
    navigator.clipboard.writeText(copyText);
    alert("¡Copiado!");
}
    
btnEncriptar.onclick= encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiarTexto;

