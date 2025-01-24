var express = require("express");
var router = express.Router();
const Pergunta = require("../models/perguntas"); // Modelo de Perguntas

// Página para adicionar perguntas
router.get("/", (req, res) => {
  res.render("adicionarPerguntas", { title: "Adicionar Pergunta" });
});

// Adicionar uma nova pergunta ao banco de dados
router.post("/adicionar", async (req, res) => {
  const { pergunta, alternativas, respostaCorreta } = req.body;

  try {
    const novaPergunta = new Pergunta({
      pergunta,
      alternativas: alternativas.split(","),
      respostaCorreta,
    });
    await novaPergunta.save();
    console.log("Pergunta adicionada: "+ novaPergunta)
    res.redirect("/adicionarPerguntas");
  } catch (error) {
    res.status(500).send("Erro ao adicionar pergunta: " + error.message);
  }
});

module.exports = router;
