var express = require('express');
var app = express();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var csv = require('./javascripts/csv.js');

app.set('port', (process.env.PORT || 5000));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// public pages
app.use(express.static(process.cwd() + '/public'));

app.use(expressLayouts);
app.use(express.static(__dirname + '/javascripts'));
app.use(express.static(__dirname + '/test'));
app.use(express.static(__dirname + '/conf.js'));


app.get('/', function (req, res) {
  res.render('index', { title: 'CSV' });
})

app.get('/test', function (req, res) {
  res.render('test_index', { title: 'Tests' });
})

app.get('/csv', function (req, res) {
  res.send(csv.button(req.query));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
