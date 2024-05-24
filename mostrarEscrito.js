let BaseDatos = localStorage.getItem("BD");
BaseDatos = JSON.parse(BaseDatos);

let divMostrar = document.getElementById("contenidoMostrar");




mostrarEscrito();


function mostrarEscrito (){

    let rf = localStorage.getItem("TituloRf");
    const mostrar = BaseDatos.findIndex(element => element.titulo === rf);

    document.getElementById("titlee").innerHTML = BaseDatos[mostrar].titulo + " | By: " + BaseDatos[mostrar].creator


    const div = document.createElement("div"); // creo un div
        div.classList.add("contenidoM"); // agrego la clase
        div.innerHTML=`
        <div id = "contenido">
        ${BaseDatos[mostrar].contenido}
        </div>
        `;

    divMostrar.append(div);


}


function cambiarColor (){
    let fondoBlanco = document.getElementById("color1");
    let fondoNegro = document.getElementById("color2");

    if(fondoNegro.checked){
        document.getElementById("contenido").style.backgroundColor = "rgb(63, 192, 63)";
        document.getElementById("contenido").style.color = "#000";
        document.getElementById("comentario").style.backgroundColor = "rgb(63, 192, 63)";
        document.getElementById("comentario").style.color = "#000";

    }
    if(fondoBlanco.checked){
        document.getElementById("contenido").style.backgroundColor = "#2add06";
        document.getElementById("contenido").style.color = "aquamarine";
        document.getElementById("comentario").style.backgroundColor = "#2add06";
        document.getElementById("comentario").style.color = "aquamarine";
    }
}

function cambiarLetraTamano (x){

    if(x.value == "size1") {
        document.getElementById("contenido").style.fontSize ='16px';
    }

    if(x.value == "size2") {
        document.getElementById("contenido").style.fontSize = '32px';
    }

    if(x.value == "size3") {
        document.getElementById("contenido").style.fontSize = '48px';
    }



}

function enviar(){
    alert("Mensaje enviado al Autor!");
    document.getElementById("review"). value = ""
}



