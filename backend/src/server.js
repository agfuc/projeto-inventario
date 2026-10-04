const express = require('express');
const cors = require('cors');
const produtoRoutes = require('./routes/produtoRoutes');



const app = express();
app.use(cors()); 
app.use(express.json());
const PORTA = process.env.PORT || 3000;

//middleware para entender dados em JSON enviados nas requisiçoes

app.use(express.json());

//usar as rotas dos produtos
app.use('/api', produtoRoutes);

//rota de teste incial 
app.get('/', (req, res) => {
    res.json({mensagem: 'API do Sistema de Inventário funcionando com sucesso!'});
});

//iniciar servidor
app.listen(PORTA, () => {
    console.log('Servidor na porta ${PORTA}');

});