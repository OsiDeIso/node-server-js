const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// fs.appendFile('server.log', log + '\n', (error) => {
//     if(error){
//         console.log('Unable to apprend to server.log');
//     }
// });


// app.use((req,res, next) => {
//     var now = new Date().toString();
//     var log = `${now}: ${req.method} ${req.url}`;  

//     console.log(log);
//     fs.appendFileSync('server.log', log + '\n'); 
//     next();
// });


// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });


hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});


hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});


app.get('/', (req,res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'welcome to my website'
    });
});


app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle: 'About page'
    });
});

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects'
    });
});


// /bad --send back json with errorMessage
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
});


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});


// Notes
// Express est une infrastructure d'applications Web Node.js minimale et flexible qui fournit un 
// ensemble robuste de fonctionnalités pour les applications Web et mobiles
// Avec une myriade de méthodes utilitaires HTTP et de middleware à votre disposition, 
// la création d'une API robuste est simple et rapide.  

// https://intense-coast-48723.herokuapp.com/he

// https://intense-coast-48723.herokuapp.com/ | https://git.heroku.com/intense-coast-48723.git
// heroku open