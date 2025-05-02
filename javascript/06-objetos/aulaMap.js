const items = [
    {
        img:"https://images.vexels.com/media/users/3/147700/isolated/preview/abc2c64b18ebdfecd54c03c9c77d9187-desenho-animado-da-camisa-de-futebol-da-copa-do-mundo-do-brasil.png",
        nome: "Camiseta",
        preco: "R$ 49.99",
        frete: true
    },
    {
        img:"https://images.vexels.com/media/users/3/147700/isolated/preview/abc2c64b18ebdfecd54c03c9c77d9187-desenho-animado-da-camisa-de-futebol-da-copa-do-mundo-do-brasil.png",
        nome: "Camiseta",
        preco: "R$ 199.90",
        frete: true
    },
    {
        img:"https://images.vexels.com/media/users/3/147700/isolated/preview/abc2c64b18ebdfecd54c03c9c77d9187-desenho-animado-da-camisa-de-futebol-da-copa-do-mundo-do-brasil.png",
        nome: "Camiseta",
        preco:"R$ 120.00",
        frete: true
    }
]

let tbody = document.getElementById('tabela-produtos');

items.map((item) =>{
    tbody.innerHTML +=  `
    <tr><td><img src="${item.img}" width="100px"></td>
    <td>${item.nome}</td>
    <td>${item.preco}</td>
    ${item.frete ?`<td class="text-green-600 font-bold">Sim</td>` : `<td class="text-red-600 font-bold"></td>`}
    </tr>`
})
