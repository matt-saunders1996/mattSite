

// // Dependencies
const express = require('express');
const path = require('path');
const https = require('https');

const app = express();

var options = {
    root: path.join(__dirname, '.well-known/pki-validation')
};

app.use(express.static(path.join(__dirname, 'public'), { dotfiles: 'allow' }));


app.set ('view engine', 'ejs');
app.set ('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get ('/.well-known/pki-validation/38E94031BFD4ABBF419B87408CD6F7CF.txt', (req, res) => {
    res.sendFile('38E94031BFD4ABBF419B87408CD6F7CF.txt', options)});


app.get('/rgbGame', (req, res) => { 
    res.render('rgbGame')
});

app.get('/gallery', (req, res) => {
    res.render('gallery')
});

const port = 80 || 3000

app.listen(port, () => {
    console.log(`serving on port ${port}`);
});



