const sqlite3 = require ('sqlite3').verbose();
const path = require('path');

// caminho sqlite para a raiz do backend

const dbPath = path.resolve(__dirname, '../../database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
    if(err) {
        console.error('Erro ao conectar o banco de dados:', err.message);
    } else {
    console.log('Conectando ao banco de dados SQLite com sucesso.');

    }
});

// cria a tabela caso ela nao exista

db.run(`
    CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_produto TEXT NOT NULL,
        quantidade INTEGER NOT NULL,
        preco REAL NOT NULL
    )
`);

module.exports = db;