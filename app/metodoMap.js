function aplicarDesconto(livros) {
    const desconto = 0.3;
    return livros.map(livro => {
        const precoComDesconto = (livro.preco - (livro.preco * desconto)).toFixed(2);
        return {...livro, preco: parseFloat(precoComDesconto)};
    });
}
