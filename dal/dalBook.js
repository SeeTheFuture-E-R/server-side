
const db = require('../models/index')
const Book = db.books

class BookDal{
    getAllBooks = async () => {
        const books = await Book.findAll({})
        
        return(books)
    }

    addBook = async (newBook) => {
        const book = await Book.create(newBook)
        if (book) { // Created
            return book
        }
    }

    deleteBook = async (bookId) => {

        await Book.destroy({
            where: {
                bookId: bookId
            }
        });
        
    }

    updateBook = async (bookId, newBook) => {

        const book = await Book.update(newBook, { where: { bookId: bookId } })
        return(book)
    }

    getBooksByUserId = async (userId) => {

        const books = await Book.findAll({ where: { userId: userId } })
        return(books)
    }

    getBooksByBookId = async (bookId) => {

        const books = await Book.findOne({ where: { bookId: bookId } })
        return(books)
    }
}
const bookDal = new BookDal();
module.exports = bookDal;
