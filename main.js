let nome = window.prompt("Qual o seu nome?");
let elementoNome = document.querySelector("#elemento_nome");
elementoNome.innerHTML = nome;

function adicionarLivro(event) {
    let tituloLivro = document.querySelector("#nome_livro").value;
    let autoresLivro = document.querySelector("#autores_livro").value;
    let paginasLidas = document.querySelector("#paginas_lidas").value;
    let totalPaginas = document.querySelector("#total_paginas").value;

    let elementoPaginasLidas = document.querySelector("#elemento_paginas_lidas");
    elementoPaginasLidas.innerHTML = paginasLidas;

    let elementoPaginasFaltantes = document.querySelector("#elemento_paginas_faltantes");

    let paginasFaltantes = totalPaginas - paginasLidas;
    elementoPaginasFaltantes.innerHTML = paginasFaltantes;

    let percentualPaginas = paginasLidas * 100 / totalPaginas;
    let elementoPorcentagemPaginas = document.querySelector("#elemento_porcentagem_paginas");
    elementoPorcentagemPaginas.innerHTML = percentualPaginas.toFixed(2) + "%";

    event.preventDefault();
}