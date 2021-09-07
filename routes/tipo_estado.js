const { Router } = require('express')
const router = Router()
const tipoEstado = require('../controller/tipo_estado')

router.get('/', (req, res) => {
    const ite = req.query.idTipoEstado
    tipoEstado.consultaTipoEstado(ite).then(function(data){
        res.json(data)
    })
})

router.post('/', (req, res) => {
    const iuTipoEstado = req.body
    tipoEstado.agregarTipoEstado(iuTipoEstado).then(function(data){
        res.json(data)
    })
})

router.put('/', (req, res) => {
    const iuTipoEstado = req.body
    tipoEstado.actualizarTipoEstado(iuTipoEstado).then(function(data){
        res.json(data)
    })
})

router.delete('/', (req, res) => {
    const iuTipoEstado = req.body
    tipoEstado.eliminarTipoEstado(iuTipoEstado).then(function(data){
        res.json(data)
    })
})

module.exports = router