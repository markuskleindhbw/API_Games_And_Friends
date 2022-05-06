# Nutzung einer REST-API, um einen Überblick der momenatenen kostenlosen Spiele, der bald verfügbaren Spiele und einer Freundesliste zu geben. 

# Name der App: Scoured

# Inbetriebnahme der API 
 - Run 'cd simple-backend' um auf den Backend Ordner zu gelangen
 - Run 'npm i' um alle erforderlichen Pakete herunterzuladen
 - Run 'npm run d-up' um Frontend- sowie Backend-Server und MongoDB zu starten

# Collections:
##  ./FreeGame

- GET /freegames
--> Get all free game records from the system
- GET /freegames/:id
--> Get a specific free game record by id
- GET /freegames/title/:title
--> Get a specific free game record by title
- GET /freegames/publisher/:publisher
--> Get a specific free game record by publisher
- PUT /freegames/update/:id
--> Update a specific free game record by id
- POST /freegames/add
--> Add a new free game record in the system
- DELETE /freegames/delete/:id
--> Delete a free game record by id
##  ./Friends
- GET /friends/
--> Get all friend records from the system
- GET /friends/id/:id
--> Get a specific friend record by id
- GET /friends/nickname/:nickname
--> Get a specific friend record by nickname
- PUT /friends/edit/:id
--> Update a specific friend records by id
- POST /friends/add
--> Add a new friend record in the system
- DELETE /friends/delete/:id
--> Delete a friend record by id
##  ./SoonAvailableGame
- GET /soongames
--> Get all soon available game records from the system
- GET /soongames/:id
--> Get a specific soon available game record by id
- GET /soongames/title/:title
--> Get a specific soon available game record by title
- GET /soongames/publisher/:publisher
--> Get a specific soon available game record by publisher
- PUT /soongames/update/:id
--> Update a specific soon available game record by id
- POST /soongames/add
--> Add a new soon available game record in the system
- DELETE /soongames/delete/:id
--> Delete a soon available game record by id--> Get a specific friend record by id

