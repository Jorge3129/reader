import langController from "./controllers/lang.controller";
require('dotenv').config({path: './src/.env'})
import express from 'express'
import {DBFactory, initBooks} from "./db";
import {RootRouter} from "./routes/root.router";
import errorMiddleware from "./middlewares/error-middleware";
const cors = require('cors')
const app = express()
const PORT = 9000;
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.get('/lang/word/:word', langController.getTranslation.bind(langController))

DBFactory.connect()
    .then(async (DBService) => {
        await initBooks(DBService)
        app.use(RootRouter.getRouter(DBService))
        app.use(errorMiddleware)

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
