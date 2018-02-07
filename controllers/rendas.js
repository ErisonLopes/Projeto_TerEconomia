exports.cadastrar = (req, res) => {
    req.db.collection('rendas').insert(req.body,idDoUsuario, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(201);
        }
    });
}

exports.listar = (req, res) => {
    let busca = {
        idDoUsuario: req.params.idDaUrl
    }

    req.db.collection('rendas').find(busca).toArray((err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(201);
        }
    });
}