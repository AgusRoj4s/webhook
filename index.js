//require('./src/database/index')
const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000
const routes = require('./src/routes/index');

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/', routes());
mongoose.connect('mongodb://localhost:27017/webhook', { useFindAndModify: false }, (err, res) => {
    if (err) throw err
    console.log('Conexion a la base de datos establecida...')

    app.listen(port, () => {
        console.log(`Servicio corriendo en el puerto ${port}`)
    })
})










/*

/*app.get('/', (req, res) => {
    res.send("Hola mundo: ")
})*/

/*app.get('/webhook/:name/:apellido', (req, res) => {
    const name = req.params.name;
    const apellido = req.params.apellido;
    res.send("Hola mundo: " + name + " " + apellido)
})*/

/*app.get('/webhook/user/:id', (req, res) => {
    let userID = req.params.id
    User.findById(userID, (err, user) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })
        if (!user) return res.status(404).send({ message: `El producto no existe` })
        res.status(200).send({ slackUserID: user.slackUserID, techStack: user.techStack })
    })
})

app.get('/webhook', (req, res) => {
    let tech = req.params.techStack
        //let result = tech.toString()
        //let user = new User()
    User.find({ techStack: 'FrontEnd' }, (err, user) => {
        if (err) {
            console.log("no se encontro")
        } else {
            console.log(user)
            res.send(user)
        }
    })
})

app.post('/webhook/user', (req, res) => {
    console.log('POST /webhook/user')
    console.log(req.body)
    let user = new User()
    user.slackUserID = req.body.slackUserID
    user.techStack = req.body.techStack

    user.save((err, userSaved) => {
        if (err) res.status(500).send({ message: `Error al guardar User en base de Datos: ${err}` })

        res.status(200).send({ user: userSaved })
    })
})

/*mongoose.connect('mongodb://localhost:27017/webhook', (err, res) => {
    if (err) throw err
    console.log('Conexion a la base de datos establecida...')

    app.listen(port, () => {
        console.log(`Servicio corriendo en el puerto ${port}`)
    })
})*/


/*
//require('dotenv').config()
const express = require('express');
const cors = require('cors');
//const routes = require('./routes/index.js');
//const globalConfig = require('./config/global');
//require('./database/index');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/', routes());
app.listen(globalConfig.port);*/