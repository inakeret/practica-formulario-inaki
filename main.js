/**
 * Espera a que el DOM esté completamente cargado antes de ejecutar el código.
 * Se seleccionan ambos formularios y se les añade un evento "submit".
 */
document.addEventListener("DOMContentLoaded", () => {
  const formRegistro = document.querySelector("#formulario-registro");
  const formRobo = document.querySelector("#formulario-robo");

  formRegistro.addEventListener("submit", (ev) =>{
    ev.preventDefault(); // Evita el envío real del formulario
    //validarFormulario(ev, "registro");
    console.log(ev.target.elements)
  });

  formRobo.addEventListener("submit", (ev) => {
    ev.preventDefault();
    validarFormulario(ev.target.elements, "robo")
  });
  
  
});

/**
 * Función principal que valida los datos de ambos formularios.
 * Según el tipo de formulario ("registro" o "robo"), llama a las funciones específicas.
 *
 * @param {Event} ev - Evento de envío del formulario.
 * @param {string} tipo - Tipo de formulario ("registro" o "robo").
 */
const validarFormulario = (form, tipo) => {
  

  let valido = true; // Indicador general de validación

  /** ---------- FORMULARIO DE REGISTRO ---------- */
  if (tipo === "registro") {
    const nombre = form['nombre'].value.trim();
    const apellidos = form['apellidos'].value.trim();
    const edad = form['edad'].value.trim();
    const email = form['email'].value.trim();

    if (!validarNombre(nombre)) valido = false;
    if (!validarApellidos(apellidos)) valido = false;
    if (!validarEdad(edad)) valido = false;
    if (!validarEmail(email)) valido = false;
  }

  /* ---------- FORMULARIO DE ROBO DE BICICLETA ---------- */
  if (tipo === "robo") {
    const dia = form['dia'].value.trim();
    const hora = form['hora'].value.trim();
    const precio = form['precio'].value.trim()
    const tipoBici = form['tipo'].value.trim();

    if (!validarDia(dia)) valido = false;
    if (!validarHora(hora)) valido = false;
    if(!validarPrecio(precio))valido = false
    if (!validarTipo(tipoBici)) valido = false;
  }

  /* ---------- RESULTADO FINAL ---------- */
  if (valido) {
    alert(`Formulario de ${tipo} enviado correctamente.`);
  } else {
    alert(`Revisa los datos del formulario de ${tipo}.`);
  }
};

/**
 * Comprueba que el nombre tenga al menos 2 caracteres.
 * @param {string} nombre - Valor introducido en el campo nombre.
 * @returns {boolean} true si es válido, false si no.
 */
const validarNombre = (nombre) => {
  if (nombre.length < 2) {
    alert("El nombre debe tener al menos 2 caracteres.");
    return false;
  }
  return true;
};

/**
 * Comprueba que los apellidos tengan al menos 2 caracteres.
 * @param {string} apellidos - Valor introducido en el campo apellidos.
 * @returns {boolean} true si es válido, false si no.
 */
const validarApellidos = (apellidos) => {
  if (apellidos.length < 2) {
    alert("Los apellidos deben tener al menos 2 caracteres.");
    return false;
  }
  return true;
};

/**
 * Valida que la edad sea un número entre 0 y 120.
 * @param {string} edad - Valor introducido en el campo edad.
 * @returns {boolean} true si es válido, false si no.
 */
const validarEdad = (edad) => {
  const num = parseInt(edad);
  if (isNaN(num) || num < 0 || num > 120) {
    alert("La edad debe estar entre 0 y 120.");
    return false;
  }
  return true;
};

/**
 * Comprueba que el correo electrónico tenga un formato válido.
 * @param {string} email - Valor introducido en el campo email.
 * @returns {boolean} true si es válido, false si no.
 */
const validarEmail = (email) => {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!patron.test(email)) {
    alert("El correo electrónico no es válido.");
    return false;
  }
  return true;
};

/**
 * Comprueba que se haya seleccionado un día.
 * @param {string} dia - Valor del campo día.
 * @returns {boolean} true si es válido, false si no.
 */
const validarDia = (dia) => {
  if (!dia) {
    alert("Debes seleccionar un día.");
    return false;
  }
  return true;
};

/**
 * Comprueba que se haya introducido una hora.
 * @param {string} hora - Valor del campo hora.
 * @returns {boolean} true si es válido, false si no.
 */
const validarHora = (hora) => {
  if (!hora) {
    alert("Debes indicar una hora.");
    return false;
  }
  return true;
};

/**
 * Comprueba que el rango del precio sea válido
 * @param {number} precio precio del producto 
 * @returns {boolean}
 */
const validarPrecio = (precio) => {
  if(precio<0 ||precio> 60000){
    alert("Debes indicar un precio valido")
    return false
  }else return true
}

/**
 * Comprueba que se haya seleccionado un tipo de bicicleta.
 * @param {string} tipo - Valor del campo tipo.
 * @returns {boolean} true si es válido, false si no.
 */
const validarTipo = (tipo) => {
  if (tipo === "") {
    alert("Debes seleccionar el tipo de bicicleta.");
    return false;
  }
  return true;
};
