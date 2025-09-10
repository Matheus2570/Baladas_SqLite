const express = require('express');
const router = express.Router();
const baladaController = require('../controllers/baladaController');

// GET todas as baladas
router.get('/', baladaController.getAllBaladas);

// GET balada por ID
router.get('/:id', baladaController.getBaladaById);

// GET baladas por cidade
router.get('/cidade/:cidade', baladaController.getBaladasByCidade);

// GET baladas por data
router.get('/data/:data', baladaController.getBaladasByData);

// POST criar balada
router.post('/', baladaController.createBalada);

// PUT atualizar balada
router.put('/:id', baladaController.updateBalada);

// DELETE balada
router.delete('/:id', baladaController.deleteBalada);

module.exports = router;
