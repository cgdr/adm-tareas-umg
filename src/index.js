const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(require('../routes/index'))
app.use('/api/usuario', require('../routes/usuario'))

app.listen(app.get('port'), () => {
    console.log(`El servidor esta inicializado en el puerto ${port}`)
})