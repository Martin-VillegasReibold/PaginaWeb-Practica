
let escritosEnGustosDos = localStorage.getItem("escritos-YaCargados");

escritosEnGustosDos = JSON.parse(escritosEnGustosDos);

const contenidoVacio = document.getElementById("contenidoVacio");
const contenedor = document. getElementById("contenedorGustos");
let botonesEliminar = document.querySelectorAll(".removerEscrito");
let selCategoria = document.querySelectorAll("input[name ='rb']");
let selGenre = document.querySelectorAll("input[name ='genero']");
let count = 0;

function cargarEscritosGustos (esc){
    if(escritosEnGustosDos && escritosEnGustosDos.length > 0){


        contenidoVacio.classList.add("disabled");
        contenedor.classList.remove("disabled");
        
        contenedor.innerHTML = ""; //borra los elementos antes de llamar.
    
        esc.forEach(element => {
            const div = document.createElement("div");
            div.classList.add("escritoGusto");
            div.innerHTML=`
            <img class= "imagenEscrito" src="${element.imagen}" alt="${element.titulo}">
            <div class="detallesEscritos">
            <a class = "like1" id= "${element.titulo}" href = "ApartadoLecturaUsuario.html">
                <h4 class = "titulo">${element.titulo} | By:${element.creator}</h4>
                </a>
                <p class = "sinopsis">${element.sinopsis}</p>
                <input type="submit" class = "removerEscrito" id ="${element.titulo}" value="Remove" onclick="">
            </div>
            `;
    
            contenedor.append(div);

            count++; // suma lecturas
            


        });

        
            
       
        
        
    
    
    
    } else {
    
        contenidoVacio.classList.remove("disabled");
        contenedor.classList.add("disabled");
       
    
    } 
    document.getElementById("contador").innerHTML= "Your Readings:" + count;
    actualizarBotonRemove();
    actualizarLink();
}

cargarEscritosGustos(escritosEnGustosDos);
comenzarBusqueda();

//Control de RadioButtons.
let selected;
let findSelected = () => {
    selected = document.querySelector("input[name ='rb']:checked").value; // devuelve el valor del radiobutton
   
    if(selected == "All"){
        cargarEscritosGustos(escritosEnGustosDos);

    } else {
        document.getElementById("genero0").checked = true;
        const categoriaElegida = escritosEnGustosDos.filter( producto => producto.categoria === selected) // verifica que la categoria sea correcta.
        cargarEscritosGustos(categoriaElegida);
    }
}

selCategoria.forEach(selCat =>{
    selCat.addEventListener("change", findSelected);
    
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

//Control de RadioButtons Genre
let selected2 = document.querySelector("input[name ='genero']:checked").value;
function findSelected2 (){
    selected2 = document.querySelector("input[name ='genero']:checked").value;
    if(selected2 == "All"){      
            
        cargarEscritosGustos(escritosEnGustosDos);

    } else {
        document.getElementById("categoria0").checked = true;
        const categoriaElegida = escritosEnGustosDos.filter( producto => producto.genre === selected2); // verifica que la categoria sea correcta.
        cargarEscritosGustos(categoriaElegida);

    }
}


selGenre.forEach(selG =>{
    selG.addEventListener("change", findSelected2);
    
})

//actualiza el boton cada vez que elimina.

function actualizarBotonRemove () {
    botonesEliminar = document.querySelectorAll(".removerEscrito"); // vuelve a actualizar los botones luego de cargar los elementos(se traen del dom).
    
    botonesEliminar.forEach(boton => {
        count--; //quita lecturas
        boton.addEventListener("click", eliminarDeGustos);
        
        
    })
}

//accion del boton.

function eliminarDeGustos(e){
    const idBoton = e.currentTarget.id;
    const index = escritosEnGustosDos.findIndex(producto => producto.titulo === idBoton);
    escritosEnGustosDos.splice(index, 1);

    if(selected = "All"){
        cargarEscritosGustos(escritosEnGustosDos);

    } else {
        
        const categoriaElegida = escritosEnGustosDos.filter( producto => producto.categoria === selected) // verifica que la categoria sea correcta.
        cargarEscritosGustos(categoriaElegida);
    }

    localStorage.setItem("escritos-YaCargados", JSON.stringify(escritosEnGustosDos));

}

//Buscador general.

function comenzarBusqueda (){
    document.addEventListener("keyup" , e =>{
    
    
        if(e.target.matches("#buscador")){
                document.querySelectorAll(".escritoGusto").forEach( busqueda => {
                    if(busqueda.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                        busqueda.classList.remove("filtro")
                    } else {
                        busqueda.classList.add("filtro");
                    }
                })
        }
    })
    
    }
    