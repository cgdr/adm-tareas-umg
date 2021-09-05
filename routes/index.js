const { Router } = require('express')
const consultaUsuario = require('../controller/usuario')
const router = Router()

router.get('/', (req, res) => {
    res.json(
        res.json({"Bienvenida":"Bienvenido a la página de administración de tareas - UMG"})
    )
})

module.exports = router