const fs = require("fs")

function getTodosLivros() {
    return JSON.parse( fs.readFileSync("livros.json") )
}

function getLivroPorId(id) {
    const livro = JSON.parse(fs.readFileSync("livros.json"))

const livroFiltrado = livro.filter( livro => livro.id === id) [0]
    return livroFiltrado
}


module.exports =  {
    getTodosLivros,
    getLivroPorId
}