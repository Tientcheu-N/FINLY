const express = require('express');
const morgan = require('morgan');
const dbConnect = require('./libs/dbConnect'); 
const userRouter = require('./routes/user.route');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan('dev'));
app.set('views', './views');
app.set('view engine', 'ejs');


dbConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Failed to start server due to database connection error:', error);
        process.exit(1); 
    });


app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});

app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});

app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});

app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});


app.use('/users', userRouter);