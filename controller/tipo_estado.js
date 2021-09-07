const conexion = require('../conexion/conexion')

function consultaTipoEstado(idTipoEstado='') {
    return new Promise (function (resolve, reject){
        const consulta = idTipoEstado == '' ? `SELECT * FROM tipo_estado` : "SELECT * FROM tipo_estado WHERE idTipoEstado = '" + idTipoEstado + "'"
        conexion.query(consulta, function(err, result){
            if(err) resolve({"error":err})
            else{
                console.log(result)
                resolve(result)
            }
        })
    })
}

function agregarTipoEstado(data){
    return new Promise (function (resolve, reject){
        const respuseta = validaData(data)
        if(respuseta == "OK"){
            const consulta = 
                `INSERT INTO tipo_estado (nombre, descripcion, idUsuario, estatus) 
                VALUES ('${data.nombre}','${data.descripcion}','${data.idUsuario}','${data.estatus}')`;

            conexion.query(consulta, function(err, result){
                if(err) resolve({"error":err})
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

function actualizarTipoEstado(data){
    return new Promise (function (resolve, reject){
        const respuseta = validaData(data)
        if(respuseta == "OK"){
            const consulta = 
            `UPDATE tipo_estado SET 
            nombre = '${data.nombre}', descripcion = '${data.descripcion}',
            idUsuario = '${data.idUsuario}', estatus = '${data.estatus}'
            WHERE idTipoEstado = '${data.idTipoEstado}'
            `;
            conexion.query(consulta, function(err, result){
                if(err) resolve({"error":err})
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

function eliminarTipoEstado(data){
    return new Promise (function (resolve, reject){
        const respuseta = validaDataElimina(data)
        if(respuseta == "OK"){
            const consulta = 
            `UPDATE tipo_estado SET 
            estatus = '0'
            WHERE idTipoEstado = '${data.idTipoEstado}'
            `;
            conexion.query(consulta, function(err, result){
                if(err) resolve({"error":err})
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
    if(typeof data.nombre === 'undefined') return "ERROR NOMBRE"
    else if(typeof data.descripcion == 'undefined') return "ERROR DESCRIPCION"
    else if(typeof data.idUsuario == 'undefined') return "ERROR IDUSUARIO"
    else if(typeof data.estatus == 'undefined') return "ERROR ESTATUS"
    else return "OK"
}

function validaDataElimina(data){
    if(typeof data.idTipoEstado === 'undefined') return "ERROR IDTIPOESTADO"
    else return "OK"
}


module.exports = {consultaTipoEstado, agregarTipoEstado, actualizarTipoEstado, eliminarTipoEstado}