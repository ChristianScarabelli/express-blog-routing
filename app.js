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

// operazioni CRUD secondo convenzioni REST della risorsa posts

// rotta Index => visualizzare tutti gli elementi
app.get('/posts', (req, res) => {
    res.json(posts)
})

// rotta Show => visualizzare un elemento
app.get('/posts:slug', (req, res) => {

})

// rotta Store => creare un nuovo elemento
app.post('/posts', (req, res) => {

})

// rotta Update => modificare interamente un elemento
app.put('/posts:slug', (req, res) => {

})

// rotta Modify => modificare parzialmente un elemento
app.patch('/posts:slug', (req, res) => {

})

// rotta Destroy => eliminare un elemento
app.delete('/posts:slug', (req, res) => {

})

// inizializzo il mio server alla porta
app.listen(port, () => {
    console.log(`Il server del mio blog è in ascolto della porta: ${port}`)
})