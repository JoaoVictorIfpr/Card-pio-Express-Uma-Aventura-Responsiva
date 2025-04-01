// Dados dos itens do cardápio, com alguns itens repetidos
const itensCardapio = [
    { categoria: "Lanches", nome: "X-infarto", descricao: "Pão, alface, tomate, hamburguer, calabresa, frango, milho, ervilha, catupiri, cheddar, salsicha, ovo frito, batata palha...", preco: "R$ 55,00", imagem: "img/x-infarto.jpg" },
    { categoria: "Pizzas", nome: "Pizza \"Do Jeito que o Chefe Quiser\"", descricao: "Uma surpresa do chef! Ingredientes variados escolhidos na hora para uma experiência única.", preco: "R$ 89,90", imagem: "img/images.jpg" },
    { categoria: "Bebidas", nome: "Bebida \"Vai na Fé\"", descricao: "Energético e bebida sob falta de estoque, se não gostou, não compre.", preco: "R$ 12,00", imagem: "img/imagesa.jpg" },
    { categoria: "Lanches", nome: "X-infarto", descricao: "Pão, alface, tomate, hamburguer, calabresa, frango, milho, ervilha, catupiri, cheddar, salsicha, ovo frito, batata palha...", preco: "R$ 55,00", imagem: "img/x-infarto.jpg" }, // Repetido
    { categoria: "Pizzas", nome: "Pizza \"Do Jeito que o Chefe Quiser\"", descricao: "Uma surpresa do chef! Ingredientes variados escolhidos na hora para uma experiência única.", preco: "R$ 89,90", imagem: "img/images.jpg" } // Repetido
];

// Removendo itens repetidos com Set
const itensUnicos = Array.from(new Set(itensCardapio.map(item => JSON.stringify(item))))
    .map(item => JSON.parse(item));

// Organizando os itens por categoria
const categorias = itensUnicos.reduce((acc, item) => {
    if (!acc[item.categoria]) {
        acc[item.categoria] = [];
    }
    acc[item.categoria].push(item);
    return acc;
}, {});

// Geração do HTML dinâmico agrupado por categoria
let cardapioHTML = "";

Object.keys(categorias).forEach(categoria => {
    cardapioHTML += `<h2>${categoria}</h2><div class="categoria">`;
    
    categorias[categoria].forEach(item => {
        cardapioHTML += `
            <article>
                <img src="${item.imagem}" alt="${item.nome}">
                <h1>${item.nome}</h1>
                <p>${item.descricao}</p>
                <p><strong>${item.preco}</strong></p>
            </article>
        `;
    });

    cardapioHTML += `</div>`; // Fecha a div da categoria
});

// Injetar o HTML gerado na div com id "cardapio"
document.getElementById("cardapio").innerHTML = cardapioHTML;


