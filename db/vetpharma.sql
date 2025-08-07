CREATE DATABASE VETPHARMA;
-- Cliente
CREATE TABLE cliente (
  clienteID INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100)UNIQUE NOT NULL,
  telefono VARCHAR(20) UNIQUE NOT NULL
);

-- Medicamento
CREATE TABLE medicamento (
  medicamentoID INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50)UNIQUE NOT NULL,
  categoria VARCHAR(20),
  precio_unitario INT NOT NULL
);

-- Factura
CREATE TABLE factura (
  facturaID INT AUTO_INCREMENT PRIMARY KEY,
  numero_factura TEXT,
  fecha DATE,
  estado ENUM('ACTIVO','INACTIVO'),
  metodo_pago ENUM('TARJETA DEBITO','TARJETA CREDITO','TRANSFERENCIA','EFECTIVO'),
  clienteID INT,
  FOREIGN KEY (clienteID) REFERENCES cliente(clienteID)
);

-- DetalleFactura
CREATE TABLE detalle_factura (
  detalleID INT AUTO_INCREMENT PRIMARY KEY,
  facturaID INT NOT NULL,
  medicamentoID INT NOT NULL,
  cantidad INT,
  FOREIGN KEY (facturaID) REFERENCES factura(facturaID),
  FOREIGN KEY (medicamentoID) REFERENCES medicamento(medicamentoID)
);

-- insertar clientes
INSERT INTO cliente (nombre, email, telefono) 
VALUES
('Laura Gómez', 'laura@gmail.com', '3012223344'),
('Ana Torres', 'ana@gmail.com', '3001112233'),
('Juan Rojas', 'juanr@gmail.com', '3109988776');
SELECT * FROM cliente;

-- insertar medicamentos
INSERT INTO medicamento (nombre, categoria, precio_unitario) VALUES
('Suplemento Vitamínico', 'Suplemento', 40),
('Antiparasitario Oral', 'Medicamento', 55),
('Pomada Cicatrizante', 'Tópico', 65),
('Antibiótico Canino', 'Medicamento', 90);

-- insertar facturas
INSERT INTO factura (numero_factura, fecha, estado, metodo_pago, clienteID) VALUES
('F001', '2025-07-11', 'ACTIVO', 'EFECTIVO', 1),
('F001', '2025-07-14', 'ACTIVO', 'TARJETA DEBITO', 1),
('F001', '2025-07-17', 'ACTIVO', 'TRANSFERENCIA', 2),
('F002', '2025-07-26', 'ACTIVO', 'TARJETA DEBITO', 1),
('F002', '2025-07-01', 'ACTIVO', 'TRANSFERENCIA', 3),
('F002', '2025-07-04', 'INACTIVO', 'TARJETA CREDITO', 1),
('F003', '2025-07-05', 'INACTIVO', 'EFECTIVO', 2),
('F003', '2025-07-02', 'ACTIVO', 'EFECTIVO', 2),
('F003', '2025-07-10', 'INACTIVO', 'TARJETA CREDITO', 1),
('F003', '2025-07-03', 'ACTIVO', 'EFECTIVO', 1),
('F004', '2025-07-05', 'ACTIVO', 'TARJETA CREDITO', 2),
('F004', '2025-07-07', 'ACTIVO', 'TARJETA CREDITO', 3),
('F004', '2025-07-31', 'ACTIVO', 'TARJETA CREDITO', 1),
('F004', '2025-07-08', 'INACTIVO', 'TARJETA CREDITO', 1),
('F004', '2025-07-21', 'INACTIVO', 'EFECTIVO', 2);

-- Insertar detalle_factura
-- Detalles F001
INSERT INTO detalle_factura (facturaID, medicamentoID, cantidad) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),

-- Detalles F002
(4, 1, 4),
(5, 4, 3),
(6, 3, 2),

-- Detalles F003
(7, 2, 2),
(8, 2, 2),
(9, 2, 1),
(10, 3, 2),

-- Detalles F004
(11, 1, 3),
(12, 2, 4),
(13, 1, 5),
(14, 1, 1),
(15, 4, 1);

SELECT * FROM cliente;







