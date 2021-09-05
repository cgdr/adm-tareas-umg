const { restart } = require('nodemon')
//const pool = require('../conexion/conexion')
const conexion = require('../conexion/conexion')

/*module.exports = (idUsuario) => {
    return new Promise (function (resolve, reject){
            pool.connect().then(() =>{
                const consulta = idUsuario == '' ? `SELECT * FROM USUARIO` : "SELECT * FROM USUARIO WHERE IDUSUARIO = '" + idUsuario + "'"
                pool.request().query(consulta, (err, result) => {
                    if(err) console.log(err)
                    else{
                        resolve(result.recordset)
                    } 
                })
            })
        }
    )
}*/

module.exports = (idUsuario) => {
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