# De La Luna Industria

Base corporativa de la aplicación web de De La Luna Industria, correspondiente a la **Fase 1**.

El proyecto utiliza Next.js con App Router, TypeScript y Tailwind CSS. La aplicación prioriza Server Components y está preparada para alojar un catálogo estático sin dependencias de bases de datos externas.

## Desarrollo local

```bash
npm install
npm run dev
```

## Despliegue en Hostinger

La aplicación se despliega como una **App web de Node.js** mediante CI/CD. El proceso de despliegue debe instalar las dependencias y construir la aplicación:

```bash
npm ci
npm run build
```

Hostinger debe iniciar el servidor de producción con:

```bash
npm run start
```

Las variables de entorno requeridas deben configurarse en Hostinger tomando `.env.example` como referencia.

## Validación

```bash
npx tsc --noEmit
npm run lint
```
