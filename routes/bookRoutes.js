const express = require('express');
const router = express.Router();
const books = require('../data/books');
const book = require('../models/book');

// GET all books
router.get('/', (req, res) => {
    res.json(books);
});

// POST a new book
router.post('/', (req, res) => {
    const { title, author } = req.body;
    const newBook = new book(books.length + 1, title, author);
    books.push(newBook);
    res.status(201).json(newBook);
});

// DELETE a book by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(book => book.id === parseInt(id));
    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        res.json(deletedBook);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

module.exports = router;
