const express = require('express')      // importo express
const router = express.Router()         // inizializzo la funzione router di express
const posts = require('../posts.js')    // richiamo l'array di oggetti della risorsa post quì nel router, così si impostano le sue rotte

// operazioni CRUD secondo convenzioni REST della risorsa posts

// rotta Index => visualizzare tutti gli elementi
router.get('/', (req, res) => {
    res.json(posts)
})

// rotta Show => visualizzare un elemento
router.get('/:slug', (req, res) => {
    const slug = req.params.slug
    console.log(`Ecco la pizza con slug: ${slug}`)

    const post = posts.find((p) => p.slug === slug)

    res.json(post)
})

// rotta Store => creare un nuovo elemento
router.post('/', (req, res) => {
    const slug = req.params.slug
    res.send('Creo un nuovo post')
})

// rotta Update => modificare interamente un elemento
router.put('/:slug', (req, res) => {
    const slug = req.params.slug
    res.send(`Modifico interamente il post con slug: ${slug}`)
})

// rotta Modify => modificare parzialmente un elemento   
router.patch('/:slug', (req, res) => {
    const slug = req.params.slug
    res.send(`Modifico parzialmente il post con slug: ${slug}`)
})

// rotta Destroy => eliminare un elemento
router.delete('/:slug', (req, res) => {
    const slug = req.params.slug
    res.send(`Elimino il post con slug: ${slug}`)
})

module.exports = router