


var json = sessionStorage.getItem("array");
//arreglo de usuarios registrados.
let users =[
    { email: 'usuario@gmail.com', contraseña: 'contrasena', nickname: 'Usuario1' },
    { email: 'martinvillegasreibold@gmail.com', contraseña: '1234', nickname: 'Tincho' },  
];

//Necesario para que los nuevos valores del arreglo no se pierdan al refrescar la pagina.
if (json != null) {
    users = JSON.parse(json); //convercion a objeto json para manipular el contenido como objeto
    //show(users)
}




//Validacion crearUsuario

function validar()
{
    
    //validacion campo Nickname
    let nick = document.getElementById('nick').value;

    if(nick.length > 0 && isNaN(nick)){
        comp = true;
        nom = 'nick';
        notiVisual();
    } else {
        comp = false;
        nom = 'nick';
        notiVisual();
    }

    //validacion campo Contraseña
    let pass = document.getElementById('contrasena').value;

    if(pass.length > 0){
        comp = true;
        nom = 'contrasena';
        notiVisual();
    } else {
        comp = false;
        nom = 'contrasena';
        notiVisual();
    }

    //validacion campo Email
    let email = document.getElementById('email').value;

    let emailVal = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(emailVal.test(email.value)){
        comp = true;
        nom = 'email';
        notiVisual();
    } else {
        comp = false;
        nom = 'email';
        notiVisual();
    }

    //validacion campo Genero
    let genre = document.getElementById('BGO').value;

    if(genre != ""){

        comp = true;
        nom = 'BGO';
        notiVisual();

    } else {
        comp = false;
        nom = 'BGO';
        notiVisual();
      
    }

    //validacion campos Fecha de Nacimiento
    let dia = document.getElementById('dia').value;
    let mes = document.getElementById('mes').value;
    let anio = document.getElementById('anio').value;


        if(!isNaN(dia) && validarFecha(dia, mes, anio)){
            comp = true;
            nom = 'dia';
            notiVisual();
        } else {
            comp = false;
            nom = 'dia';
            notiVisual();
        }
    
        if(!isNaN(mes) && mes > 0 && mes <= 12){
            comp = true;
            nom = 'mes';
            notiVisual();
        } else {
            comp = false;
            nom = 'mes';
            notiVisual();
        }
    
        if(!isNaN(anio) && anio > 1900){
            comp = true;
            nom = 'anio';
            notiVisual();
        } else {
            comp = false;
            nom = 'anio';
            notiVisual();
        }

        //Checkbox de Terminos y Condiciones
        let checker = document.getElementById('terms');
        let sendbtn = document.getElementById('create');
    
          sendbtn.disabled = true; //Deshabilita el boton hasta que el checkbox este check
    
            checker.onchange = function() {
              if(!this.checked){
                sendbtn.disabled = true;
              }else{
                sendbtn.disabled = false;
    
              }
            };        

       
    
    // mensaje de validacion general.
    if(validarFecha(dia,mes,anio) && BGO && pass && nick && email){

        alert("Cuenta creada");


        window.location = "LogIn.html";


        users.push({email: email, contraseña: pass, nickname: nick}); //AGREGA email y contraseña que pueden usarse en el arreglo de Users

        sessionStorage.setItem("array", JSON.stringify(users)); //arreglo conservando los nuevos valores.

        

    } else {
        alert("Desafortunadamente no todos los datos ingresados son correctos, por favor revisar.");

        checker.checked = false;

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

/**
 * Validacion de Fecha de nacimiento.
 * 
 * @param {*} dia 
 * @param {*} mes 
 * @param {*} anio 
 * @returns 
 */
function validarFecha(dia, mes, anio){

    mes = mes - 1;
    date = new Date (anio, mes, dia);
    if(dia == date.getDate() && mes == date.getMonth() && anio > 1900){
        return true;
    } 
    return false;

}




//Validacion LogIn

function login(){

    let usuario = document.getElementById('email').value;
    let password = document.getElementById('contrasena').value;

    let val = !!users.find(element => element.email === usuario && element.contraseña === password);
    let valNom = !!users.find(element => element.email === usuario);
    let valCon =!!users.find(element => element.contraseña === password);
    
    if (val) { 
        window.location = "CatalogoHistoriasUsuario.html";
        let UserActual =  users.findIndex(element => element.email === usuario && element.contraseña === password);
        localStorage.setItem("nick", users[UserActual].nickname);

    } else {
       alert("Ingrese los datos correctos");
       if(valNom){
        comp = true;
        nom = 'email';
        notiVisual();

        if(!valCon){
            comp = false;
            nom = 'contrasena';
            notiVisual();
        }

       } else {
        comp = false;
        nom = 'email';
        notiVisual();
       }

       
    }


}

