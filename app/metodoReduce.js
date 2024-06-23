function calcularValorTotalDeLivrosDisponiveis(livrosFiltrados) {
    return livrosComDesconto.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}