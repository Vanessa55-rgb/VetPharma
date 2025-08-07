// frontend/js/login.js

// Verifica si hay sesión iniciada
export function validarSesion() {
  return !!localStorage.getItem("usuario");
}

// Escucha el formulario de login cuando se renderiza
document.addEventListener("submit", async (e) => {
  if (e.target && e.target.id === "formLogin") {
    e.preventDefault();
    const nombre = document.getElementById("loginNombre").value;
    const email = document.getElementById("loginEmail").value;

    try {
      const res = await fetch("http://localhost:3000/cliente");
      const clientes = await res.json();

      const encontrado = clientes.find(
        (c) => c.nombre === nombre && c.email === email
      );

      if (encontrado) {
        localStorage.setItem("usuario", JSON.stringify(encontrado));
        window.location.hash = "#view"; // Redirigir a vista de clientes
      } else {
        document.getElementById("loginError").textContent =
          "Usuario no encontrado.";
      }
    } catch (err) {
      document.getElementById("loginError").textContent =
        "Error de conexión con el servidor.";
    }
  }
});
