# aplicacion backend para las ligas de entrenamiento de sofka u
# tema naves espaciales
# autor Cesar Ruiz
# comandos e informacion de la app

# instalar dependencias: se utilizó yarn para el manejo de dependencias, a la hora de clonar, ejecutar:

- yarn install

# migrar la base de datos: en este projecto se utiliza una base de datos mysql, con el orm sequelize, para migrar se debe tener instalado el cli de sequelize y ejecutar: 

- yarn run migrate

# si solo se quiere ejecutar una migracion en especifico:

- yarn run migrateOne <nombre_archivo>

# ejecutar la app

- yarn run dev

# la documentacion se encontrará disponible en swagger para ejecutar cada endpoint en: 

- http://localhost:3000/api-docs

# en caso de querer ensayar la app desplegada en heroku visitar:

- https://espace-ships.herokuapp.com/api-docs

# los endpoints de paginaciones, son dinamicos, puedes escribir un string cualquiera en el campo where y la api te devolverá las coincidencias con ciertos campos de la nave

# recuerda copiar el id de la nave que quieras manejar en cada endpoint que necesite id:
# obtener una nave
# eliminar una nave
# actualizar una nave


## saludos y buen viaje!!!!!