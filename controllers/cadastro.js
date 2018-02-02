var ObjectID = require('mongodb').ObjectID;

exports.criarusuario = function(req, res){
    var usuario = req.body;

    req.db.collection('cadastro').save(usuario, function(err, result) = {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(201);
        }
    });
}