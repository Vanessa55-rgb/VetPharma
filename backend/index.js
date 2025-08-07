document.getElementById("formCliente").addEventListener("submit", async (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;

  const res = await fetch("http://localhost:3000/cliente", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, email, telefono }),
  });
  //crear feature para que se puedan visualizar los usuarios registrados
  const data = await res.json();
  alert(data.message || "Cliente registrado");
  cargarClientes(); // actualiza la lista luego de registrar
});

async function cargarClientes() {
  const res = await fetch("http://localhost:3000/cliente");
  const clientes = await res.json();

  const lista = document.getElementById("listaClientes");
  lista.innerHTML = ""; // limpia antes de actualizar
  clientes.forEach((cliente) => {
    const li = document.createElement("li");
    li.textContent = `${cliente.nombre} | ${cliente.email} | ${cliente.telefono}`;
    lista.appendChild(li);
  });
}
