// Lista de itens do cardápio
const itensCardapio = [
    "Pizza de Calabresa",
    "Pizza de Mussarela",
    "Pizza de Calabresa",  // Repetido
    "Lasanha",
    "Pizza de Mussarela",  // Repetido
    "Pão de Alho"
];

// Remover itens repetidos, mantendo apenas a primeira ocorrência
const itensUnicos = [...new Set(itensCardapio)];

// Criar uma string HTML para os itens do cardápio
let listaItensHTML = "<ul>";  // Inicia a lista HTML
itensUnicos.forEach(item => {
    listaItensHTML += `<li>${item}</li>`;
});
listaItensHTML += "</ul>";  // Finaliza a lista HTML

// Inserir os itens no HTML na div com id "cardapio"
document.getElementById("cardapio").innerHTML = listaItensHTML;
