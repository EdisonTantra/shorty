'use strict';
// import express package(commonJS syntax)
const express = require('express')

// instatiate the express app  
const app = express()
// Database config
const connection = require('./config/db.config')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))
// Routes Config
app.use(express.json({
  extended: false
})) //parse incoming request body in JSON format.
app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/url'))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`))
