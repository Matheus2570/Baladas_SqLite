// baladaController.js
const Balada = require('../models/balada');

// GET todas as baladas
exports.getAllBaladas = (req, res) => {
  Balada.getAllBaladas((err, baladas) => {
    if (err) res.status(500).send(err);
    else res.json(baladas);
  });
};

// GET balada por ID
exports.getBaladaById = (req, res) => {
  Balada.getBaladaById(req.params.id, (err, balada) => {
    if (err) res.status(500).send(err);
    else if (balada) res.json(balada);
    else res.status(404).send({ message: 'Balada não encontrada' });
  });
};

// GET baladas por cidade
exports.getBaladasByCidade = (req, res) => {
  Balada.getBaladasByCidade(req.params.cidade, (err, baladas) => {
    if (err) res.status(500).send(err);
    else res.json(baladas);
  });
};

// GET baladas por data
exports.getBaladasByData = (req, res) => {
  Balada.getBaladasByData(req.params.data, (err, baladas) => {
    if (err) res.status(500).send(err);
    else res.json(baladas);
  });
};

// POST criar balada
exports.createBalada = (req, res) => {
  Balada.createBalada(req.body, (err, result) => {
    if (err) res.status(500).send(err);
    else res.status(201).json(result);
  });
};

// PUT atualizar balada
exports.updateBalada = (req, res) => {
  Balada.updateBalada(req.params.id, req.body, (err, result) => {
    if (err) res.status(500).send(err);
    else if (result.changes) res.status(200).json(result);
    else res.status(404).send({ message: 'Balada não encontrada' });
  });
};

// DELETE balada
exports.deleteBalada = (req, res) => {
  Balada.deleteBalada(req.params.id, (err, result) => {
    if (err) res.status(500).send(err);
    else if (result.changes) res.status(200).json({ message: 'Balada deletada com sucesso' });
    else res.status(404).send({ message: 'Balada não encontrada' });
  });
};
