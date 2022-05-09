import express, {Request, Response} from 'express'
import {collections, connectToDatabase} from "./services/db/database.service";
import {bookRouter} from "./routes/bookRouter";
import {horace, mockOdes} from "./scrape/mocks/horace";
import {formatBook, flattenBookContent, formatFlatBook} from "./models/book.utils";

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
            const result = await collections.books.insertOne(formatBook(mockOdes))
            console.log(result)
        }

    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
