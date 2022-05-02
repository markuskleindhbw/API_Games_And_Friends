const swaggerDocs = {
    swagger: "2.0",
    info: {
        version: "1.0.0",
        title: "Example REST API Games and Friends Service",
        description: "API for free games, soon available games and friends",
        license: {
            name: "MIT",
            url: "https://opensource.org/licenses/MIT",
        },
    },
    host: "localhost:4000",
    basePath: "/",
    tags: [{
            name: "Free Games",
            description: "free games in the database",
        },
        {
            name: "Soon available games",
            description: "soon available games in the database",
        },
        {
            name: "Friends",
            description: "friends in the database",
        },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
        "freeGames/": {
            get: {
                tags: ["Free Games"],
                summary: "Get all free games in the system",
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/FreeGames",
                        },
                    },
                },
            },
        },
        "freeGames/{id}": {
            get: {
                tags: ["Free Games"],
                summary: "Get a free game by id",
                parameters: [{
                    name: "id",
                    in: "body",
                    description: "Id of the free game searched for",
                    schema: {
                        $ref: "#/definitions/FreeGames",
                    },
                }, ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/FreeGames",
                        },
                    },
                    404: {
                        description: "Not Found",
                        schema: {
                            $ref: "#/definitions/FreeGames",
                        },
                    },
                },
            },
        },
        "freeGames/search": {
            get: {
                tags: ["Free Games"],
                summary: "Get a free game by title",
                parameters: [{
                    name: "title",
                    in: "path",
                    description: "Title of the free game searched for",
                    schema: {
                        $ref: "#/definitions/FreeGames",
                    },
                }, ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/FreeGames",
                        },
                    },
                    404: {
                        description: "Not Found",
                        schema: {
                            $ref: "#/definitions/FreeGames",
                        },
                    },
                },
            },
        },
        "freeGames/add": {
            post: {
                tags: ["Free Games"],
                summary: "Add a new free game",
                parameters: [{
                    name: "free game",
                    in: "body",
                    description: "free game to be added",
                    schema: {
                        $ref: "#/definitions/FreeGames",
                    },
                }, ],
                responses: {
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/FreeGames",
                        },
                    },
                    400: {
                        description: "Bad Request",
                        schema: {
                            $ref: "#/definitions/FreeGames",
                        },
                    },
                },
            },
        },
        "freeGames/put": {
            post: {
                tags: ["Free Games"],
                summary: "Edit a free game",
                parameters: [{
                    name: "free game",
                    in: "body",
                    description: "free game to be edited",
                    schema: {
                        $ref: "#/definitions/FreeGames",
                    },
                }, ],
                responses: {
                    200: {
                        description: "Ok",
                        schema: {
                            $ref: "#/definitions/FreeGames",
                        },
                    },
                    400: {
                        description: "Bad Request",
                        schema: {
                            $ref: "#/definitions/FreeGames",
                        },
                    },
                    404: {
                        description: "Not Found",
                        schema: {
                            $ref: "#/definitions/FreeGames",
                        },
                    },
                },
            },
        },
        "freeGame/delete": {
            delete: {
                tags: ["Free Game"],
                summary: "Delete a free game by id",
                parameters: [{
                    name: "id",
                    in: "path",
                    description: "Id of the free game to be deleted",
                    schema: {
                        $ref: "#/definitions/FreeGames",
                    },
                }, ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/FreeGames",
                        },
                    },
                    404: {
                        description: "Not Found",
                        schema: {
                            $ref: "#/definitions/FreeGames",
                        },
                    },
                },
            },
        },
        "soonAvailableGame/": {
            get: {
                tags: ["Soon Available Games"],
                summary: "Get all soon avaiable games in the system",
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/SoonAvailableGames",
                        },
                    },
                },
            },
        },
        "soonAvailableGame/{id}": {
            get: {
                tags: ["Soon Available Games"],
                summary: "Get a soon available game by id",
                parameters: [{
                    name: "id",
                    in: "body",
                    description: "Id of the soon available game searched for",
                    schema: {
                        $ref: "#/definitions/SoonAvailableGames",
                    },
                }, ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/SoonAvailableGames",
                        },
                    },
                    404: {
                        description: "Not Found",
                        schema: {
                            $ref: "#/definitions/SoonAvailableGames",
                        },
                    },
                },
            },
        },
        "soonAvailableGame/search": {
            get: {
                tags: ["Soon Available Games"],
                summary: "Get a specific soon available game by title",
                parameters: [{
                    name: "title",
                    in: "path",
                    description: "Title of the soon available game searched for",
                    schema: {
                        $ref: "#/definitions/SoonAvailableGames",
                    },
                }, ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/SoonAvailableGames",
                        },
                    },
                    404: {
                        description: "Not Found",
                        schema: {
                            $ref: "#/definitions/SoonAvailableGames",
                        },
                    },
                },
            },
        },
        "soonAvailableGame/add": {
            post: {
                tags: ["Soon Available Games"],
                summary: "Add a new soon available game",
                parameters: [{
                    name: "soon available game",
                    in: "body",
                    description: "soon available game to be added",
                    schema: {
                        $ref: "#/definitions/SoonAvailableGames",
                    },
                }, ],
                responses: {
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/SoonAvailableGamse",
                        },
                    },
                    400: {
                        description: "Bad Request",
                        schema: {
                            $ref: "#/definitions/SoonAvailableGames",
                        },
                    },
                },
            },
        },
        "soonAvailableGame/put": {
            post: {
                tags: ["Soon Available Games"],
                summary: "Edit a soon available game",
                parameters: [{
                    name: "soon available game",
                    in: "body",
                    description: "soon available game to be edited",
                    schema: {
                        $ref: "#/definitions/SoonAvailableGames",
                    },
                }, ],
                responses: {
                    200: {
                        description: "Ok",
                        schema: {
                            $ref: "#/definitions/SoonAvailableGames",
                        },
                    },
                    400: {
                        description: "Bad Request",
                        schema: {
                            $ref: "#/definitions/SoonAvailableGames",
                        },
                    },
                    404: {
                        description: "Not Found",
                        schema: {
                            $ref: "#/definitions/SoonAvailableGames",
                        },
                    },
                },
            },
        },
        "soonAvailableGame/delete": {
            delete: {
                tags: ["Soon Available Games"],
                summary: "Delete a specific soon available game by id",
                parameters: [{
                    name: "id",
                    in: "path",
                    description: "Id of the soon available game to be deleted",
                    schema: {
                        $ref: "#/definitions/SoonAvailableGamse",
                    },
                }, ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/SoonAvailableGamse",
                        },
                    },
                    404: {
                        description: "Not Found",
                        schema: {
                            $ref: "#/definitions/SoonAvailableGamse",
                        },
                    },
                },
            },
        },
        "friends/": {
            get: {
                tags: ["Friends"],
                summary: "Get all friends in the system",
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Friends",
                        },
                    },
                },
            },
        },
        "friends/{id}": {
            get: {
                tags: ["Friends"],
                summary: "Get a specific friend by id",
                parameters: [{
                    name: "id",
                    in: "body",
                    description: "Id of the friend searched for",
                    schema: {
                        $ref: "#/definitions/Friends",
                    },
                }, ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Friends",
                        },
                    },
                    404: {
                        description: "Not Found",
                        schema: {
                            $ref: "#/definitions/Friends",
                        },
                    },
                },
            },
        },
        "friends/search": {
            get: {
                tags: ["Friends"],
                summary: "Get a specific friends by nickname",
                parameters: [{
                    name: "nickname",
                    in: "path",
                    description: "Title of the friend searched for",
                    schema: {
                        $ref: "#/definitions/Friends",
                    },
                }, ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Friends",
                        },
                    },
                    404: {
                        description: "Not Found",
                        schema: {
                            $ref: "#/definitions/Friends",
                        },
                    },
                },
            },
        },
        "friends/add": {
            post: {
                tags: ["Friends"],
                summary: "Add a new friend",
                parameters: [{
                    name: "friend",
                    in: "body",
                    description: "friend to be added",
                    schema: {
                        $ref: "#/definitions/Friends",
                    },
                }, ],
                responses: {
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/Friends",
                        },
                    },
                    400: {
                        description: "Bad Request",
                        schema: {
                            $ref: "#/definitions/Friends",
                        },
                    },
                },
            },
        },
        "friends/put": {
            post: {
                tags: ["Friends"],
                summary: "Edit a friends",
                parameters: [{
                    name: "friends",
                    in: "body",
                    description: "friends to be edited",
                    schema: {
                        $ref: "#/definitions/Friends",
                    },
                }, ],
                responses: {
                    200: {
                        description: "Ok",
                        schema: {
                            $ref: "#/definitions/Friends",
                        },
                    },
                    400: {
                        description: "Bad Request",
                        schema: {
                            $ref: "#/definitions/Friends",
                        },
                    },
                    404: {
                        description: "Not Found",
                        schema: {
                            $ref: "#/definitions/Friends",
                        },
                    },
                },
            },
        },
        "friends/delete": {
            delete: {
                tags: ["Friends"],
                summary: "Delete a specific friend by id",
                parameters: [{
                    name: "id",
                    in: "path",
                    description: "Id of the friend to be deleted",
                    schema: {
                        $ref: "#/definitions/Friends",
                    },
                }, ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Friends",
                        },
                    },
                    404: {
                        description: "Not Found",
                        schema: {
                            $ref: "#/definitions/Friends",
                        },
                    },
                },
            },
        },
    },

    definitions: {
        FreeGames: {
            required: ["title", "publisher"],
            properties: {
                _id: {
                    type: "string",
                    uniqueItems: true,
                },
                title: {
                    type: "string",
                },
                publisher: {
                    type: "string",
                }
            },
        },
        SoonAvailableGames: {
            required: ["title", "publisher"],
            properties: {
                _id: {
                    type: "string",
                    uniqueItems: true,
                },
                title: {
                    type: "string",
                },
                publisher: {
                    type: "string",
                },
            },
        },
        friends: {
            required: ["nickname"],
            properties: {
                _id: {
                    type: "string",
                    uniqueItems: true,
                },
                nickname: {
                    type: "string",
                },
            },
        },

    },
};

export default swaggerDocs;