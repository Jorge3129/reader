import express from 'express'
import {DBFactory} from "./db";
import {horace} from "./scrape/mocks/horace";
import {formatBook} from "./models/book.utils";
import {mockOdes} from "./scrape/mocks/mock-odes";
import {mockOdes2} from "./scrape/mocks/mock-odes-2";
import {RootRouter} from "./routes/root.router";

const cors = require('cors')
const app = express()
const PORT = 9000;

app.use(cors({
    origin: "*"
}));

app.use(express.json())

DBFactory.connect()
    .then(async (DBService) => {
        await DBService.books.deleteAll()
        await DBService.books.insertOne(formatBook(horace[0]))
        await DBService.books.insertOne(formatBook(mockOdes))
        const result = await DBService.books.insertOne(formatBook(mockOdes2))
        console.log(result)

        app.use(RootRouter.getRouter(DBService))

        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
