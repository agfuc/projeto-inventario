const Produto = require('../models/produtoModel');

const produtoController = {
    //listar todos os produtos
    listar: (req,res) => {
        Produto.getAll((err,rows) => {
            if(err) {
                return res.status(500).json({ erro: err.message });
            }
            res.json(rows);
        });
    },

    //criar novo produto 
    criar: (req, res) => {
        const {nome_produto, quantidade, preco } = req.body;
        
        if (!nome_produto || quantidade === undefined || preco === undefined){
            return res.status(400).json({ erro: 'Preencha todos os campos obrigatorios.' });
        }

        Produto.create(nome_produto, quantidade, preco, (err, novoProduto) => {
            if(err){
                return res.status(500).json({ erro: err.message });
            }
            
        res.status(201).json(novoProduto);
        });
    },

        //deletar um produtos
        deletar: (req, res) => {
            const { id } = req.params;
            Produto.delete(id, (err) => {
                if(err) {
                    return res.status(500).json({ erro: err.message });
                }
                res.json({ mensagem: 'Produto removido com sucesso. '});
            });
        
    }
};

module.exports = produtoController;
