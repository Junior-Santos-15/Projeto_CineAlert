// Função para exibir diferentes telas
function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.classList.add('hidden');
  });
  document.getElementById(screenId).classList.remove('hidden');
}

// Função para mover o carrossel para a esquerda ou direita
function moveCarousel(direction) {
  const carousel = document.querySelector('.movie-carousel');
  const carouselWidth = carousel.offsetWidth; // Obtém a largura do carrossel visível
  const scrollAmount = carouselWidth / 3; // A quantidade de rolagem por clique

  // Calcula a rolagem (desloca para a esquerda ou direita)
  carousel.scrollBy({
    left: direction * scrollAmount, // A rolagem será feita com base na direção
    behavior: 'smooth'  // A rolagem será suave
  });
}

// Função para escutar as teclas pressionadas e mover o carrossel
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {  // Se a seta para a esquerda for pressionada
    moveCarousel(-1); // Move o carrossel para a esquerda
  } else if (event.key === 'ArrowRight') {  // Se a seta para a direita for pressionada
    moveCarousel(1); // Move o carrossel para a direita
  }
});

// Função para adicionar um filme à lista de desejos
function addToWishlist(event, title, imgSrc) {
  event.preventDefault();  // Impedir o comportamento padrão do botão

  const movie = { title: title, imgSrc: imgSrc };
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Verificar se o filme já está na lista
  const isAlreadyInWishlist = wishlist.some(item => item.title === movie.title);
  if (!isAlreadyInWishlist) {
    wishlist.push(movie);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${title} foi adicionado à sua lista de desejos!`);
  } else {
    alert(`${title} já está na sua lista de desejos.`);
  }
}

// Função para exibir a lista de desejos na página gerenciar-conta.html
function displayWishlist() {
  // Recuperar os filmes armazenados no localStorage
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Selecionar o container da lista de desejos
  const wishlistContainer = document.getElementById('wishlist-container');

  // Verificar se há filmes na lista
  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = '<p>Não há filmes na sua lista de desejos.</p>';
  } else {
    // Limpar o conteúdo anterior da lista de desejos
    wishlistContainer.innerHTML = '';

    // Criar os itens da lista de desejos
    wishlist.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
        <img src="${movie.imgSrc}" alt="${movie.title}" />
        <p>${movie.title}</p>
        <button onclick="removeFromWishlist('${movie.title}')">Remover</button>
      `;
      wishlistContainer.appendChild(movieElement);
    });
  }
}

// Função para remover um filme da lista de desejos
function removeFromWishlist(title) {
  // Recuperar a lista de desejos do localStorage
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Filtrar o filme a ser removido
  wishlist = wishlist.filter(movie => movie.title !== title);

  // Atualizar a lista de desejos no localStorage
  localStorage.setItem('wishlist', JSON.stringify(wishlist));

  // Atualizar a exibição da lista de desejos
  displayWishlist();
}

// Função para limpar toda a lista de desejos
function clearWishlist() {
  // Limpar o localStorage
  localStorage.removeItem('wishlist');

  // Atualizar a exibição da lista de desejos
  displayWishlist();
}

// Adiciona o evento de clique no botão de limpar a lista
document.getElementById('clear-wishlist').addEventListener('click', clearWishlist);

// Quando a página de lista de desejos for carregada, exibir os filmes
if (document.getElementById('wishlist-container')) {
  displayWishlist();
}





// Alternar entre temas claro e escuro
const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  // Salvar preferências no localStorage para persistência entre recarregamentos
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Carregar o tema preferido do usuário ao carregar a página
window.addEventListener('load', function() {
  const savedTheme = localStorage.getItem('theme') || 'dark';  // Se não tiver, padrão para dark
  document.body.classList.add(savedTheme + '-theme');
});








