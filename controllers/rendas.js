exports.cadastrar = (req, res) => {
    req.db.collection('rendas').insert(req.body, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(201);
        }
    });
}