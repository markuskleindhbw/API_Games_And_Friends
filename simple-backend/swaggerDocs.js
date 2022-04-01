const swaggerDocs = {
    swagger: "2.0",
    info: {
        version: "1.0.0",
        title: "Example REST API Games and Friends Service",
        description: "API for games and friends",
        license: {
            name: "MIT",
            url: "https://opensource.org/licenses/MIT",
        },
    },
    host: "localhost:3000",
    basePath: "/games",
    tags: [{
        name: "Games",
        description: "games in the database",
    }, ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
        "/": {
            get: {
                tags: ["Games"],
                summary: "Get all games in the system",
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Game",
                        },
                    },
                },
            },
            get: {
                tags: ["Friends"],
                summary: "Get all friends in the system",
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Game",
                        },
                    },
                },
            },
        },
        "/{id}": {
            get: {
                tags: ["Games"],
                summary: "Get a specific game by id",
                parameters: [{
                    name: "id",
                    in: "body",
                    description: "Id of the game searched for",
                    schema: {
                        $ref: "#/definitions/Game",
                    },
                }, ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Game",
                        },
                    },
                },
            },
            get: {
                tags: ["Friends"],
                summary: "Get a specific friend by id",
                parameters: [{
                    name: "id",
                    in: "body",
                    description: "Id of the friend searched for",
                    schema: {
                        $ref: "#/definitions/Friend"
                    },
                }, ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/defintions/Friend"
                        },
                    },
                },
            },
        },
        "/search": {
            get: {
                tags: ["Games"],
                summary: "Get a specific game by title",
                parameters: [{
                    name: "title",
                    in: "path",
                    description: "Title of the game searched for",
                    schema: {
                        $ref: "#/definitions/Game",
                    },
                }, ],
                responses: {
                    200: {
                        description: "OK",
                        schema: {
                            $ref: "#/definitions/Game",
                        },
                    },
                },
            },
            get: {
                tags: ["Friends"],
                summary: "Get a specific friend by nickname",
                parameters
            }
        },
        "/add": {
            post: {
                tags: ["Games"],
                summary: "Add a new game",
                parameters: [{
                    name: "game",
                    in: "body",
                    description: "game to be added",
                    schema: {
                        $ref: "#/definitions/Game",
                    },
                }, ],
                responses: {
                    201: {
                        description: "Created",
                        schema: {
                            $ref: "#/definitions/Game",
                        },
                    },
                },
            },
        },
    },
    definitions: {
        Game: {
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
        Friend: {
            required: ["nickname"],
            properties: {
                _id: {
                    type: "string",
                    uniqueItems: true,
                },
                nickname: {
                    type: "string",
                },
            }
        }
    },
};

export default swaggerDocs;