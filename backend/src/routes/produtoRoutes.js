const express = require('express');
const router = express.Router();
const produtoController = require('..//controllers/produtoController');

//rota para listar todos os produtos (get)
router.get('/produtos', produtoController.listar);

//rota para cadastrar um novo produto (post)
router.post('/produtos', produtoController.criar);

//rota para apagar um produto pelo ID (delete)

router.delete('/produtos/:id', produtoController.deletar);

module.exports = router;
