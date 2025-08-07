//para conectar con la base de datos de mysql
//backend de app.js
const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()) //para leer JSON desde el front o el POSTMAN

const connection = mysql.createConnection({
    //datos para la conexion de la base de datos
    host: 'localhost',
    user: 'root',
    password: '5423',
    database: 'VETPHARMA'
});

//metodo de verificacion de la conexion de la DB
connection.connect((error) => {
    if (error) throw error;
    console.log("Conexion establecida con exito");
});

//query para iniciar la conexion y saber si funciona 
//seleccion de datos de la tabla cliente
/*
connection.query('SELECT * FROM cliente;', (error, response) => {
    if (error) throw error;
    console.log("Los datos solicitados son:");
    console.log(response);
});
*/

//GET consultar todos los clientes
app.get('/cliente', (request, response) => {
    connection.query("SELECT * FROM cliente", (error, results) => {
        if (error) return response.status(500).send(error);
        response.json(results);
    });
});

//POST insertar un nuevo cliente
app.post('/cliente', (request, response) => {
    const { nombre, email, telefono } = request.body;
    const sql = 'INSERT INTO cliente (nombre,email,telefono) VALUES (?, ?, ?)'; // ? utilizado como placeholder para parametrizar la consulta
    connection.query(sql, [nombre, email, telefono], (error, result) => {
        if (error) return response.status(500).send(error);
        response.status(201).send({ message: 'cliente insertado', id: result.insertId });
    });
});

//PUT actualizar un cliente por ID
app.put('/cliente/:id', (request, response) => {
    const { id } = request.params;
    const { nombre, email, telefono } = request.body;

    const sql = 'UPDATE cliente SET nombre = ?, email = ?, telefono = ? WHERE clienteID = ?';
    connection.query(sql, [nombre, email, telefono, id], (error, result) => {
        if (error) return response.status(500).send(error);
        response.send({ message: 'Cliente actualizado', affectedRows: result.affectedRows });
    });
});

//DELETE eliminar un cliente por ID
app.delete('/cliente/:id', (request, response) => {
    const { id } = request.params;

    const sql = 'DELETE FROM cliente WHERE clienteID = ?';
    connection.query(sql, [id], (error, result) => {
        if (error) return response.status(500).send(error);
        response.send({ message: 'Cliente eliminado', affectedRows: result.affectedRows });
    });
});

//inicio del servidor
app.listen(port, () => {
    console.log(`servidor ejecutandose en http://localhost:${port}`);
});
