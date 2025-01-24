// Importações
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config'); // Importando o arquivo de configurações
const app = express();

// Importação das rotas
const indexRouter = require('./routes/index'); // Página Home (Index)
const sociodexRouter = require('./routes/sociodex'); // Página da Sociodex
const socioGloboRouter = require('./routes/socioGlobo') // Página do Mapa
const adicionarPerguntasRouter = require('./routes/adicionarPerguntas') // Página adicionar Perguntas
const adminPerguntasRouter = require('./routes/adminPerguntas') // Página admin das Perguntas
const quizRouter = require('./routes/quiz'); // Página Quiz 
const aboutRouter = require('./routes/about'); // Página Sobre
const selecionarFuncaoRouter = require('./routes/selecionarFuncao'); //Seleciona função adm
const loginRouter = require('./routes/login'); // Importa a rota de login

// Configuração do motor de visualização (EJS) e pasta das views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Diretório onde estão os templates

// Configuração dos middlewares
app.use(logger('dev')); // Log das requisições HTTP
app.use(express.json()); // Parse de JSON
app.use(express.urlencoded({ extended: false })); // Parse de URL encoded
app.use(cookieParser()); // Parse de cookies
app.use(express.static(path.join(__dirname, 'public'))); // Arquivos estáticos (CSS, JS, imagens)
app.use(express.static('public')); //Favicon da Página

// Conexão com MongoDB
mongoose
  .connect(config.mongoURI)
  .then(() => console.log('Conexão com MongoDB Atlas bem-sucedida!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Middleware para log de acessos ao quiz (opcional)
app.use('/quiz', (req, res, next) => {
  console.log(`Acesso ao quiz em ${new Date().toISOString()}`);
  next();
});

// Configuração das rotas
app.use('/', indexRouter);
app.use('/sociodex', sociodexRouter);
app.use('/socioGlobo', socioGloboRouter)
app.use('/quiz', quizRouter);
app.use('/adicionarPerguntas', adicionarPerguntasRouter)
app.use('/about', aboutRouter);
app.use('/selecionar-funcao', selecionarFuncaoRouter);
app.use('/login', loginRouter);

// Tratamento de erros 404 (quando a rota não existe)
app.use((req, res, next) => {
  next(createError(404));
});

// Tratamento de erros gerais
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Definindo a porta do servidor
app.set('port', config.port || 3000); // Se não tiver no config, usa 3000 como padrão

module.exports = app;
