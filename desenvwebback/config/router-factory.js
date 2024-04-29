const express = require('express');
const routes = require('./router-files');
const path = require('path');

let app = express();

/**
 * Define os cabeçalhos em comum em todas as requisições, os quais impedem erros relacionados ao CORS policy.
 */
app.use((_, res, next) => {
	res.set('Access-Control-Allow-Headers', '*');
	res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
	next();
});

app.use(
	express.urlencoded({
		extended: false,
	}),
);

app.use(express.json());
app.use(express.static('public'));

app.use('/public', express.static(`${__dirname}/public`));

app.use('/public/images', express.static(path.join(__dirname, '..', 'public', 'images')));

routes.forEach(filename => app.use(require(filename)));

app.get('/', (_, res) => res.send('<h1>Olá Mundo</h1>'));

app.set('view engine', 'ejs');
app.set('views', '.');

module.exports = app;
