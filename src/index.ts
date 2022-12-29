import express, { Application, Request, Response, NextFunction } from "express"
import cors from "cors";
import "dotenv/config";
import initDB from "./models/init"
import { config, logger } from "./config";
import path from "path";



const NAMESPACE = "Server"

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// app.use(helmet())


// Route Setup
import { apiV1 } from "./routes/";

app.use((req, res, next): any => {
    if (req.url.substring(0, 4) !== "/api") {
        return res.sendFile(path.join(__dirname + "/dist/"));
    }
    next()
})

app.use("/api/v1", apiV1);


// Server listening to port 3000
app.listen(config.server.PORT, async () => {
    try {

        await initDB()
        logger.info(NAMESPACE, `REST API is Running on ${config.server.PORT} 🌐`);
        app.set("LISTENING", config.server.PORT);
    }
    catch (error) {
        logger.info(NAMESPACE, `Server failed to start 😞`);
    }
});

// module.exports = app