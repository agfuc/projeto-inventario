const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produtoController');

// Listar produtos
router.get('/produtos', produtoController.listar);

// Cadastrar produto
router.post('/produtos', produtoController.criar);

// Deletar produto
router.delete('/produtos/:id', produtoController.deletar);

module.exports = router;