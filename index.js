// Importando os módulos/dependências/bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');

// Importando os controllers
const usuariosController = require('./controllers/usuarios.js');
const loginController = require('./controllers/login.js');

var cors = require('cors');

// Instanciando o express
const app = express();
app.use(cors());

// Aplicando o body parser
app.use(bodyParser.json());

// Conecta a nossa api ao banco de dados
app.use(expressMongoDb('mongodb://localhost:27017/cadastros'));


// Inicializando o servidor
app.listen(3000, () => {
    console.log('Servidor ligado. Acesse em http://localhost:3000');
});

// Rotas
// app.get('/api/usuarios', usuariosController.listar); //nao existe!
app.post('/api/usuarios', usuariosController.criar);

app.put('/api/usuarios/:idDaUrl', usuariosController.atualizar);
app.delete('/api/usuarios/:idDaUrl', usuariosController.deletar);


app.post('/api/login', loginController.logar);

app.post('/api/rendas', rendasController.criar);