const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Configure template Engine and Main Template File
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
// Setting template Engine
app.set('view engine', 'hbs');

// routes
app.get('/', (req, res) => {
    res.render('home', { msg: 'This is home page'});
});

app.get('/people', (req, res) => {
    res.render('people', { peoples: [
      { name: 'user1'},
      { name: 'user2'},
    ]});
});

app.get('/about-us', (req, res) => {
    res.render('about-us');
});

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: { todaysDate: () => new Date() }
}));

// port where app is served
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});