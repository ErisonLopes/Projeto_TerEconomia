// Importando os módulos/dependências/bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');
const request = require('request');

// Importando os controllers
const usuariosController = require('./controllers/usuarios.js');
const loginController = require('./controllers/login.js');

// Instanciando o express
const app = express();

// Aplicando o body parser
app.use(bodyParser.json());

// Conecta a nossa api ao banco de dados
app.use(expressMongoDb('mongodb://localhost:27017/cadastros'));

//libera acesso à API de qualquer host/cliente. Para conectar com o Front-End geral.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Inicializando o servidor
app.listen(3000, () => {
    console.log('Servidor ligado. Acesse em http://localhost:3000');
});

// Rotas
// app.get('/api/usuarios', usuariosController.listar); //nao existe!
app.post('/api/usuarios', usuariosController.criar);

app.put('/api/usuarios/:idDaUrl', usuariosController.atualizar);
app.delete('/api/usuarios/:idDaUrl', usuariosController.deletar);

// app.get('/api/cadastro', cadastroController.listar);
app.post('/api/login', loginController.logar);