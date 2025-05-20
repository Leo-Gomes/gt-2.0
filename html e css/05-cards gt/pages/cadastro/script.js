const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const bairro = document.getElementById('bairro');
const estado = document.getElementById('estado');
const cidade = document.getElementById('cidade');

function buscarCep() {
    if (cep.value.length == 8) {
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
            .then(res => res.json())
            .then(res => {
                rua.value = res.logradouro;
                bairro.value = res.bairro;
                cidade.value = res.localicade;
                estado.value = res.uf;
            })
    }
}