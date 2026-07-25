# GitHub API

API simple en NestJS que consulta datos públicos de la API de GitHub (usuario, repos, detalle de repo y commits). No usa base de datos.

## Ejecutar localmente

```bash
pnpm install
pnpm run start:dev
```

La app queda disponible en `http://localhost:3000`, con la documentación Swagger en `http://localhost:3000/docs`.

## Ejecutar con Docker

```bash
docker compose up -d --build
```

Esto construye la imagen a partir del `Dockerfile` y levanta el contenedor en el puerto 3000.

## Producción

En producción, el proyecto se despliega en un VPS a partir de la imagen de Docker (`Dockerfile`), no en un servicio serverless ni PaaS.
