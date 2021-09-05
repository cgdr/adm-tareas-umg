const mysql = require("mysql")

const conexion = mysql.createConnection(
    {
        host: 'mysql-49072-0.cloudclusters.net',
        user: 'admin',
        password: 'iMxMi63M',
        database: 'administrador_de_tareas_umg',
        port: 10240
    }
)

module.exports = conexion