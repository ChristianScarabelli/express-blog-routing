// console.log('express-blog-routing')

// importo express
const express = require('express')
const app = express()
const port = 3000

// importo il router delle rotte della risorsa posts
const postsRouter = require('./routers/posts.js')

// importo l'array di oggetti posts // con il router non serve più importarlo quì ma nel file con le sue rotte
// const posts = require('./posts.js')

// rendo pubblica/accessibile al server la directory public
app.use(express.static('public'))

// creo la rotta principale del mio server
app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

// utilizzo le rotte della risorsa posts e inizializzo il prefisso /posts per tutte le rotte
app.use('/posts', postsRouter)

// inizializzo il mio server alla porta
app.listen(port, () => {
    console.log(`Il server del mio blog è in ascolto della porta: ${port}`)
})