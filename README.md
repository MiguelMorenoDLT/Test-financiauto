# Test-financiauto


Iniciar con Create React App
Este proyecto fue creado con Create React App.

Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

npm start
Ejecuta la aplicación en modo de desarrollo.
Abre http://localhost:3000 para verlo en tu navegador.

La página se recargará cuando realices cambios.
También puedes ver cualquier error de lint en la consola.

npm test
Inicia el corredor de pruebas en modo interactivo de vigilancia.
Consulta la sección sobre ejecución de pruebas para más información.

npm run build
Construye la aplicación para producción en la carpeta build.
Empaqueta correctamente React en modo de producción y optimiza la construcción para el mejor rendimiento.

La construcción está minimizada y los nombres de archivo incluyen los hashes.
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre despliegue para más información.

npm run eject
Nota: ¡esta es una operación unidireccional! Una vez que eject, no puedes volver atrás.

Si no estás satisfecho con la herramienta de compilación y las opciones de configuración, puedes eject en cualquier momento. Este comando eliminará la dependencia única de compilación de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellas. Todos los comandos, excepto eject, seguirán funcionando, pero apuntarán a los scripts copiados para que puedas modificarlos. En este punto, estás por tu cuenta.

No tienes que usar eject nunca. El conjunto de características curadas es adecuado para despliegues pequeños y medianos, y no deberías sentirte obligado a usar esta característica. Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo.

Instrucciones para Levantar los Microservicios y el Frontend
Prerrequisitos
Docker y Docker Compose deben estar instalados en tu sistema.
Cómo Levantar la Aplicación con Docker Compose
Clona el repositorio

bash
Copy code
git clone https://github.com/tu-usuario/tu-repositorio.git
bash
Copy code
cd tu-repositorio
Construye y levanta los contenedores

bash
Copy code
docker-compose up --build
Esto construirá las imágenes de Docker y levantará los contenedores para el backend, frontend y la base de datos PostgreSQL.
El frontend estará disponible en http://localhost:3000.
El backend estará disponible en http://localhost:8000.
Detén los contenedores

bash
Copy code
docker-compose down
Este comando detendrá y eliminará los contenedores.
Explicación de la Comunicación entre Microservicios
1. Comunicación entre Frontend y Backend
El frontend (React) se comunica con el backend (Django) a través de solicitudes HTTP. Utiliza axios para hacer las solicitudes y manejar las respuestas.
La autenticación de usuarios se gestiona mediante tokens JWT, que se almacenan en localStorage después de iniciar sesión. Las solicitudes protegidas incluyen el token JWT en el encabezado Authorization.
2. Comunicación Interna entre Servicios en Docker
La base de datos PostgreSQL y el backend de Django se comunican a través de la red interna de Docker. El backend usa db como el HOST en la configuración de la base de datos, lo que hace referencia al nombre del servicio de la base de datos en el archivo docker-compose.yml.
3. Manejo de CORS
El backend de Django está configurado con django-cors-headers para permitir que el frontend haga solicitudes desde http://localhost:3000.
Archivos Importantes
docker-compose.yml: Define y configura los servicios de Docker (backend, frontend y base de datos).
Dockerfile (Backend): Archivo para construir la imagen de Docker del backend.
Dockerfile (Frontend): Archivo para construir la imagen de Docker del frontend.
settings.py (Django): Configura la base de datos, el manejo de CORS y otros parámetros importantes del backend.
Más Información
Para obtener más información, puedes consultar la documentación de Create React App.

Para aprender más sobre React, consulta la documentación de React.

