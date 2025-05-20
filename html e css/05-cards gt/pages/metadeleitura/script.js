const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const booksContainer = document.getElementById('booksContainer')
const metaLivros = document.getElementById('metaLivros')

searchButton.addEventListener('click', (event) => {
    event.preventDefault()
    const query = searchInput.value.toLowerCase().trim();
    if (!query) return;
    fetchBooks(query)

})

function fetchBooks(query) {
    //     const livros = [
    //     {
    //         img: '../../assets/livro1.jpg',
    //         titulo: 'Ponto de Inflexão',
    //         categoria: 'Desenvolvimento Pessoal',
    //         preco: 69.99,
    //         desconto: true
    //     },
    //     {
    //         img: '../../assets/livro2.jpg',
    //         titulo: 'O poder do aprendizado contínuo',
    //         categoria: 'Desenvolvimento Pessoal',
    //         preco: 69.99,
    //         desconto: true
    //     },
    //     {
    //         img: '../../assets/livro3.jpg',
    //         titulo: 'Mais esperto que o Diabo 2',
    //         categoria: 'Desenvolvimento Pessoal',
    //         preco: 69.99,
    //         desconto: false
    //     },
    //     {
    //         img: '../../assets/livro4.jpg',
    //         titulo: 'O que se come no céu',
    //         categoria: 'Desenvolvimento Pessoal',
    //         preco: 69.99,
    //         desconto: true
    //     },
    //     {
    //         img: '../../assets/livro5.jpg',
    //         titulo: 'Psicologia Financeira',
    //         categoria: 'Desenvolvimento Pessoal',
    //         preco: 69.99,
    //         desconto: true
    //     },
    //     {
    //         img: '../../assets/livro6.jpg',
    //         titulo: 'A meta',
    //         categoria: 'Desenvolvimento Pessoal',
    //         preco: 69.99,
    //         desconto: false
    //     }
    // ]

    fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&language=por`)
        .then(res => res.json())
        .then(data => {
            const livrosFiltrados = data.docs.filter(item =>
                item.language.includes('por') && !item.language.includes('eng')
            ).slice(0, 10)

            if (livrosFiltrados.length === 0) {
                booksContainer.innerHTML = '<h1>Nenhum livro encontrado</h1>'
                return
            }

            booksContainer.innerHTML = livrosFiltrados.map(item => {
                const uriImage = item.cover_i ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg ` : `https://placehold.co/400x600?text=${encodeURIComponent(item.title.replace(`${/\s{3}/g}`, '\n'))}`
                return `
                <div class="div-card w-[60px]">
                    <div class="div-img">
                        <img src=${uriImage} alt="capa do livro" class="w-[150px] h-auto mb-5">
                        <p class="tag-p text-xs">frete grátis</p>
                    </div>
                    <div class="div-texto">
                        <div class="div-titulo">
                            <h1 clas="truncate text-xs">${item.title}</h1>
                        </div>
                        <h2 class="my-2">${item.author_name}</h2>
                        <button onclick="adicionarLivro('${uriImage}')" class="w-full p-1 border rounded-md bg-blue-700"><i class="fa-solid fa-plus" style="color: #ffffff;"></i></button>
                    </div>
                </div>
            
            
            `


            }).join('')
        })
        .catch(err => console.log(err))

}
function adicionarLivro(capa) {
    const livrosSalvos = JSON.parse(localStorage.getItem("metaLivros")) || []
    if(!livrosSalvos.includes(capa)){
        metaLivros.innerHTML += `
            <div class="div-card w-60px relative">
            <button class="w-10 h-10 rounded-full bg-red-700 absolute z-1"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
                 <div class="div-img">
                        <img src='${capa}' alt="capa do livro" class="w-[150px] h-auto">
                </div>
            </div>
        `    
        livrosSalvos.push(capa)
    }
    localStorage.setItem("metaLivros", JSON.stringify(livrosSalvos))
}

document.addEventListener('DOMContentLoaded', carregarLivrosSalvos)

function carregarLivrosSalvos (){
    const livrosSalvos = JSON.parse(localStorage.getItem("metaLivros")) || [];

    livrosSalvos.forEach(capa => {
        metaLivros.innerHTML += `
        <div class="div-card w-60px relative group">
        <button class="w-10 h-10 rounded-full bg-red-700 absolute right-0 group z-1 hidden hover:block"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
             <div class="div-img">
                    <img src=${capa} alt="capa do livro" class="w-[150px] h-auto">
            </div>
        </div>
    `
    })
}

function removerLivro(capa){
    const livrosSalvos = JSON.parse(localStorage.getItem("metaLivros")) || [];
    const novaLista = livrosSalvos.filter(capaSalva => capaSalva !== capa);
    localStorage.setItem('metaLivros', JSON.stringify(novaLista));

    carregarLivrosSalvos()
}