/* Objeto Posibles Clientes */
class PosibleCliente{
    constructor(nombre, email, mensaje, acepto){
        this.nombre = nombre;
        this.email = email;
        this.mensaje = mensaje;
        this.acepto = acepto;
    }
}

const PosiblesClientes = [];

/* selectores */

const formulario = document.getElementById("formulario");


/* Listeners */

formulario.addEventListener('submit', guardar);

/* Guarda el cliente en el arreglo de posibles clientes */

function guardar(e){
    e.preventDefault()
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("message").value;
    let acepto = document.getElementById("accept1").checked;
    
    PosiblesClientes.push(new PosibleCliente(nombre, email, mensaje, acepto));
}

function mostrar (){
    console.log(PosiblesClientes);
}
/* Agregando un cliente desde una API */
PosiblesClientes.push(new PosibleCliente(
    $.ajax({
    url: 'https://randomuser.me/api/',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  })
  ))



