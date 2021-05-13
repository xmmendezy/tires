# Tires

## Dolibarr

Dolibarr es ejecutado desde un contenedor docker para realizar el desarrollo. Se puede iniciar Dolibarr ejecutando el siguiente comando en la raíz de este proyecto:

`docker-compose up -d`

o

`npm run docker`

## Intslación del proyecto

El proyecto esta desarrollado con Vue.js como una SPA, para instalarlo se necesita cualquier servidor de archivos estáticos.

Para instalar las dependencias del proyecto necesita Node.js, en este caso se uso la versión 12, por lo que se recomienda usar 12 o posteriores. Instalar las dependencias con el siguiente comando en la raíz de este proyecto:

`npm install`

Para ejecutar el proyecto en modo de desarrollador utilizar el siguiente comando en la raíz de este proyecto:

`npm run serve`

Para compilar el proyecto para producción utilizar el siguiente comando en la raíz de este proyecto:

`npm run build`

El contenido de la carpeta `dist` luego de compilar el proyecto son todos los archivos necesarios que deben ser servidos a los clientes en la web.
