const express = require('express');
const cors = require('cors');

const produtoRoutes = require('./routes/produtoRoutes');

const app = express();

const PORTA = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', produtoRoutes);

// Rota inicial
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API do Sistema de Inventário funcionando com sucesso!'
    });
});

// Iniciar servidor
app.listen(PORTA, () => {
    console.log(`Servidor na porta ${PORTA}`);
});
