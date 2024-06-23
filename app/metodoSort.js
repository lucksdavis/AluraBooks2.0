let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livrosComDesconto.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}