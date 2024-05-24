




function validar()
{
    
    //validacion campo titulo
    let title = document.getElementById('titulo').value;

    if(title.length > 0){
        comp = true;
        nom = 'titulo';
        notiVisual();
    } else {
        comp = false;
        nom = 'titulo';
        notiVisual();
    }

    //validacion campo sinopsis
    let summary = document.getElementById('sinopsis').value;

    if(summary.length > 0 && summary.length <= 250){
        comp = true;
        nom = 'sinopsis';
        notiVisual();
    } else {
        comp = false;
        nom = 'sinopsis';
        notiVisual();
    }


    //validacion campo Genero
    let cate = document.getElementById('categorias').value;

    if(cate != ""){
        comp = true;
        nom = 'categorias';
        notiVisual();

    } else {
        comp = false;
        nom = 'categorias';
        notiVisual();
      
    }


    let gen = document.getElementById('genree').value;

    if(gen != ""){
        comp = true;
        nom = 'genree';
        notiVisual();

    } else {
        comp = false;
        nom = 'genree';
        notiVisual();
      
    }


    //validacion campo Contenido
    let text = document.getElementById('texto').value;

    if(text.length > 0){
        comp = true;
        nom = 'texto';
        notiVisual();
    } else {
        comp = false;
        nom = 'texto';
        notiVisual();
    }
    

    
   
       
    // mensaje de validacion general.
    if(title && summary && cate && text && gen){

        let nickuser = localStorage.getItem("nick")

        

        alert("Historia Agregada.");
        let BaseDatos = JSON.parse(localStorage.getItem("BD"))
       

        BaseDatos.push({
        creator: nickuser,
        titulo: title,
        imagen: "SLIDE.jpg",
        categoria: cate,
        genre: gen,
        sinopsis: summary,
        contenido: text,
        });

      
    
      console.log(BaseDatos);

        localStorage.setItem("escrito-Nuevo", JSON.stringify(BaseDatos));

        window.location = "CatalogoHistoriasUsuario.html";
        
        

    } else {
        alert("Desafortunadamente no ha ingresado todos los datos pedidos, por favor revisar.");
    }



}



/**
 * Notificacion visual de datos correctos e incorrectos.
 */

function notiVisual () {

    if(comp){
        //alert("funciona");
        document.getElementById(nom).style.borderBlockColor = "green"; 
        document.getElementById(nom).style.borderBlockWidth = "3px";

    } else {
        document.getElementById(nom).style.borderBlockColor = "red";
        document.getElementById(nom).style.borderBlockWidth = "3px";
    }

}


