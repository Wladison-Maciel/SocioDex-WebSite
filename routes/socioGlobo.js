const express = require('express');
const router = express.Router();
const Sociologo = require('../models/sociologo'); // Pegando a estrutura do sociologo.js
const mapboxConfig = require('../mapboxConfig'); // Importar a configuração do Mapbox

// Rota para renderizar o mapa e passar os dados
router.get('/', async (req, res) => {
  try {
    const sociologos = await Sociologo.find(); // Recupera todos os sociólogos do banco de dados
    res.render('socioGlobo', { sociologos: sociologos, mapboxConfig: mapboxConfig.accessToken}); // Renderizando SocioGlobo.ejs e passando os sociologos e o Acess token para o Front-end
    console.log(sociologos); // Exibir a lista de sociólogos como forma de depuração e visualização
  } catch (error) {
    res.status(500).send('Erro ao carregar os sociólogos: ' + error.message); // Exibir mensagem de erro
  }
});

module.exports = router;
