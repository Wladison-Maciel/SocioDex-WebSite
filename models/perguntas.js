const mongoose = require('mongoose');

// Definição do schema para uma pergunta
const PerguntaSchema = new mongoose.Schema({
  pergunta: { type: String, required: true }, // Ex: 'Quem é considerado o pai da sociologia?'
  alternativas: { type: [String], required: true }, // Ex: ['Durkheim', 'Marx', 'Weber', 'Comte']
  respostaCorreta: { type: String, required: true }, // Ex: 'Comte'
});

// Modelo da pergunta pronto para exportar
module.exports = mongoose.model('Pergunta', PerguntaSchema, 'PerguntasSociologos');