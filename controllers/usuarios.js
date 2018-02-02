// Função para testar o POST na minha rota '/api/usuarios/usuario'
exports.criar = (req, res) => {
    req.db.collection('usuarios').insert(req.body, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(201);
        }
    });
}

exports.atualizar = (req, res) => {
    let id = req.params.idDaUrl;

    req.db.collection('usuarios').update({"_id": ObjectID(id)}, req.body, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}

exports.deletar = (req, res) => {
    let id = req.params.idDaUrl;

    req.db.collection('usuarios').remove({"_id": ObjectID(id)}, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}