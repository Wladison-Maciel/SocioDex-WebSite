const express = require('express');
const router = express.Router();

// Credenciais fixas do usuário
const USERNAME = "BlackCat";
const PASSWORD = "admblackcat";

// Página de login
router.get('/', (req, res) => {
  res.render('login', { error: null }); // Renderiza a página de login
});

// Validação do login
router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    res.redirect('/selecionar-funcao'); // Redireciona para a página protegida
  } else {
    res.render('login', { error: 'Login ou senha incorretos!' }); // Mostra erro no login
  }
});

module.exports = router;
