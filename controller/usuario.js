const { restart } = require('nodemon')
const conexion = require('../conexion/conexion')

module.exports = (idUsuario='') => {
    return new Promise (function (resolve, reject){
        const consulta = idUsuario == '' ? `SELECT * FROM usuario` : "SELECT * FROM usuario WHERE IDUSUARIO = '" + idUsuario + "'"
        conexion.query(consulta, function(err, result){
            if(err) console.log("El error es: " + err)
            else{
                resolve(result)
            }
        })
    })
}