// Obtenha os sociólogos do script EJS no HTML
const sociologos = JSON.parse(document.getElementById('sociologos-data').textContent);

// Itere pelos cards e adicione a animação do Lottie
sociologos.forEach((sociologo, index) => {
  const container = document.getElementById(`heart-animation-${index}`);
  
  if (container) { // Verifica se o container existe
    const animation = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../animations/heart.json' // Caminho para o arquivo JSON da animação
    });

    let heartLiked = false; // Estado inicial (não curtido)

    container.addEventListener('click', () => {
      heartLiked = !heartLiked; // Alterna o estado
      if (heartLiked) {
        animation.play(); // Toca a animação
      } else {
        animation.stop(); // Reseta a animação
      }
    });
  }
});
