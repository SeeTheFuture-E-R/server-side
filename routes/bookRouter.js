
const express = require("express");
bookRouter = express.Router();
const bookController = require("../controllers/bookController");
const verifyJWT = require("../middleware/verifyJWT")
bookRouter.route("/")
    .get(bookController.getAllBooks)
    .post(verifyJWT, bookController.addBook);

bookRouter.route("/:bookId")
    .delete(verifyJWT, bookController.deleteBook)
    .put(verifyJWT,bookController.updateBook)
    .get(bookController.getBooksByBookId);


module.exports = bookRouter;
