const { Router } = require('express')
const router = Router()
const usuario = require('../controller/usuario')

router.get('/', (req, res) => {
    const iu = req.query.idUsuario
    usuario.consultaUsuario(iu).then(function(data){
        res.json(data)
    })
})

router.post('/', (req, res) => {
    const iuDatos = req.body
    usuario.agregaUsuario(iuDatos).then(function(data){
        res.json(data)
    })
})

router.put('/', (req, res) => {
    const iuDatos = req.body
    console.log(iuDatos)
    usuario.actualizaUsuario(iuDatos).then(function(data){
        res.json(data)
    })
})

router.delete('/', (req, res) => {
    const iuDatos = req.body
    console.log(iuDatos)
    usuario.eliminaUsuario(iuDatos).then(function(data){
        res.json(data)
    })
})

module.exports = router