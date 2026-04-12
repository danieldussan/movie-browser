# Movie Browser API

API REST construida con **Spring Boot 4** que expone datos de películas y series consumiendo la API de IMDB, junto con un módulo de gestión de usuarios respaldado por **MariaDB**.

## Arquitectura

```
Cliente → Nginx :80 → /api/** → Spring Boot :8080 → MariaDB :3306
```

## Requisitos previos

- [Docker](https://docs.docker.com/get-docker/) y [Docker Compose](https://docs.docker.com/compose/install/)

## Variables de entorno

El proyecto usa valores por defecto listos para desarrollo. Si quieres sobreescribirlos crea un archivo `.env` en la raíz:

```env
DB_URL=jdbc:mariadb://db:3306/simple_users_db
DB_USERNAME=app_user
DB_PASSWORD=app_password
IMDB_API_URL=https://tu-api-imdb.com
```

## Levantar el proyecto

```bash
# Construir imágenes y levantar todos los servicios
docker compose up --build

# En segundo plano
docker compose up --build -d
```

Servicios que se levantan:

| Servicio  | Puerto host | Descripción              |
|-----------|-------------|--------------------------|
| `nginx`   | `80`        | Reverse proxy            |
| `backend` | —           | Spring Boot (interno)    |
| `db`      | `3306`      | MariaDB                  |

> El backend **no** se expone directamente; todo el tráfico entra por Nginx.

## Endpoints

Base URL: `http://localhost/api/v1`

### Usuarios

| Método   | Ruta           | Descripción             | Estado HTTP      |
|----------|----------------|-------------------------|------------------|
| `POST`   | `/users`       | Crear usuario           | 201 Created      |
| `GET`    | `/users`       | Listar usuarios         | 200 OK           |
| `GET`    | `/users/{id}`  | Obtener usuario por ID  | 200 / 404        |
| `PUT`    | `/users/{id}`  | Actualizar usuario      | 200 / 404        |
| `DELETE` | `/users/{id}`  | Eliminar usuario        | 204 / 404        |

### Documentación interactiva (Swagger UI)

```
http://localhost/api/swagger-ui.html
```

## Detener los servicios

```bash
# Detener sin borrar volúmenes
docker compose down

# Detener y borrar la base de datos
docker compose down -v
```

## Estructura del proyecto

```
proyecto-final-servidores/
├── db/
│   ├── Dockerfile          # Imagen MariaDB con init.sql
│   └── init.sql            # Schema de la base de datos
├── movie-browser/
│   ├── Dockerfile          # Build multi-stage (Java 25)
│   ├── pom.xml
│   └── src/
│       └── main/java/.../
│           ├── movies/     # Módulo de películas y series (IMDB)
│           ├── users/      # CRUD de usuarios (JPA + MariaDB)
│           └── security/   # Configuración de Spring Security
├── nginx/
│   └── nginx.conf          # Reverse proxy → /api/** al backend
├── docker-compose.yaml
└── README.md
```
