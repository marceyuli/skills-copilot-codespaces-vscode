// Create web server with Express
// 1. Import the express library
const express = require('express');
// 2. Create an instance of express
const app = express();
// 3. Define a port to run the server
const port = 3000;
// 4. Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 5. Run the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
// 6. Run the server with nodemon
// nodemon comments.js
// 7. Test the server
// http://localhost:3000
// 8. Install nodemon globally
// npm install -g nodemon
// 9. Run the server
// nodemon comments.js
// 10. Create a route with parameters
app.get('/comments/:id', (req, res) => {
    res.send(`This is comment ${req.params.id}`);
});
// 11. Test the route
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2
// http://localhost:3000/comments/3
// 12. Create a route with optional parameters
app.get('/comments/:id?', (req, res) => {
    if (req.params.id) {
        res.send(`This is comment ${req.params.id}`);
    }
    else {
        res.send('This is the comments page');
    }
});
// 13. Test the route
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/2
// http://localhost:3000/comments/3
// 14. Create a route with multiple parameters
app.get('/comments/:id?/:postId?', (req, res) => {
    if (req.params.id && req.params.postId) {
        res.send(`This is comment ${req.params.id} on post ${req.params.postId}`);
    }
    else if (req.params.id) {
        res.send(`This is comment ${req.params.id}`);
    }
    else {
        res.send('This is the comments page');
    }
});
// 15. Test the route
// http://localhost:3000/comments
// http://localhost:3000/comments/1
// http://localhost:3000/comments/
