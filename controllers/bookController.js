const db = require('../models/index')
const BookDal = require('../dal/dalBook')
const {op}=require('sequelize')
const Book = db.books

class BookController {

    getAllBooks = (async (req, res) => {

        let where = {}
        if (userId) where.userId = userId
        if (name) where.name = name
        if (author) where.author = author
        if (num_of_pages) where.num_of_pages = num_of_pages

        const books = await BookDal.getAllBooks({
            where: {[Op.and]: where}
        })

//???
        console.log(books)
        if (!books?.length) {
            return res.status(400).json({ message: 'No books found' })
        }

        res.json(books)
    })


    addBook = async (req, res) => {
        const { name, picture, description, author, num_of_pages, lendId, contact_details } = req.body
        // Confirm data

        if (!contact_details) {
            return res.status(400).json({ message: 'All fields are required, why you don"t sending??????!!!!!!!🤬 ' })
        }

        const booknew = { name, picture, description, author, num_of_pages, lendId, contact_details }
        const book = await BookDal.addBook(booknew)
        if (book) { // Created
            return book
        }
        else {
            return res.status(400).json({ message: 'Invalid book data received' })
        }
    }


    deleteBook = (async (req, res) => {
        const { bookId } = req.params.bookId
        if (!bookId) {
            return res.status(400).json({ message: 'book ID required why you don"t sending??????!!!!!!!🤬 ' })
        }
        await Book.destroy({
            where: {
                bookId: bookId
            }
        });
        res.json(`book with ID ${bookId} deleted`)
    })

    updateBook = (async (req, res) => {
        const { name, picture, description, author, num_of_pages, lendId, contact_details } = req.body
        const bookId = req.params.bookId;
        // Confirm data
        if (!req.body) {
            return res.status(400).json({
                message: 'All fields are required'
            })
        }
        const newBook = { name: name, picture: picture, description: description, author: author, num_of_pages: num_of_pages, lendId: lendId, contact_details: contact_details }

        const book = await BookDal.updateBook(bookId, newBook)
        if (!book) {
            return res.status(400).json({ message: 'book not found' })
        }
        res.json(book)
    })

    getBooksByUserId = (async (req, res) => {
        const userId = req.params.userId
        console.log(userId)
        if (userId) {
            const book = await BookDal.getBooksByUserId(userId)
            res.json(book)
        }
        else
            return ("we need uderId")

    })
    getBooksByBookId = (async (req, res) => {
        const bookId = req.params.userId
        if (userId) {
            const book = await BookDal.getBooksBybookId(bookId)
            res.json(book)
        }
        else
            return ("we need bookId")

    })

}

const bookController = new BookController();
module.exports = bookController;