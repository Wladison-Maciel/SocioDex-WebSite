const express = require('express');
const router = express.Router();

const timelineData = [
  {
    date: "1838",
    event: "Criação do termo 'Sociologia'",
    description: "Auguste Comte introduz o termo 'sociologia' em sua obra 'Curso de Filosofia Positiva'.",
    image: "images/augustecomte.jpg",
  },
    {
      date: "1859",
      event: "Publicação de 'A Origem das Espécies' de Darwin",
      description: "Charles Darwin publica 'A Origem das Espécies', influenciando a sociologia ao introduzir teorias evolutivas que impactam a compreensão das sociedades humanas.",
      image: "images/darwin.jpg",
    },
    {
      date: "1893",
      event: "Fundação da Escola de Chicago",
      description: "A Escola de Chicago é fundada, estabelecendo uma abordagem empírica para o estudo da sociologia, com foco em métodos quantitativos e qualitativos.",
      image: "images/chicagoSchool.jpg",
    },
    {
      date: "1916",
      event: "Publicação de 'O Suicídio' de Durkheim",
      description: "Émile Durkheim publica 'O Suicídio', um estudo pioneiro na sociologia, utilizando métodos quantitativos para investigar causas sociais do suicídio.",
      image: "images/Durkheim.jpg",
    },
    {
      date: "1930",
      event: "Teoria da Ação Social de Max Weber",
      description: "Max Weber publica sua teoria sobre a ação social, onde aborda como os indivíduos interpretam e dão sentido às suas ações dentro de uma sociedade.",
      image: "images/weber.jpg",
    },
];

router.get('/', (req, res) => {
  res.render('index', { timeline: timelineData });
});

module.exports = router;
