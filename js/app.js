import Contacto from "./contacto.js";

// Todas las variables que son elementos del DOM
const btnAgregarContacto = document.getElementById("btnAgregarContacto");
const modalFormularioContacto = new bootstrap.Modal (document.getElementById("contactoModal"))
// "new" crea un objeto de la clase, cuál clase? la clase creada por bootstrap (bootstrap.Modal), y de esta manera podemos usar los métodos y las propiedades que figuran en la tablita del final del modal. Yo lo que necesito es usar el "show"
// (document.getElementById("contactoModal") esto es el constructor, yo le estoy diciendo: construime el modal que he dejado maquetado
const formularioContacto = document.getElementById("formContacto")
const inputNombre = document.getElementById("nombre");
const inputpellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const inputTelefono = document.getElementById("telefono");
const inputDireccion = document.getElementById("direccion");
const inputNotas = document.getElementById("notas");
const inputImagen = document.getElementById("imagen");
const inputPuestoTrabajo = document.getElementById("puestoTrabajo");
const inputEmpresa = document.getElementById("empresa");


// Funnciones
const crearContacto = ()=>{
    console.log("Aquí tengo que crear el contacto")
    // todo Agregar validaciones
    // buscar los datos del formulario y crear un objeto contacto
    // guardar el contacto en la agenda de contactos
    // guardar la agenda en el localstorage
}

// manejadores de eventos
btnAgregarContacto.addEventListener("click",()=>{
    modalFormularioContacto.show()
})

formularioContacto.addEventListener("submit", (e)=>{
    e.preventDefault()
    // Aquí tengo que crear / editar un contacto
    crearContacto()
})