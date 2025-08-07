// frontend/js/spa.js

import { renderLogin, renderAdd, renderUpdate, renderDelete, renderView } from "./templates.js";
import { validarSesion } from "./login.js";

const app = document.getElementById("app");

function cargarRuta() {
  const ruta = window.location.hash || "#login";

  // Rutas protegidas excepto #login
  if (ruta !== "#login" && !validarSesion()) {
    window.location.hash = "#login";
    return;
  }

  switch (ruta) {
    case "#login":
      app.innerHTML = renderLogin();
      break;
    case "#add":
      app.innerHTML = renderAdd();
      break;
    case "#update":
      app.innerHTML = renderUpdate();
      break;
    case "#delete":
      app.innerHTML = renderDelete();
      break;
    case "#view":
      app.innerHTML = renderView();
      break;
    default:
      app.innerHTML = "<h2>Página no encontrada</h2>";
  }
}

function mostrarUsuario() {
  const contenedor = document.getElementById("usuarioActivo");
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (usuario) {
    contenedor.innerHTML = `
      👤 ${usuario.nombre}
      <button id="btnCerrarSesion" type="button" style="margin-left: 10px;">Cerrar sesión</button>
    `;
  } else {
    contenedor.innerHTML = "";
  }
}

document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "btnCerrarSesion") {
    localStorage.removeItem("usuario");
    window.location.hash = "#login";
  }
});


window.addEventListener("hashchange", () => {
  cargarRuta();
  mostrarUsuario();
});

window.addEventListener("DOMContentLoaded", () => {
  cargarRuta();
  mostrarUsuario();
});


// Detectar cambios en el hash
window.addEventListener("hashchange", cargarRuta);

// Cargar al inicio
window.addEventListener("DOMContentLoaded", cargarRuta);
