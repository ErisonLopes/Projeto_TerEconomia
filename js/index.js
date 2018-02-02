// Importando os módulos/dependências/bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');
const mongoose = require('mongoose');

// Importando os controllers
const usuariosController = require('../controllers/usuarios.js');

// Instanciando o express
const app = express();

// Aplicando o body parser
app.use(bodyParser.json());

const login = require('./login.html');
 
mongoose.connect('mongodb://localhost/usuarios');

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

app.use('/', login);

var cadastroController = require('.controllers/cadastro.js');

// Rotas
app.get('/api/usuarios', usuariosController.listar);
app.post('/api/usuarios/usuario', usuariosController.criar);
app.put('/api/usuarios/usuario/:idDaUrl', usuariosController.atualizar);
app.delete('/api/usuarios/usuario/:idDaUrl', usuariosController.deletar);

app.get('/api/cadastro', cadastroController.listar);
app.post('/api/cadastro/cadastro', cadastroController.criarusuario);