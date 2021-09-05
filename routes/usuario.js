const { Router } = require('express')
const router = Router()
const usuario = require('../controller/usuario')

router.get('/', (req, res) => {
    const iu = req.query.idUsuario
    usuario(iu).then(function(data){
        res.json(data)
    })
})

router.post('/', (req, res) => {
    const jsUsuario = req.body.idUsuario
    console.log(jsUsuario)
    res.json({"MENSAJE":"SI SE PUDO"})
})

module.exports = router