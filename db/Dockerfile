# Usamos imagen oficial de MariaDB
FROM mariadb:11.3

# Variables de entorno (puedes cambiarlas)
ENV MARIADB_ROOT_PASSWORD=root
ENV MARIADB_DATABASE=simple_users_db
ENV MARIADB_USER=app_user
ENV MARIADB_PASSWORD=app_password

# Copiar el script SQL al directorio de inicialización
# Todo lo que esté en /docker-entrypoint-initdb.d se ejecuta automáticamente
COPY init.sql /docker-entrypoint-initdb.d/

# Exponer puerto
EXPOSE 3306