const express = require('express');
const Sociologo = require('../models/sociologo');
const router = express.Router();

// Página de seleção de função
router.get('/', (req, res) => {
  // Se o usuário não está logado, redireciona para o login
  if (!req.headers.referer || !req.headers.referer.includes('/login')) {
    return res.redirect('/login');
  }

  res.render('selecionarFuncao'); // Renderiza a página se o login for válido
});

module.exports = router;
