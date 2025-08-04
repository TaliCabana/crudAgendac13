import Contacto from "./contacto.js";

// Todas las variables que son elementos del DOM
const btnAgregarContacto = document.getElementById("btnAgregarContacto");
const modalFormularioContacto = new bootstrap.Modal(
  document.getElementById("contactoModal")
);
// "new" crea un objeto de la clase, cuál clase? la clase creada por bootstrap (bootstrap.Modal), y de esta manera podemos usar los métodos y las propiedades que figuran en la tablita del final del modal. Yo lo que necesito es usar el "show"
// (document.getElementById("contactoModal") esto es el constructor, yo le estoy diciendo: construime el modal que he dejado maquetado
const formularioContacto = document.getElementById("formContacto");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const inputTelefono = document.getElementById("telefono");
const inputDireccion = document.getElementById("direccion");
const inputNotas = document.getElementById("notas");
const inputImagen = document.getElementById("imagen");
const inputPuestoTrabajo = document.getElementById("puestoTrabajo");
const inputEmpresa = document.getElementById("empresa");
const agenda = JSON.parse(localStorage.getItem("agendaKey")) || [];

// Funnciones
const guardarLocalstorage = () => {
  localStorage.setItem("agendaKey", JSON.stringify(agenda));
};

const crearContacto = () => {
  console.log("Aquí tengo que crear el contacto");
  // todo Agregar validaciones
  // buscar los datos del formulario y crear un objeto contacto
  const contactoNuevo = new Contacto(
    inputNombre.value,
    inputApellido.value,
    inputTelefono.value,
    inputEmail.value,
    inputImagen.value,
    inputEmpresa.value,
    inputPuestoTrabajo.value,
    inputDireccion.value,
    inputNotas.value
  );
  // guardar el contacto en la agenda de contactos
  agenda.push(contactoNuevo);
  console.log(contactoNuevo);
  // guardar la agenda en el localstorage
  guardarLocalstorage();
  // mostrar un mensaje al usuario final
  Swal.fire({
    title: "Contacto creado",
    text: `El contacto ${inputNombre.value} fue creado correctamente`,
    icon: "success",
    confirmButtonText: "Ok",
  });
  // limpiar el formulario
  limpiarFormulario();
};

function limpiarFormulario() {
  formularioContacto.reset();
}

// manejadores de eventos
btnAgregarContacto.addEventListener("click", () => {
  modalFormularioContacto.show();
});

formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();
  // Aquí tengo que crear / editar un contacto
  crearContacto();
});
