// Dados dos itens do cardápio, com alguns itens repetidos
const itensCardapio = [
    { categoria: "Lanches", nome: "X-infarto", descricao: "Pão, alface, tomate, hamburguer, calabresa, frango, milho, ervilha, catupiri, cheddar, salsicha, ovo frito, batata palha...", preco: "R$ 55,00", imagem: "img/x-infarto.jpg" },
    { categoria: "Pizzas", nome: "Pizza \"Do Jeito que o Chefe Quiser\"", descricao: "Uma surpresa do chef! Ingredientes variados escolhidos na hora para uma experiência única.", preco: "R$ 89,90", imagem: "img/images.jpg" },
    { categoria: "Bebidas", nome: "Bebida \"Vai na Fé\"", descricao: "Energetico e bebida sob falta de estoque, se não gostou, não compre.", preco: "R$ 12,00", imagem: "img/imagesa.jpg" },
    { categoria: "Lanches", nome: "X-infarto", descricao: "Pão, alface, tomate, hamburguer, calabresa, frango, milho, ervilha, catupiri, cheddar, salsicha, ovo frito, batata palha...", preco: "R$ 55,00", imagem: "img/x-infarto.jpg" }, // Repetido
    { categoria: "Pizzas", nome: "Pizza \"Do Jeito que o Chefe Quiser\"", descricao: "Uma surpresa do chef! Ingredientes variados escolhidos na hora para uma experiência única.", preco: "R$ 89,90", imagem: "img/images.jpg" } // Repetido
];

// Filtra os itens repetidos com base no nome e categoria
const itensUnicos = [];
itensCardapio.forEach(item => {
    if (!itensUnicos.some(existingItem => existingItem.nome === item.nome && existingItem.categoria === item.categoria)) {
        itensUnicos.push(item);
    }
});

// Geração do HTML dinâmico para os itens do cardápio
let cardapioHTML = "";

itensUnicos.forEach(item => {
    cardapioHTML += `
        <div class="${item.categoria.toLowerCase()}">
            <h2>${item.categoria}</h2>
            <article>
                <img src="${item.imagem}" alt="${item.nome}">
                <h1>${item.nome}</h1>
                <p>${item.descricao}</p>
                <p>${item.preco}</p>
            </article>
        </div>
    `;
});

// Injetar o HTML gerado na div com id "cardapio"
document.getElementById("cardapio").innerHTML = cardapioHTML;
