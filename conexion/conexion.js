const mysql = require("mysql")

/*const pool = new mysql.ConnectionPool( 
    {
        server : "DESKTOP-BQ43HQN\\SQLEXPRESS",
        database : "administrador_de_tareas_umg",
        port: 1433,
        driver: "msnodesqlv8",
        options: {
            trustedConnection: true
        }
    }
)*/

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