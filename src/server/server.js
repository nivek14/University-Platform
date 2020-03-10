const app = require('./app');

const PORT = 8080;

app.listen(PORT, function () {

    console.log('Servidor ouvindo na porta', PORT, '!');
});