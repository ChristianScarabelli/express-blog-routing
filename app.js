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
app.get('/posts/:slug', (req, res) => {
    const slug = req.params.slug
    console.log(`Ecco la pizza con slug: ${slug}`)

    const post = posts.find((p) => p.slug === slug)

    res.json(post)
})

// rotta Store => creare un nuovo elemento
app.post('/posts', (req, res) => {
    const slug = req.params.slug
    res.send('Creo un nuovo post')
})

// rotta Update => modificare interamente un elemento
app.put('/posts/:slug', (req, res) => {
    const slug = req.params.slug
    res.send(`Modifico interamente il post con slug: ${slug}`)
})

// rotta Modify => modificare parzialmente un elemento
app.patch('/posts/:slug', (req, res) => {
    const slug = req.params.slug
    res.send(`Modifico parzialmente il post con slug: ${slug}`)
})

// rotta Destroy => eliminare un elemento
app.delete('/posts/:slug', (req, res) => {
    const slug = req.params.slug
    res.send(`Elimino il post con slug: ${slug}`)
})

// inizializzo il mio server alla porta
app.listen(port, () => {
    console.log(`Il server del mio blog è in ascolto della porta: ${port}`)
})