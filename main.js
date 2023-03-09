let livros = [];

function perguntaNome() {
    let nome = window.prompt("Qual o seu nome?");
    let elementoNome = document.querySelector("#elemento_nome");
    elementoNome.innerHTML = nome;
}

function adicionarLivro(event) {
    // Previnindo comportamento padrão da página
    event.preventDefault();

    // Puxando informações de entrada do formulário
    let tituloLivro = document.querySelector("#nome_livro").value;
    let autorLivro = document.querySelector("#autores_livro").value;
    let paginasLidas = document.querySelector("#paginas_lidas").value;
    let totalPaginas = document.querySelector("#total_paginas").value;

    let livroCompleto = {
        titulo: tituloLivro, 
        autor: autorLivro,
        paginasLidas: paginasLidas,
        totalPaginas: totalPaginas
    }

    livros.push(livroCompleto);
    console.log(livros);
    
    // Cálculos de páginas
    let paginasFaltantes = calculoPaginasFaltantes(totalPaginas,paginasLidas);
    let percentualPaginas = calculoPercentualLeitura(paginasLidas, totalPaginas);
    
    imprimirNaTela(paginasLidas, paginasFaltantes, percentualPaginas);
}


function calculoPaginasFaltantes(totalPaginas, paginasLidas){
    let paginasFaltantes = totalPaginas - paginasLidas;
    return paginasFaltantes;
}

function calculoPercentualLeitura(paginasLidas, totalPaginas){
    let percentualPaginas = paginasLidas * 100 / totalPaginas;
    return percentualPaginas;
}

function imprimirNaTela(paginasLidas, paginasFaltantes, percentualPaginas) {
    // Parágrafo de páginas lidas
    let elementoPaginasLidas = document.querySelector("#elemento_paginas_lidas");
    elementoPaginasLidas.innerHTML = paginasLidas;
    // Parágrafo de páginas faltantes
    let elementoPaginasFaltantes = document.querySelector("#elemento_paginas_faltantes");
    elementoPaginasFaltantes.innerHTML = paginasFaltantes;
    // Parágrafo de porcentagem de páginas para meta
    let elementoPorcentagemPaginas = document.querySelector("#elemento_porcentagem_paginas");
    elementoPorcentagemPaginas.innerHTML = percentualPaginas.toFixed(2) + "%";
}