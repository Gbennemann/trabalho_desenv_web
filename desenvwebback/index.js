const {createServer} = require('http');
// const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
// let app = express();
const app = require('./config/router-factory');

const http = createServer(app);

process.on('SIGINT', () => http.close((error) => {
    if(error){
        console.log(`${error.name}: ${error.message}`);
    }
    process.exit(error ? 1 : 0);
}));

// app.get('/', (_, res) => res.send('<h1>Resposta!!!!!!!!!!!!!!</h1>'))

http.listen(8080, () => console.log('Ouvindo porta 8080'));
