const API_URL = 'http://localhost:3000/api/produtos';

// Função para buscar e renderizar os produtos
async function carregarProdutos() {
    try {
        const resposta = await fetch(API_URL);
        if (!resposta.ok) {
            throw new Error('Erro ao buscar produtos');
        }
        
        const produtos = await resposta.json();
        const tabela = document.getElementById('tabelaProdutos');
        tabela.innerHTML = '';

        produtos.forEach(produto => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${produto.id}</td>
                <td>${produto.nome_produto}</td>
                <td>${produto.quantidade}</td>
                <td>R$ ${Number(produto.preco).toFixed(2)}</td>
                <td>
                    <button class="btn-excluir" onclick="deletarProduto(${produto.id})">Excluir</button>
                </td>
            `;
            tabela.appendChild(tr);
        });
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

// Evento para submeter o formulário de cadastro
document.getElementById('produtoForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome_produto = document.getElementById('nome_produto').value;
    const quantidade = document.getElementById('quantidade').value;
    const preco = document.getElementById('preco').value;

    try {
        const resposta = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome_produto, quantidade, preco })
        });

        if (resposta.ok) {
            document.getElementById('produtoForm').reset();
            carregarProdutos();
        } else {
            alert('Erro ao cadastrar produto.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
});

// Função para excluir um produto
async function deletarProduto(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        try {
            const resposta = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });

            if (resposta.ok) {
                carregarProdutos();
            } else {
                alert('Erro ao excluir produto.');
            }
        } catch (error) {
            console.error('Erro ao excluir:', error);
        }
    }
}

// Carregar os produtos ao abrir a página
carregarProdutos();