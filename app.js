const express = require('express')
const authRouter = require('./routes/auth')
const positionRouter = require('./routes/position')
const orderRouter = require('./routes/order')
const categoryRouter = require('./routes/category')
const analyticsRouter = require('./routes/analytics')
const key = require('./config/keys')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express()

mongoose.connect(key.mongoURI)
    .then(
        () => console.log('MongoDB connected.')
    )
    .catch(
        (err) => console.log(err)
    )

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRouter)
app.use('/api/analytics', analyticsRouter)
app.use('/api/category', categoryRouter)
app.use('/api/order', orderRouter)
app.use('/api/position', positionRouter)

module.exports = app