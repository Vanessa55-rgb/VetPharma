// frontend/js/templates.js

export function renderLogin() {
  return `
    <h2>Iniciar Sesión</h2>
    <form id="formLogin">
      <input type="text" id="loginNombre" placeholder="Nombre" required />
      <input type="email" id="loginEmail" placeholder="Email" required />
      <button type="submit">Ingresar</button>
    </form>
    <p id="loginError" style="color:red;"></p>
  `;
}

export function renderAdd() {
  return `
    <h2>Añadir Cliente</h2>
    <form id="formAdd">
      <input type="text" id="nombre" placeholder="Nombre" required />
      <input type="email" id="email" placeholder="Email" required />
      <input type="text" id="telefono" placeholder="Teléfono" required />
      <button type="submit">Registrar</button>
    </form>
    <p id="addMsg"></p>
  `;
}

export function renderUpdate() {
  return `
    <h2>Actualizar Cliente</h2>
    <form id="formUpdate">
      <input type="text" id="idUpdate" placeholder="ID del Cliente" required />
      <input type="text" id="nombreUpdate" placeholder="Nuevo Nombre" />
      <input type="email" id="emailUpdate" placeholder="Nuevo Email" />
      <input type="text" id="telefonoUpdate" placeholder="Nuevo Teléfono" />
      <button type="submit">Actualizar</button>
    </form>
    <p id="updateMsg"></p>
  `;
}

export function renderDelete() {
  return `
    <h2>Eliminar Cliente</h2>
    <form id="formDelete">
      <input type="text" id="idDelete" placeholder="ID del Cliente a eliminar" required />
      <button type="submit">Eliminar</button>
    </form>
    <p id="deleteMsg"></p>
  `;
}

export function renderView() {
  return `
    <h2>Clientes Registrados</h2>
    <button id="btnCargarClientes">Cargar Clientes</button>
    <ul id="listaClientes"></ul>
  `;
}
