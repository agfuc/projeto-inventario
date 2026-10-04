const db = require(`../config/db`);

const Produto = {
    // buscar todos os produtos cadastrados 
    getAll:(callback) => {
        const query = `SELECT * FROM produtos`;
        db.all(query, [], callback);
    },

    // inserir um novo produto em estoque 
    create: (nome_produto, quantidade, preco, callback) => {
        const query = `INSERT INTO produtos (nome_produto, quantidade, preco) VALUES (?,?,? )`;
        db.run(query, [nome_produto, quantidade, preco], function(err){
            callback(err, {id: this.lastID, nome_produto, quantidade, preco});
        });
    },
    // deletar um produto pelo id
    delete: (id, callback) => {
        const query = `DELETE FROM produtos WHERE id = ?`;
        db.run(query, [id], callback);
    }  
};

module.exports = Produto;