// console.log('express-blog-routing')

// importo express
const express = require('express')
const app = express()
const port = 3000

// importo l'array di oggetti posts
const posts = require('./posts.js')

// rendo pubblica/accessibile al server la directory public
app.use(express.static('public'))