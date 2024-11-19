// console.log('express-blog-routing')

// importo express
const express = require('express')
const app = express()
const port = 3000

// importo l'array di oggetti posts
const posts = require('./posts.js')

// rendo pubblica/accessibile al server la directory public
app.use(express.static('public'))

// creo la rotta principale del mio server
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

// inizializzo il mio server alla porta
app.listen(port, () => {
    console.log(`Il server del mio blog è in ascolto della porta: ${port}`)
})