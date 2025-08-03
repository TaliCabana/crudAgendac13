// elementos del DOM
const btnAgregarContacto = document.getElementById("btnAgregarContacto");
const modalFormularioContacto = new bootstrap.Modal (document.getElementById("contactoModal"))
// "new" crea un objeto de la clase, cuál clase? la clase creada por bootstrap (bootstrap.Modal), y de esta manera podemos usar los métodos y las propiedades que figuran en la tablita del final del modal. Yo lo que necesito es usar el "show"
// (document.getElementById("contactoModal") esto es el constructor, yo le estoy diciendo: construime el modal que he dejado maquetado
const formularioContacto = document.getElementById("formContacto")

// Funnciones
const crearContacto = ()=>{
    console.log("Aquí tengo que crear el contacto")
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