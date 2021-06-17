const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const routes = require('./src/routes/index');

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/', routes());

mongoose.connect('mongodb+srv://puzzle:<puzzle123>@cluster0.i7cpz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err
    console.log('Conexion a la base de datos establecida...')

    app.listen(port, () => {
        console.log(`Servicio corriendo en el puerto ${port}`)
    })
})