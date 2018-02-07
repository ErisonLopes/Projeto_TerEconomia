// Função para testar o POST na minha rota '/api/login'
exports.logar = (req, res) => {
    
    req.db.collection('usuarios').find(req.body).toArray( (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            if(result.length == 0){            
                res.sendStatus(404);                
            }else{ 
                idDoUsuario = result._id;               
                res.send(result);
            }
        }
    });
}