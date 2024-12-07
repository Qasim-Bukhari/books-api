import express from "express"
import { books } from "../books.js"

export const booksRoute = express.Router()

booksRoute.get("/", (req, res) => {
    const { author } = req.query

    if(author) {
        const filteredBooksByAuthor = books.filter((book) => book.author.toLowerCase().includes(author.toLowerCase()));

        if(filteredBooksByAuthor.length === 0) {
            return res.status(404).send({ status: 404, message: "not found", books: [] })
        }

        return res.status(200).send({ status: 200, message: "success", books: filteredBooksByAuthor })
    }

    res.status(200).send({ status: 200, message: "success", books: books })
})

booksRoute.get("/:id", (req, res) => {
    let { id } = req.params
    let bookByID = books.find((item) => item.id == id)

    if(!bookByID) {
        return res.status(404).send({ status: 404, message: "not found", book: null })
    }
    
    res.status(200).send({ status: 200, message: "success", book: bookByID })
})