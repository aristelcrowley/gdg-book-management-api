const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

// Middleware to parse JSON
app.use(express.json());

// Use book routes
app.use('/api/books', bookRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
