import express, {Request, Response} from 'express'
import {collections, connectToDatabase} from "./services/db/database.service";
import {bookRouter} from "./routes/bookRouter";
import {horace} from "./scrape/mocks/horace";
import {formatBook, flattenBookContent, formatFlatBook} from "./models/book.utils";
import {mockOdes} from "./scrape/mocks/mock-odes";
import {mockOdes2} from "./scrape/mocks/mock-odes-2";

const cors = require('cors')
const app = express()
const PORT = 7000;

app.use(cors({
    origin: "*"
}));

app.use("/books", bookRouter);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

connectToDatabase()
    .then(async () => {
        if (collections.books) {
            await collections.books.deleteMany({})
            await collections.books.insertOne(formatBook(horace[0]))
            await collections.books.insertOne(formatBook(mockOdes))
            const result = await collections.books.insertOne(formatBook(mockOdes2))
            console.log(result)
        }

    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
