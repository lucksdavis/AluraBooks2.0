let livros = []
let livrosComDesconto = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    livrosComDesconto = aplicarDesconto(livros)
    console.table(livros)
    console.table(livrosComDesconto)
    exibirOsLivrosNaTela(livrosComDesconto)
}
