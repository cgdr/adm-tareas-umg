const { Router } = require('express')
const consultaUsuario = require('../controller/usuario')
const router = Router()

router.get('/test', (req, res) => {
    res.json(
    )
})

module.exports = router