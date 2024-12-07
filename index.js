import express from "express"
import dotenv from "dotenv"
import { booksRoute } from "./routes/booksRoute.js"
import { books } from "./books.js"

const app = express()
dotenv.config()

app.get("/", (req, res) => {
    res.status(200).send("Welcome! to backend.")
})

app.use("/books", booksRoute)

app.get("*", (req, res) => {
    res.status(404).send({ status: 404, message: "not found", books: []})
})

const port = process.env.PORT || 4000

app.listen(port, (req, res) => {
    console.log(`Server is started at port ${port}`)
})