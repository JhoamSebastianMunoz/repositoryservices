# 🎓 repositoryservices

API REST construida con **Node.js**, **TypeScript** y **Express** para gestionar instructores (directores de grupo) y aprendices del SENA, con autenticación basada en JWT y base de datos MySQL.

## Tabla de contenidos

- [Sobre el proyecto](#sobre-el-proyecto)
- [Endpoints API](#endpoints-api)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Base de datos](#base-de-datos)
- [Variables de entorno](#variables-de-entorno)
- [Ejecución](#ejecución)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Notas importantes](#notas-importantes)

## Sobre el proyecto

`repositoryservices` expone un conjunto de endpoints para el registro, consulta, actualización y eliminación de instructores y aprendices, incluyendo autenticación de usuarios con emisión de tokens JWT. Está desarrollado en TypeScript, compilado a CommonJS y conectado a MySQL mediante `mysql2`.

**Tecnologías principales:**

- Node.js v20 o superior
- TypeScript 5
- Express 4
- MySQL / MariaDB (`mysql2`)
- JSON Web Token (`jsonwebtoken`)
- bcryptjs (hash de contraseñas)
- express-validator (validación de entradas)
- dotenv (variables de entorno)

## Endpoints API

| Método | Ruta | Descripción |
| :--- | :--- | :--- |
| `POST` | `/register-instructor` | Registra un instructor / director de grupo |
| `POST` | `/auth` | Autenticación (login) y emisión de token JWT |
| `GET` | `/profile` | Perfil del usuario autenticado (requiere token) |
| `GET` | `/get-instructor` | Obtiene un instructor por cédula |
| `DELETE` | `/delete-instructor` | Elimina un instructor por cédula |
| `PUT` | `/update-instructor` | Actualiza los datos de un instructor |
| `POST` | `/register-aprendiz` | Registra un aprendiz |
| `GET` | `/get-aprendiz` | Obtiene los aprendices |
| `DELETE` | `/delete-aprendiz` | Elimina un aprendiz |
| `PUT` | `/update-aprendiz` | Actualiza los datos de un aprendiz |

El servidor escucha por defecto en el puerto `10101` (configurable con `PORT`).

> [!TIP]
> El endpoint `/profile` está protegido mediante el middleware `VerifyToken`, que valida el header `Authorization: Bearer <token>`.

## Requisitos previos

- [Node.js](https://nodejs.org/) v20 o superior
- [MySQL](https://www.mysql.com/) o MariaDB servidor
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd repositoryservices
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Crear el archivo de variables de entorno `.env` en la raíz del proyecto con el contenido siguiente (ajustar los valores al entorno):

   ```bash
   DB_HOST=localhost
   DB_DATABASE=sena
   DB_USERNAME=usuario
   DB_PASSWORD=contraseña
   KEY_TOKEN=secreto_jwt
   PORT=10101
   ```

## Base de datos

Crear la base de datos `sena` y las tablas `directores_de_grupo` e `aprendices` ejecutando el script incluido en la raíz del proyecto:

```bash
mysql -u usuario -p < sena.sql
```

> [!IMPORTANT]
> Asegúrate de que la base de datos exista y de que el usuario configurado en `.env` tenga permisos sobre ella antes de iniciar el servidor.

## Variables de entorno

| Variable | Descripción | Obligatoria | Ejemplo |
| :--- | :--- | :---: | :--- |
| `DB_HOST` | Host del servidor MySQL | Sí | `localhost` |
| `DB_DATABASE` | Nombre de la base de datos | Sí | `sena` |
| `DB_USERNAME` | Usuario de MySQL | Sí | `root` |
| `DB_PASSWORD` | Contraseña de MySQL | Sí | `mipassword` |
| `KEY_TOKEN` | Secreto para firmar los tokens JWT | Sí | `cualquier-secreto` |
| `PORT` | Puerto del servidor | No | `10101` (por defecto) |

## Ejecución

Compilar el código TypeScript (modo observador):

```bash
npx tsc -w
```

En otra terminal, iniciar el servidor compilado:

```bash
node ./dist/app
```

Salida esperada:

```text
Servidor ejecutándose en el puerto:  10101
```

## Estructura del proyecto

```text
repositoryservices/
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

## Notas importantes

> [!WARNING]
> El archivo `.env` contiene credenciales y secretos. Nunca lo subas al repositorio; está incluido en `.gitignore`.

> [!NOTE]
> Las contraseñas se almacenan hasheadas con bcrypt. El proyecto no incluye scripts de prueba configurados (`npm test` no está definido).
