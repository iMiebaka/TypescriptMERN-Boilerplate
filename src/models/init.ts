import mongoose from "mongoose";
import {  config, logger } from "../config";
const NAMESPACE = "Database"

const runDatabase = (): void => {

    mongoose
        .connect(config.database.url)
        .then(() => {
            logger.info(NAMESPACE, "Database Connected and open for business 🛢️");
        })
        .catch(() => {
            logger.error(NAMESPACE, "Cannot connecct to database");
        });
}

export default runDatabase;