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
const tbody = document.querySelector("#tablaContactosBody");
let estoyCreando = true;
let idContacto = null;

// Verificar si el localstorage tiene contactos, si no tiene, hago un array vacío
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
  console.log("Contacto nuevo");
  // dibuje el contacto en la tabla
  dibujarFila(contactoNuevo, agenda.length);
};

function limpiarFormulario() {
  formularioContacto.reset();
}

const cargarContactos = () => {
  // verificar si tengo contactos para cargar
  if (agenda.length !== 0) {
    // recorrer mi agenda y por cada elemento de la agenda quiero agregar una fila
    agenda.map((itemContacto, indice) => dibujarFila(itemContacto, indice + 1));
  } else {
    //todo: dibujar un párrafo que diga que no tenemos contactos para mostrar
    // todo: agregar una imagen de cuando no hay foto de contacto
  }
  // si tengo, tengo qeu dibujar las filas
};

const dibujarFila = (itemContacto, fila) => {
  tbody.innerHTML += `
                  <tr>
                <th scope="row">${fila}</th>
                <td>${itemContacto.nombre}</td>
                <td>${itemContacto.apellido}</td>
                <td>${itemContacto.telefono}</td>
                <td>
                  <img
                    src="${itemContacto.imagen}"
                    alt="${itemContacto.nombre}"
                    class="img-thumbnail img-table"
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-info btn-sm me-2 btn-ver-detalle"
                  >
                    <i class="bi bi-eye"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning btn-sm me-2 btn-editar"
                    onclick="prepararContacto('${itemContacto.id}')"
                  >
                    <i class="bi bi-pencil"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm btn-borrar"
                    onclick="borrarContacto('${itemContacto.id}')"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>`;
};

// al objeto window le guardo una función que es la de borrar contacto, y esto es un método
window.borrarContacto = (id) => {
  Swal.fire({
    title: "Estás seguro de elminar el contacto?",
    text: "No puedes revertir este paso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      // aqui va la lógica para borrar
      // primero tengo que buscar en qué posición está el contacto con el id que quiero borrar
      const indiceContacto = agenda.findIndex((contacto) => contacto.id === id);
      // con el splice borramos el elemento de determinada posición del array
      agenda.splice(indiceContacto, 1);
      // actualizar el localstorage
      guardarLocalstorage();
      // actualizar la tabla
      tbody.children[indiceContacto].remove();
      // todo: actualizar el número de fila del array

      Swal.fire({
        title: "Contacto eliminado",
        text: "El contacto fue eliminado satisfactoriamente.",
        icon: "success",
      });
    }
  });
};

window.prepararContacto = (id) => {
  // todo: modificar el título del formulario
  // Cargar los datos de contacto para que los vea el usuario
  const contactoBuscado = agenda.find((contacto) => contacto.id === id);
  // Mostrar los datos del contacto en el form
  inputNombre.value = contactoBuscado.nombre;
  inputApellido.value = contactoBuscado.apellido;
  inputTelefono.value = contactoBuscado.telefono;
  inputEmail.value = contactoBuscado.email;
  inputDireccion.value = contactoBuscado.direccion;
  inputEmpresa.value = contactoBuscado.empresa;
  inputImagen.value = contactoBuscado.imagen;
  inputNotas.value = contactoBuscado.notas;
  inputPuestoTrabajo.value = contactoBuscado.puestoTrabajo;
  inputEmpresa.value = contactoBuscado.empresa;
  idContacto = id;
  // Cambio la variable que controla el Crear / Editar
  estoyCreando = false;
  // Abrir el modal
  modalFormularioContacto.show();
};

const editarContacto = () => {
  console.log("Aquí tengo que editar");
  // Buscar en qué posición del array está el contacto con ID
  const indiceContacto = agenda.findIndex((contacto) => contacto.id === idContacto)
  // Modificar el contacto
  agenda[indiceContacto].nombre = inputNombre.value;
  agenda[indiceContacto].apellido = inputApellido.value;
  agenda[indiceContacto].telefono = inputTelefono.value;
  agenda[indiceContacto].direccion = inputDireccion.value;
  agenda[indiceContacto].imagen = inputImagen.value;
  agenda[indiceContacto].empresa = inputEmpresa.value;
  agenda[indiceContacto].puestoTrabajo = inputPuestoTrabajo.value;
  agenda[indiceContacto].email = inputEmail.value;
  agenda[indiceContacto].notas = inputNotas.value;
  // Actualizar el localstorage
  guardarLocalstorage()
  // Actualizar fila de la tabla

  // Cerrar el modal
  modalFormularioContacto.hide()
}; 

// todo: mostrar una ventana de sweetalert para indicar que el contacto fue editado correctamente

// manejadores de eventos
btnAgregarContacto.addEventListener("click", () => {
  limpiarFormulario();
  estoyCreando = true;
  modalFormularioContacto.show();
});

formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();
  // Aquí tengo que crear / editar un contacto
  if (estoyCreando) {
    crearContacto();
  } else {
    editarContacto();
  }
});

cargarContactos();
