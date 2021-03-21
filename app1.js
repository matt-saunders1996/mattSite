// if (process.env.NODE_ENV !== "production") {
//     require('dotenv').config();
// };

// // require('dotenv').config();



// // Dependencies
const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.set ('view engine', 'ejs');
app.set ('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/rgbGame', (req, res) => { 
    res.render('rgbGame')
});

app.get('/gallery', (req, res) => {
    res.render('gallery')
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`serving on port`);
});



