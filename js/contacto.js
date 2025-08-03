class Contacto {
  #id;
  #nombre;
  #apellido;
  #telefono;
  #email;
  #imagen;
  #empresa;
  #puestoTrabajo;
  #direccion;
  #notas;

  constructor(
    id,
    nombre,
    apellido,
    telefono,
    email,
    imagen,
    empresa,
    puestoTrabajo,
    direccion,
    notas
  ) {
    this.#id = id;
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#telefono = telefono;
    this.#email = email;
    this.#imagen = imagen;
    this.#empresa = empresa;
    this.#puestoTrabajo = puestoTrabajo;
    this.#direccion = direccion;
    this.#notas = notas;
  }

  // Getters
  get getid() {
    return this.#id;
  }
  get getnombre() {
    return this.#nombre;
  }
  get getapellido() {
    return this.#apellido;
  }
  get gettelefono() {
    return this.#telefono;
  }
  get getemail() {
    return this.#email;
  }
  get getimagen() {
    return this.#imagen;
  }
  get getempresa() {
    return this.#empresa;
  }
  get getpuestoTrabajo() {
    return this.#puestoTrabajo;
  }
  get getdireccion() {
    return this.#direccion;
  }
  get getnotas() {
    return this.#notas;
  }
  // Setters
  set setid(nuevoId) {
    this.#id = nuevoId;
  }
  set setnombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  set setapellido(nuevoApellido) {
    this.#apellido = nuevoApellido;
  }
  set settelefono(nuevoTelefono) {
    this.#telefono = nuevoTelefono;
  }
  set setemail(nuevoEmail) {
    this.#email = nuevoEmail;
  }
  set setimagen(nuevaImagen) {
    this.#imagen = nuevaImagen;
  }
  set setempresa(nuevaEmpresa) {
    this.#empresa = nuevaEmpresa;
  }
  set setpuestoTrabajo(nuevoPuestoTrabajo) {
    this.#puestoTrabajo = nuevoPuestoTrabajo;
  }
  set setdireccion(nuevaDireccion) {
    this.#direccion = nuevaDireccion;
  }
  set setnotas(nuevasNotas) {
    this.#notas = nuevasNotas;
  }

  // Método para almacenar el objeto en el localstorage/sessionsstorage
  // El localstorage guarda objeto plano, no sabe guardar métodos, o sea que los getters y setters no se van a almacenar
  // Necesito un método que me sirva para leer propiedades privadas: toJSON(){}
  toJSON() {
    return {
        // notación literal:
      id: this.getid, // === propiedad = valor === id: this.#id
      nombre: this.getnombre,
      apellido: this.getapellido,
      telefono: this.gettelefono,
      email: this.getemail,
      notas: this.getnotas,
      imagen: this.getimagen,
      empresa: this.getempresa,
      puestoTrabajo: this.getpuestoTrabajo,
      direccion: this.getdireccion,
    };
  }
}
