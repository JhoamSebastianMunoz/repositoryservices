# 🎓 SENA Management API

API REST construida con **Node.js**, **TypeScript** y **Express** para gestionar instructores (directores de grupo) y aprendices del SENA, con autenticación basada en JWT y persistencia en MySQL.

## Tabla de contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Stack tecnológico](#stack-tecnológico)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Base de datos](#base-de-datos)
- [Ejecución](#ejecución)
- [Endpoints de la API](#endpoints-de-la-api)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Seguridad](#seguridad)
- [Notas importantes](#notas-importantes)

## Descripción

`sena-management-api` expone un conjunto de endpoints para el registro, consulta, actualización y eliminación de instructores y aprendices, incluyendo autenticación de usuarios con emisión de tokens JWT. El proyecto está desarrollado en TypeScript, compilado a CommonJS y conectado a MySQL mediante `mysql2`.

## Características

- Autenticación de instructores con inicio de sesión por correo y contraseña.
- Emisión de tokens JWT con expiración configurable.
- CRUD completo para instructores (directores de grupo) y aprendices.
- Protección de rutas mediante middleware de verificación de token.
- Validación de entradas con `express-validator`.
- Hash de contraseñas con `bcryptjs`.
- Conexión a base de datos con pool de conexiones (`mysql2`).

## Stack tecnológico

| Capa | Tecnología |
| :--- | :--- |
| Runtime | Node.js v20 o superior |
| Lenguaje | TypeScript 5 |
| Framework HTTP | Express 4 |
| Base de datos | MySQL / MariaDB (`mysql2`) |
| Autenticación | JSON Web Token (`jsonwebtoken`) |
| Hash de contraseñas | `bcryptjs` |
| Validación | `express-validator` |
| Configuración | `dotenv` |

## Requisitos previos

- [Node.js](https://nodejs.org/) v20 o superior
- [MySQL](https://www.mysql.com/) o MariaDB servidor
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/JhoamSebastianMunoz/sena-management-api.git
   cd sena-management-api
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Crear el archivo de variables de entorno `.env` en la raíz del proyecto (ver [Variables de entorno](#variables-de-entorno)).

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido, ajustando los valores a tu entorno:

```bash
DB_HOST=localhost
DB_DATABASE=sena
DB_USERNAME=usuario
DB_PASSWORD=contraseña
KEY_TOKEN=secreto_jwt
PORT=10101
```

| Variable | Descripción | Obligatoria | Ejemplo |
| :--- | :--- | :---: | :--- |
| `DB_HOST` | Host del servidor MySQL | Sí | `localhost` |
| `DB_DATABASE` | Nombre de la base de datos | Sí | `sena` |
| `DB_USERNAME` | Usuario de MySQL | Sí | `root` |
| `DB_PASSWORD` | Contraseña de MySQL | Sí | `mipassword` |
| `KEY_TOKEN` | Secreto para firmar y verificar los tokens JWT | Sí | `cualquier-secreto` |
| `PORT` | Puerto del servidor | No | `10101` (por defecto) |

## Base de datos

Crea la base de datos `sena` y las tablas `directores_de_grupo` e `aprendices` ejecutando el script incluido en la raíz del proyecto:

```bash
mysql -u usuario -p < sena.sql
```

> [!IMPORTANT]
> Verifica que la base de datos exista y que el usuario configurado en `.env` tenga permisos sobre ella antes de iniciar el servidor.

## Ejecución

1. Compilar el código TypeScript en modo observador:

   ```bash
   npx tsc -w
   ```

2. En otra terminal, iniciar el servidor compilado:

   ```bash
   node ./dist/app
   ```

Salida esperada:

```text
Servidor ejecutándose en el puerto:  10101
```

## Endpoints de la API

Todas las rutas se sirven sobre la raíz del servidor (`http://localhost:10101`). Las rutas marcadas con 🔒 requieren el header `Authorization: Bearer <token>`.

| Método | Ruta | Descripción | Protegida |
| :--- | :--- | :--- | :---: |
| `POST` | `/register-instructor` | Registra un instructor / director de grupo | |
| `POST` | `/auth` | Autenticación (login) y emisión de token JWT | |
| `GET` | `/profile` | Perfil del usuario autenticado | 🔒 |
| `GET` | `/get-instructor` | Obtiene un instructor por cédula | 🔒 |
| `DELETE` | `/delete-instructor` | Elimina un instructor por cédula | 🔒 |
| `PUT` | `/update-instructor` | Actualiza los datos de un instructor | 🔒 |
| `POST` | `/register-aprendiz` | Registra un aprendiz | 🔒 |
| `GET` | `/get-aprendiz` | Obtiene los aprendices por cédula y ficha | 🔒 |
| `DELETE` | `/delete-aprendiz` | Elimina un aprendiz | 🔒 |
| `PUT` | `/update-aprendiz` | Actualiza los datos de un aprendiz | 🔒 |

> [!TIP]
> El middleware `VerifyToken` valida el header `Authorization: Bearer <token>` y coloca el `id` decodificado del instructor en `req.body` antes de continuar con la ruta.

## Estructura del proyecto

```text
sena-management-api/
├── app.ts                 # Punto de entrada y configuración de Express
├── sena.sql               # Script de creación de base de datos y tablas
├── tsconfig.json          # Configuración de TypeScript
├── config/                # Conexión a base de datos (config-db.ts)
├── controllers/           # Controladores de rutas
├── Dto/                   # Objetos de transferencia de datos
├── Helpers/               # Utilidades (hash, token JWT)
├── middleware/            # Middlewares de validación y autenticación
├── repositories/          # Acceso a datos (consultas SQL)
├── routes/                # Definición de rutas Express
└── services/              # Lógica de negocio
```

## Seguridad

> [!WARNING]
> El archivo `.env` contiene credenciales y secretos. Nunca lo subas al repositorio; ya está incluido en `.gitignore`.

> [!NOTE]
> Las contraseñas se almacenan hasheadas con `bcrypt`. El proyecto no incluye scripts de prueba configurados (`npm test` no está definido).
