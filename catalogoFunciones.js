//Agregado de historia y seleccion.

let escritosNuevo = localStorage.getItem("escrito-Nuevo");

let escritosCargados =  [
    {
        creator: "Ziimu",
        titulo: "A traveller mistake",
        imagen: "SLIDE.jpg",
        categoria: "Story",
        genre: "Aventure",
        sinopsis: "Alone in a foreing land, he struggles to survive because of the sudden death of his father, a merchant, and looks for a way to return home with his mother.",
        contenido: "Here's a story, if I had one.",
    },
    {
        creator: "Laritte",
        titulo: "Be a Goblin",
        imagen: "SLIDE.jpg",
        categoria: "Story",
        genre: "Fantasy",
        sinopsis: "A new life, this time has a goblin, the weakest monster ever(aside for slimes), gives our protagonist a chance to be a better version of himself... or not.",
        contenido: "Here's a story, if I had one.",
    },
    {
        creator: "Goat",
        titulo: "WhatIF/Your Crush Likes You",
        imagen: "SLIDE.jpg",
        categoria: "FanFic",
        genre:"Romance",
        sinopsis: "Your dream became true, the most famous singer likes you, will you be able to deal with his... obsesion?",
        contenido: "Here's a story, if I had one.",
    },
    {
        creator: "Goat",
        titulo: "WhatIF2/Your Crush Hates You",
        imagen: "SLIDE.jpg",
        categoria: "FanFic",
        genre:"Comedy",
        sinopsis: "Your dream became true, the most famous singer likes you, will you be able to deal with his... obsesion?",
        contenido: "Here's a story, if I had one.",
    }
];



if(escritosNuevo != null){

    escritosCargados = JSON.parse(escritosNuevo);

}







//escritosCargados.splice(0, 3, escritosNuevo);

//agregarEscrito();
//escritosCargados.push(escritosNuevo);

localStorage.setItem("BD", JSON.stringify(escritosCargados));


//console.log(escritosNuevo);
//console.log(escritosCargados);


asignarPortada(); // portados por defecto, para evitar problemas de tamaño.


const contEsc = document.getElementById("contenedorEscritos");
let selCategoria = document.querySelectorAll("input[name ='rb']");
let agregarLike = document.querySelectorAll(".like");
let accederEscrito = document.querySelectorAll(".like1");
let selGenre = document.querySelectorAll("input[name ='genero']");





   


comenzarBusqueda();

let selected = document.querySelector("input[name ='rb']:checked").value;
//Control de RadioButtons Category.
let findSelected = () => {
    selected = document.querySelector("input[name ='rb']:checked").value; // devuelve el valor del radiobutton
   
    if(selected == "All"){      
            
        cargarEscritos(escritosCargados);
        
    } else {
        document.getElementById("genero0").checked = true;
        const categoriaElegida = escritosCargados.filter( producto => producto.categoria === selected); // verifica que la categoria sea correcta.
        cargarEscritos(categoriaElegida);
            
    }
    
}

selCategoria.forEach(selCat =>{
    selCat.addEventListener("change", findSelected);
    
})

//Control de RadioButtons Genre
let selected2 = document.querySelector("input[name ='genero']:checked").value;
function findSelected2 (){
    selected2 = document.querySelector("input[name ='genero']:checked").value;
    if(selected2 == "All"){      
            
        cargarEscritos(escritosCargados);

    } else {
        document.getElementById("categoria0").checked = true;
        const categoriaElegida = escritosCargados.filter( producto => producto.genre === selected2); // verifica que la categoria sea correcta.
        cargarEscritos(categoriaElegida);

    }
}


selGenre.forEach(selG =>{
    selG.addEventListener("change", findSelected2);
    
})
//Acceso a Escritos por medio de link titulo
function actualizarLink(){
    accederEscrito = document.querySelectorAll(".like1");
    accederEscrito.forEach(boton=> {
        boton.addEventListener("click", acceder);
    })
}
function acceder(e){
    const idLink = e.currentTarget.id
    localStorage.setItem("TituloRf", idLink)
}


//Botones like(Add)
  function actualizarBotonLike () {
    agregarLike = document.querySelectorAll(".like"); // vuelve a actualizar los botones luego de cargar los elementos(se traen del dom).
    agregarLike.forEach(boton => {
        boton.addEventListener("click", agregarAGustos);
        
    })
    
  }

  let escritosEnGustos;

  let escritosEnGustosLS = localStorage.getItem("escritos-YaCargados");

  if(escritosEnGustosLS){
    escritosEnGustos = JSON.parse(escritosEnGustosLS);
  } else {
    escritosEnGustos = [];
  }
  

//AGREGAR HISTORIAS FAVORITAS

function agregarAGustos(e){

    
    const idBoton = e.currentTarget.id;
    const escritoAgregado = escritosCargados.find(producto => producto.titulo === idBoton);
    //localStorage.setItem("TituloRf", idBoton); //ACORDATE QUE ESTA ACA.
    
    if(escritosEnGustos.some(producto => producto.titulo === idBoton)){ //verifica que un mismo escrito no exista dos veces

    } else {
        escritosEnGustos.push(escritoAgregado);
        
    }

    localStorage.setItem("escritos-YaCargados", JSON.stringify(escritosEnGustos));

}

//Buscador general. ()

function comenzarBusqueda (){
document.addEventListener("keyup" , e =>{


    if(e.target.matches("#buscador")){
            document.querySelectorAll(".escritos").forEach( busqueda => {
                if(busqueda.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                    busqueda.classList.remove("filtro")
                } else {
                    busqueda.classList.add("filtro");
                }
            })
    }
})

}

//Funcion que asigna imagenes por defecto en base a la categoria.

function asignarPortada (){

    escritosCargados.findIndex((elemento, indice) => {
        if(elemento.categoria == "Story"){
            elemento.imagen = "story.jpg";
        }
        if(elemento.categoria == "History"){
            elemento.imagen = "SLIDE.jpg";
        }
        if(elemento.categoria == "Poetry"){
            elemento.imagen = "poetry.jpg";
        }
        if(elemento.categoria == "FanFic"){
            elemento.imagen = "fanfic.jpg";
        }
        
    })

}


