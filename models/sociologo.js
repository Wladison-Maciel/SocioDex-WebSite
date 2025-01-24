const mongoose = require('mongoose');

// Definição do schema para um sociólogo
const SociologoSchema = new mongoose.Schema({
  nome: { type: String, required: true }, // Ex: 'Max Weber'
  descricao: { type: String, required: true }, // Ex: 'Grande filósofo'
  dataNascimento: { type: String, required: true }, // Ex: '2007-04-07'
  nacionalidade: { type: String, required: true }, // Ex: 'Brasil'
  principaisObras: { type: [String], required: true }, // Ex: ['Economia e Sociedade','A ciência como vocação']
  imagem: { type: String, required: true }, // Ex: 'https://static.todamateria.com.br/upload/ma/xw/maxweber3-cke.jpg'
  caracteristicas: { type: [String], required: true }, // Ex: ['Filósofo', 'Teórico', 'Revolucionário']
  coordenadas:{ type: [Number], required: true} // Ex: [-38.5426, -3.71722]
});

// Modelo do sociólogo pronto para exportar para outros arquivos
module.exports = mongoose.model('Sociologo', SociologoSchema, 'ListaSociologos');
