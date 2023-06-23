const path = require('path')
const express = require('express')
const viewRouter = require('./routes/viewRoutes')

const app = express()

app.set('view engine' , 'ejs')
app.set('views' , path.join( __dirname , 'views'))

app.use('/' , viewRouter)

module.exports = app