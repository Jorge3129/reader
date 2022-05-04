import express, {Request, Response} from 'express'
import {arr} from "./carm1";
const cors = require('cors')
const app = express()
const PORT = 5000;

app.use(cors({
    origin: "*"
}))

app.get('/', (req: Request, res: Response) => {
    res.json(arr)
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))