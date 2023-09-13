const PORT = process.env.PORT || 3000;
const express = require('express');
const { engine } = require('express-handlebars');

const api_routes = require('./controllers/api_routes.js');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('hbs', engine({
    extname: '.hbs'
  }));
app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/', api_routes);

app.listen(PORT, () => console.log('Server started on port %s', PORT));