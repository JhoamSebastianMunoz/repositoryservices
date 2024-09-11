CREATE DATABASE sena;
USE sena;

CREATE TABLE directores_de_grupo(
id_instructor INTEGER AUTO_INCREMENT PRIMARY KEY,
cc VARCHAR(12) NOT NULL ,
primer_nombre VARCHAR(30) NOT NULL,
segundo_nombre VARCHAR(30) NULL,
primer_apellido VARCHAR(30) NOT NULL,
segundo_apellido VARCHAR(30) NULL,
email VARCHAR(50) NOT NULL,
contraseña VARCHAR(100) NOT NULL
);

CREATE TABLE aprendices(
id_aprendiz INTEGER AUTO_INCREMENT PRIMARY KEY,
cc VARCHAR(12) NOT NULL ,
primer_nombre VARCHAR(30) NOT NULL,
segundo_nombre VARCHAR(30) NULL,
primer_apellido VARCHAR(30) NOT NULL,
segundo_apellido VARCHAR(30) NULL,
telefono INTEGER NULL,
ficha INTEGER NOT NULL,
id_instructor INTEGER,
FOREIGN KEY (id_instructor) REFERENCES directores_de_grupo(id_instructor)
);
select * from directores_de_grupo;

