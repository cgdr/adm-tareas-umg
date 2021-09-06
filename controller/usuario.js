const { restart } = require('nodemon')
const conexion = require('../conexion/conexion')

function consultaUsuario(idUsuario='') {
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

function agregaUsuario(data){
    return new Promise (function (resolve, reject){
        const respuseta = validaData(data)
        if(respuseta == "OK"){
            const consulta = 
                `INSERT INTO usuario (idUsuario, contrasenia, nombre, apellido, correo, telefono, puesto, fecha, estatus) 
                VALUES ('${data.idUsuario}','${data.contrasenia}','${data.nombre}','${data.apellido}','${data.correo}',${data.telefono},'${data.puesto}','${data.fecha}','${data.estatus}')`;

            conexion.query(consulta, function(err, result){
                if(err) console.log("El error es: " + err)
                else{
                    resolve(result)
                }
            })
        }
        else
        {
            resolve({"mensaje":`No se envio data. ${respuseta}`})
        }
    })
}

function actualizaUsuario(data){
    return new Promise (function (resolve, reject){
        const respuseta = validaData(data)
        if(respuseta == "OK"){
            const consulta = 
            `UPDATE usuario SET 
            contrasenia = '${data.contrasenia}', estatus = '${data.estatus}',
            nombre = '${data.nombre}', apellido = '${data.apellido}',
            correo = '${data.correo}',telefono = ${data.telefono},
            puesto = '${data.puesto}', fecha = '${data.fecha}'
            WHERE idUsuario = '${data.idUsuario}'
            `;
            conexion.query(consulta, function(err, result){
                if(err) console.log("El error es: " + err)
                else{
                    resolve(result)
                }
            })
        }
        else
        {
            resolve({"mensaje":`No se envio data. ${respuseta}`})
        }
    })
}

function eliminaUsuario(data){
    return new Promise (function (resolve, reject){
        const respuseta = validaDataElimina(data)
        if(respuseta == "OK"){
            const consulta = 
            `UPDATE usuario SET 
            estatus = '${data.estatus}'
            WHERE idUsuario = '${data.idUsuario}'
            `;
            conexion.query(consulta, function(err, result){
                if(err) console.log("El error es: " + err)
                else{
                    resolve(result)
                }
            })
        }
        else
        {
            resolve({"mensaje":`No se envio data. ${respuseta}`})
        }
    })
}

function validaData(data){
    console.log(data.idUsuario)
    if(typeof data.idUsuario === 'undefined') return "ERROR IDUSUARIO"
    else if(typeof data.contrasenia == 'undefined') return "ERROR CONTRASENIA"
    else if(typeof data.nombre == 'undefined') return "ERROR NOMBRE"
    else if(typeof data.apellido == 'undefined') return "ERROR APELLIDO"
    else if(typeof data.correo == 'undefined') return "ERROR CORREO"
    else if(typeof data.telefono == 'undefined') return "ERROR TELEFONO"
    else if(typeof data.puesto == 'undefined') return "ERROR PUESTO"
    else if(typeof data.fecha == 'undefined') return "ERROR FECHA"
    else if(typeof data.estatus == 'undefined') return "ERROR ESTATUS"
    else return "OK"
}

function validaDataElimina(data){
    if(typeof data.idUsuario === 'undefined') return "ERROR IDUSUARIO"
    else if(typeof data.estatus == 'undefined') return "ERROR ESTATUS"
    else return "OK"
}
module.exports = {consultaUsuario, agregaUsuario, actualizaUsuario, eliminaUsuario}