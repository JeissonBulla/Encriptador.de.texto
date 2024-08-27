const btnEncriptar = document.querySelector(".btn-Encriptar")
const txtEncriptar = document.querySelector(".Encriptar")
const aviso = document.querySelector(".textoAdvertencia")
const respuesta = document.querySelector(".evaluar")
const btnDesencriptar = document.querySelector(".btn-Desencriptar")
const btncopiar = document.querySelector("#botonCopiar")

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt =texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
   
    if(texto==""){
        aviso.style.backgound = "#0A3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight= "800";
        aviso.textContent = "El espacio no puede estar vacio";

        setTimeout(()=> {
            aviso.removeAttribute("style");
        },1500);
    }
    else if(texto !== txt){
        aviso.style.backgound = "#0A3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight= "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=> {
            aviso.removeAttribute("style");
        },1500);
    }

    else if (texto !== texto.toLowerCase()) {
        aviso.style.backgound = "#0A3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight= "800";
        aviso.textContent = "El texto debe estar en minúscula";


    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
        
        respuesta.innerHTML = texto;
    }

  
});

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt =texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
   
    if(texto==""){
        aviso.style.backgound = "#0A3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight= "800";
        aviso.textContent = "El espacio no puede estar vacio";

        setTimeout(()=> {
            aviso.removeAttribute("style");
        },1500);
    }
    else if(texto !== txt){
        aviso.style.backgound = "#0A3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight= "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=> {
            aviso.removeAttribute("style");
        },1500);
    }

    else if (texto !== texto.toLowerCase()) {
        aviso.style.backgound = "#0A3871";
        aviso.style.color = "#ffff";
        aviso.style.fontWeight= "800";
        aviso.textContent = "El texto debe estar en minúscula";


    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
        
        respuesta.value = texto;
    }

})

btncopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    alert ("texto copiado con exito")
    document.execCommand("copy");
})