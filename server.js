const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended : true}))
app.use(express.json())

const PORT = 3000 || process.env.PORT 

app.listen( PORT, () => console.log('http://localhost:3000'))

