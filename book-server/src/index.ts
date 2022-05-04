import express, {Request, Response} from 'express'
import {collections, connectToDatabase} from "./services/database.service";
import {bookRouter} from "./routes/bookRouter";
import {horace} from "./scrape/mocks/horace";

const cors = require('cors')
const app = express()
const PORT = 4000;

app.use(cors({
    origin: "*"
}));

app.use("/books", bookRouter);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

connectToDatabase()
    .then(async () => {
        // if (collections.books) {
        //     const book = horace[0]
        //     let uid = 0
        //     const result = await collections.books.insertOne({
        //         ...book, content: typeof book.content === "string" ?
        //             book.content : book.content.reduce((acc: any, val: any) => acc.concat(val.content), []
        //             ).map((section: any) => ({...section, uid: uid++}))
        //     })
        //     console.log(result)
        // }

    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
