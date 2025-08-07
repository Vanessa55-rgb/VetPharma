#  VETPHARMA - SPA para Gestión de Clientes

Este proyecto es un sistema de gestión de clientes para una veterinaria, llamado **VETPHARMA**, implementado como **SPA (Single Page Application)**. Permite a los usuarios autenticarse (login) y realizar operaciones CRUD (crear, leer, actualizar y eliminar) sobre los clientes, utilizando un backend en Node.js y una base de datos MySQL.

La SPA funciona con navegación basada en hashes (`#login`, `#add`, `#update`, etc.), cargando dinámicamente las vistas desde JavaScript puro, sin recargar la página.

---

##  Características principales

✅ Login validando contra la base de datos (tabla `cliente`).  
✅ Añadir, actualizar, eliminar y mostrar clientes desde la SPA.  
✅ Navegación sin recargas usando JavaScript y rutas `#hash`.  
✅ Backend en Node.js con Express y MySQL.  
✅ Base de datos MySQL normalizada con tablas `cliente`, `medicamento`, `factura` y `detalle_factura`.

---

##  Estructura del proyecto

```plaintext
VETPHARMA/
├── backend/                     
│   ├── app.js
│   └── index.js (opcional)
│
├── csv/
│   └── db(Sheet1).csv
│
├── db/
│   └── VETPHARMA.sql
│
├── frontend/
│   ├── index.html
│   └── js/
│       ├── spa.js
│       ├── login.js
│       ├── crud.js
│       └── templates.js
│
├── node_modules/
├── package.json
├── package-lock.json
└── README.md
```

##  Requisitos previos

- Node.js instalado.
- MySQL instalado y en ejecución.
- Base de datos VETPHARMA creada (usando VETPHARMA.sql).

##  Instrucciones para correr el proyecto
 
1️⃣ Clona el repositorio o copia el proyecto a tu máquina local.

2️⃣ Instala las dependencias:

```bash
npm install
```

3️⃣ Asegúrate de que el servidor MySQL esté activo y que las credenciales en backend/app.js coincidan con tu configuración local:

```js
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'TU_PASSWORD_AQUI',
    database: 'VETPHARMA'
});
```

4️⃣ Crea la base de datos ejecutando el script SQL:

```bash
mysql -u root -p < db/VETPHARMA.sql
```

5️⃣ Inicia el servidor backend:
```bash
node backend/app.js
```

El servidor quedará disponible en http://localhost:3000.

6️⃣ Abre frontend/index.html en tu navegador (usa extensión como Live Server en VSCode o un servidor HTTP local para evitar problemas de CORS).

7️⃣ Navega entre las vistas usando las rutas:

- #login – iniciar sesión.
- #add – añadir un cliente.
- #update – actualizar un cliente existente.
- #delete – eliminar un cliente.
- #view – listar todos los clientes.