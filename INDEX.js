//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set folder public as static folder for static file
app.use('/assets',express.static(__dirname + '/public'));

//CONTACT
app.get ('/CONTACT', (req, res) => {
  res.render('CONTACT');
});

//HOMEPAGE
app.get ('/HOMEPAGE', (req, res) => {
  res.render('HOMEPAGE');
});

//ABOUTME
app.get ('/ABOUTME', (req, res) => {
  res.render('ABOUTME');
});

//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});