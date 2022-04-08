import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import freeGameRoutes from "./routes/freeGameRoutes.js";
import friendRoutes from "./routes/friendRoutes.js";
import soonGameRoutes from "./routes/soonGameRoutes.js";
import swaggerDocs from "../swaggerDocs.js";

// complete application is here
const app = express();
const port = 4000;

// app uses json
app.use(bodyParser.json());

// only games routes and documentation is valid
// everything else throws a 404
app.use("/freegames", freeGameRoutes);
app.use("/soongames", soonGameRoutes);
app.use("/friends", friendRoutes);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.all("*", (req, res) => res.sendStatus(404));

// connect to database
mongoose.connect("mongodb://mongo:27017/test").then(() => {
    console.log("Database connected");
});

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});