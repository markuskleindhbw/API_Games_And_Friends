# Nutzung einer REST-API, um einen Überblick der momenatenen kostenlosen Spiele, der bald verfügbaren Spiele und einer Freundesliste zu geben. 

# Name der App: Scoured

# Inbetriebnahme der API 
 - Run 'cd simple-backend' um auf den Backend Ordner zu gelangen
 - Run 'npm i' um alle erforderlichen Pakete herunterzuladen
 - Run 'npm run d-up' um Frontend- sowie Backend-Server und MongoDB zu starten

# Collections:
##  ./FreeGame

- GET /freeGames
--> Get all free game records from the system
- GET /freeGames/:id
--> Get a specific free game record by id
- GET /freeGames/title/:title
--> Get a specific free game record by title
- GET /freeGames/publisher/:publisher
--> Get a specific free game record by publisher
- PUT /freeGames/update/:id
--> Update a specific free game record by id
- POST /freeGames/add
--> Add a new free game record in the system
- DELETE /freeGames/delete/:id
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
- GET /soonAvailableGames
--> Get all soon available game records from the system
- GET /soonAvailableGames/:id
--> Get a specific soon available game record by id
- GET /soonAvailableGames/title/:title
--> Get a specific soon available game record by title
- GET /soonAvailableGames/publisher/:publisher
--> Get a specific soon available game record by publisher
- PUT /soonAvailableGames/update/:id
--> Update a specific soon available game record by id
- POST /soonAvailableGames/add
--> Add a new soon available game record in the system
- DELETE /soonAvailableGames/delete/:id
--> Delete a soon available game record by id--> Get a specific friend record by id
- GET /friends/nickname/:nickname
--> Get a specific friend record by nickname
- PUT /friends/edit/:id
--> Update a specific friend records by id
- POST /friends/add
--> Add a new friend record in the system
- DELETE /friends/delete/:id
--> Delete a friend record by id
##  ./SoonAvailableGame
- GET /soonAvailableGames
--> Get all soon available game records from the system
- GET /soonAvailableGames/:id
--> Get a specific soon available game record by id
- GET /soonAvailableGames/title/:title
--> Get a specific soon available game record by title
- GET /soonAvailableGames/publisher/:publisher
--> Get a specific soon available game record by publisher
- PUT /soonAvailableGames/update/:id
--> Update a specific soon available game record by id
- POST /soonAvailableGames/add
--> Add a new soon available game record in the system
- DELETE /soonAvailableGames/delete/:id
--> Delete a soon available game record by id