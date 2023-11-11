// Create web server application with Node.js

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { check, validationResult } = require('express-validator/check');

// Create Express application
const app = express();

// Add body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

// Return all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Add comment
app.post('/comments', [
    check('name').isLength({ min: 3 }),
    check('comment').isLength({ min: 10 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
    } else {
        const comment = {
            name: req.body.name,
            comment: req.body.comment,
            date: req.body.date
        };
        comments.push(comment);
        res.json(comment);
    }
});