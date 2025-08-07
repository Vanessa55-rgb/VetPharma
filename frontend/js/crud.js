// frontend/js/crud.js

// Espera a que se cargue el DOM completo
document.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Añadir cliente
  if (e.target.id === "formAdd") {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    const res = await fetch("http://localhost:3000/cliente", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, telefono }),
    });
    const data = await res.json();
    document.getElementById("addMsg").textContent =
      data.message || "Cliente registrado.";
  }

  // Actualizar cliente
  if (e.target.id === "formUpdate") {
    const id = document.getElementById("idUpdate").value;
    const nombre = document.getElementById("nombreUpdate").value;
    const email = document.getElementById("emailUpdate").value;
    const telefono = document.getElementById("telefonoUpdate").value;

    const res = await fetch(`http://localhost:3000/cliente/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, telefono }),
    });
    const data = await res.json();
    document.getElementById("updateMsg").textContent =
      data.message || "Cliente actualizado.";
  }

  // Eliminar cliente
  if (e.target.id === "formDelete") {
    const id = document.getElementById("idDelete").value;
    const res = await fetch(`http://localhost:3000/cliente/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    document.getElementById("deleteMsg").textContent =
      data.message || "Cliente eliminado.";
  }
});

// Mostrar clientes
document.addEventListener("click", async (e) => {
  if (e.target.id === "btnCargarClientes") {
    const res = await fetch("http://localhost:3000/cliente");
    const clientes = await res.json();

    const lista = document.getElementById("listaClientes");
    lista.innerHTML = "";
    clientes.forEach((c) => {
      const li = document.createElement("li");
      li.textContent = `ID: ${c.clienteID} | ${c.nombre} | ${c.email} | ${c.telefono}`;
      lista.appendChild(li);
    });
  }
});
