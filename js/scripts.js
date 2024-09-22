document.addEventListener("DOMContentLoaded",(e)=>{

e.preventDefault();

const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const botonpegar = document.querySelector(".botonpegar");
const campotexto = document.getElementById("campo_texto");
const campotexto2 = document.getElementById("campo_texto2");
const contenedorimagen = document.querySelector(".contenedor-imagen");
const parrafo = document.querySelector(".parrafo");
const simbolo = document.querySelector("#simbolo");
const botoncopiar = document.getElementById("botoncopiar");
const botones = document.querySelector(".main_botones");

encriptar.addEventListener("click",e=>{
    e.preventDefault();    
    texto = campotexto.value;
    if(texto == ""){
        mostrarerror();            
    }else{ 
        desactivarbotones();
        ocultarerror();
        borrarcontenido();                
        encriptartexto();
        crearbotoncopiar();
    }
});

desencriptar.addEventListener("click",e=>{
    e.preventDefault();    
    texto = campotexto.value;
    if(texto == ""){
        mostrarerror();            
    }else{
        desactivarbotones(); 
        ocultarerror();
        borrarcontenido();                
        desencriptartexto();
        crearbotoncopiar();
    }
});

function encriptartexto(){
    texto = texto.replace(/a/mg,"ar");
    texto = texto.replace(/e/mg,"enter");
    texto = texto.replace(/i/mg,"imes");
    texto = texto.replace(/o/mg,"ober");
    texto = texto.replace(/u/mg,"ufat");
    campotexto2.innerHTML = texto;
}

function desencriptartexto(){
    texto = texto.replace(/ar/mg,"a");
    texto = texto.replace(/enter/mg,"e");
    texto = texto.replace(/imes/mg,"i");
    texto = texto.replace(/ober/mg,"o");
    texto = texto.replace(/ufat/mg,"u");
    campotexto2.innerHTML = texto;
}

function crearbotoncopiar(){
    document.querySelector("#campo_texto2").style.display = "block";
    document.querySelector(".botoncopiar").style.display = "block";
}

function mostrarerror(){
    simbolo.style.display = "block";
    parrafo.textContent =  "el campo de texto esta vacio";         
}

function borrarcontenido(){
    contenedorimagen.remove();
}

function desactivarbotones(){
    encriptar.disabled = true; 
    desencriptar.disabled = true; 
}

function activarbotones(){
    encriptar.disabled = false; 
    desencriptar.disabled = false; 
}

function ocultarerror(){
    parrafo.innerHTML = "";
    simbolo.style.display = "none";        
}

botoncopiar.addEventListener("click",e=>{
    e.preventDefault();
    let textoencriptado = campotexto2.value;
    campotexto.value = "";
    activarbotones();
    campotexto2.select();
    document.execCommand("copy");        
});

});
