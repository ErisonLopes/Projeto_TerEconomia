// Função para testar o POST na minha rota '/api/usuarios/usuario'
exports.logar = (req, res) => {

    req.db.collection('usuarios').find(req.body).toArray( (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            if(result.length == 0){
                res.sendStatus(404);
                window.location = 'index.html';
            }else{
                res.send(result[0]);
            }
        }
    });
}