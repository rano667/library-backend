const express = require('express');
const connectDB = require('./connectDB');
const cors = require('cors');
const Book = require('./model/Book'); // Import the Book model
const app = express();
const port = process.env.PORT || 4000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

connectDB();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Books');
});

// Add a new book (title, author, summary)
app.post('/books', async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const book = new Book({ title, author, summary });
    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// View a list of all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// View details of a specific book by its ID
app.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a book's details
app.put('/books/:id', async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, { title, author, summary }, { new: true });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a book
app.delete('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
