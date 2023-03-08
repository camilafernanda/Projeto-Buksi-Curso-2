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
    let autoresLivro = document.querySelector("#autores_livro").value;
    let paginasLidas = document.querySelector("#paginas_lidas").value;
    let totalPaginas = document.querySelector("#total_paginas").value;

    // Inserindo informações da quantidade de páginas lidas
    let elementoPaginasLidas = document.querySelector("#elemento_paginas_lidas");
    elementoPaginasLidas.innerHTML = paginasLidas;

    // Inserindo informações da quantidade de páginas faltantes
    let elementoPaginasFaltantes = document.querySelector("#elemento_paginas_faltantes");

    let paginasFaltantes = calculoPaginasFaltantes(totalPaginas,paginasLidas);
    elementoPaginasFaltantes.innerHTML = paginasFaltantes;

    let elementoPorcentagemPaginas = document.querySelector("#elemento_porcentagem_paginas");
    elementoPorcentagemPaginas.innerHTML = percentualPaginas.toFixed(2) + "%";
}

function calculoPaginasFaltantes(totalPaginas, paginasLidas){
    // Cálculo de páginas faltantes
    let paginasFaltantes = totalPaginas - paginasLidas;
    return paginasFaltantes;
}

function calculoPercentualLeitura(){
    // Cálculo de percentual de páginas lidas
    let percentualPaginas = paginasLidas * 100 / totalPaginas;
}