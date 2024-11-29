// Função para pegar o parâmetro 'movie' da URL
function getMovieFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('movie');
}

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


// Função para exibir os detalhes do filme (somente na página movie-details.html)
function displayMovieDetails() {
  const movieId = getMovieFromURL();  // Pega o parâmetro 'movie' da URL

  if (!movieId) {
    // Se o parâmetro 'movie' não existir na URL, não exibe nada e redireciona
    window.location.href = 'index.html';  // Ou qualquer outra página que você queira redirecionar
    return;
  }

  // Dados dos filmes simulados com endereço, site e horários de exibição
  const movieDetails = {
    'venom': {
      title: 'Venom 3: A Última Rodada',
      description: 'Eddie e Venom devem tomar uma decisão devastadora enquanto são perseguidos por um misterioso homem.',
      genre: 'Ação/Aventura',
      releaseDate: '24/10/2024',
      cinemas: [
        {
          name: 'UCI Orient Shopping da Bahia',
          address: 'Av. Tancredo Neves, 1489',
          website: 'https://www.ucicinemas.com.br',
          showtimes: ['14:00', '17:30', '20:45']
        },
        {
          name: 'Cinemark Salvador Shopping',
          address: 'Av. Tancredo Neves, 3133',
          website: 'https://www.cinemark.com.br',
          showtimes: ['12:30', '16:00', '19:15', '22:00']
        },
        {
          name: 'Cinépolis Salvador Norte',
          address: 'Av. Luis Viana Filho, 8284',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['13:30', '16:45', '20:00']
        },
        {
          name: 'Cinemark Shopping da Bahia',
          address: 'Av. Juracy Magalhães Júnior, 377',
          website: 'https://www.cinemark.com.br',
          showtimes: ['14:15', '17:45', '21:00']
        },
        {
          name: 'Cinépolis Iguatemi',
          address: 'Av. Tancredo Neves, 1483',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['13:00', '16:30', '20:15']
        }
      ],
      imgSrc: 'images/Capas/venom3.jpg'
    },
    'ainda-estou-aqui': {
      title: 'Ainda Estou Aqui',
      description: 'No início da década de 1970, o Brasil enfrenta o endurecimento da ditadura militar. No Rio de Janeiro, a família Paiva - Rubens, Eunice e seus cinco filhos - vive à beira da praia em uma casa de portas abertas para os amigos. Um dia, Rubens Paiva é levado por militares à paisana e desaparece.',
      genre: 'Drama',
      releaseDate: '10/11/2024',
      cinemas: [
        {
          name: 'Cinemark Barra Shopping',
          address: 'Av. Centenário, 2995',
          website: 'https://www.cinemark.com.br',
          showtimes: ['10:00', '13:30', '17:00', '20:30']
        },
        {
          name: 'Cinépolis Shopping Salvador',
          address: 'Avenida Luís Viana Filho, 8280',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['11:15', '14:45', '18:15']
        },
        {
          name: 'Cinépolis Salvador Norte',
          address: 'Av. Luis Viana Filho, 8284',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['13:30', '16:45', '20:00']
        },
        {
          name: 'UCI Cinemas Shopping da Bahia',
          address: 'Av. Tancredo Neves, 1489',
          website: 'https://www.ucicinemas.com.br',
          showtimes: ['11:00', '14:30', '18:00']
        }
      ],
      imgSrc: 'images/Capas/ainda_estou_aqui.jpg'
    },
    'gladiador-2': {
      title: 'Gladiador 2',
      description: 'Lúcio deve entrar no Coliseu após os poderosos imperadores de Roma conquistarem sua terra natal. Com raiva no coração e o futuro do império em jogo, ele olha para o passado para encontrar a força e a honra necessárias.',
      genre: 'Ação/Drama',
      releaseDate: '14/11/2024',
      cinemas: [
        {
          name: 'Cinemark Barra Shopping',
          address: 'Av. Centenário, 2995',
          website: 'https://www.cinemark.com.br',
          showtimes: ['10:00', '13:30', '17:00', '20:30']
        },
        {
          name: 'Cinépolis Shopping Salvador',
          address: 'Avenida Luís Viana Filho, 8280',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['11:15', '14:45', '18:15']
        },
        {
          name: 'Cinépolis Salvador Norte',
          address: 'Av. Luis Viana Filho, 8284',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['13:30', '16:45', '20:00']
        },
        {
          name: 'Cinemark Salvador Shopping',
          address: 'Av. Tancredo Neves, 3133',
          website: 'https://www.cinemark.com.br',
          showtimes: ['14:30', '17:45', '21:00']
        }
      ],
      imgSrc: 'images/Capas/gladiador_2.jpg'
    },
    'auto-da-compadecida-2': {
      title: 'O Auto Da Compadecida 2',
      description: 'Os malandros João Grilo e Chicó retornam 25 anos depois da sua última aventura.',
      genre: 'Comédia',
      releaseDate: '25/12/2024',
      cinemas: [
        {
          name: 'Cinemark Barra Shopping',
          address: 'Av. Centenário, 2995',
          website: 'https://www.cinemark.com.br',
          showtimes: ['10:00', '13:30', '17:00', '20:30']
        },
        {
          name: 'Cinépolis Shopping Salvador',
          address: 'Avenida Luís Viana Filho, 8280',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['11:15', '14:45', '18:15']
        },
        {
          name: 'Cinépolis Salvador Norte',
          address: 'Av. Luis Viana Filho, 8284',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['13:30', '16:45', '20:00']
        },
        {
          name: 'Cinemark Shopping da Bahia',
          address: 'Av. Juracy Magalhães Júnior, 377',
          website: 'https://www.cinemark.com.br',
          showtimes: ['14:15', '17:30', '21:00']
        }
      ],
      imgSrc: 'images/Capas/auto_da_compadecida_2.jpg'
    },
    'mufasa': {
      title: 'Mufasa: O Rei Leão',
      description: 'Mufasa, um filhote órfão, perdido e sozinho, conhece um simpático leão chamado Taka, herdeiro de uma linhagem real. O encontro ao acaso dá início a uma grande jornada de um grupo extraordinário de deslocados em busca de seu destino, além de revelar a ascensão de um dos maiores reis das Terras do Orgulho.',
      genre: 'Animação/Aventura',
      releaseDate: '19/12/2024',
      cinemas: [
        {
          name: 'Cinemark Barra Shopping',
          address: 'Av. Centenário, 2995',
          website: 'https://www.cinemark.com.br',
          showtimes: ['10:00', '13:30', '17:00', '20:30']
        },
        {
          name: 'Cinépolis Shopping Salvador',
          address: 'Avenida Luís Viana Filho, 8280',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['11:15', '14:45', '18:15']
        },
        {
          name: 'Cinépolis Salvador Norte',
          address: 'Av. Luis Viana Filho, 8284',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['13:30', '16:45', '20:00']
        },
        {
          name: 'Cinemark Shopping da Bahia',
          address: 'Av. Juracy Magalhães Júnior, 377',
          website: 'https://www.cinemark.com.br',
          showtimes: ['12:30', '16:00', '19:15']
        }
      ],
      imgSrc: 'images/Capas/mufasa.jpg'
    },
    'sonic': {
      title: 'Sonic 3',
      description: 'Sonic the Hedgehog 3 é um futuro filme de comédia de ação e aventura estadunidense-japonesa baseado na série de videogame publicada pela Sega, a sequência de Sonic the Hedgehog e Sonic the Hedgehog 2, e uma continuação da série televisiva Knuckles.',
      genre: 'Ação/Aventura',
      releaseDate: '25/12/2024',
      cinemas: [
        {
          name: 'Cinemark Barra Shopping',
          address: 'Av. Centenário, 2995',
          website: 'https://www.cinemark.com.br',
          showtimes: ['10:00', '13:30', '17:00', '20:30']
        },
        {
          name: 'Cinépolis Shopping Salvador',
          address: 'Avenida Luís Viana Filho, 8280',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['11:15', '14:45', '18:15']
        },
        {
          name: 'Cinépolis Salvador Norte',
          address: 'Av. Luis Viana Filho, 8284',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['13:30', '16:45', '20:00']
        },
        {
          name: 'Cinemark Salvador Shopping',
          address: 'Av. Tancredo Neves, 3133',
          website: 'https://www.cinemark.com.br',
          showtimes: ['12:45', '16:15', '19:30']
        }
      ],
      imgSrc: 'images/Capas/sonic3.jpg'
    },
    'kraven': {
      title: 'Kraven, o Caçador',
      description: 'O imigrante russo Sergei Kravinoff tem a missão de provar que é o maior caçador do mundo.',
      genre: 'Ação/Aventura',
      releaseDate: '12/12/2024',
      cinemas: [
        {
          name: 'Cinemark Barra Shopping',
          address: 'Av. Centenário, 2995',
          website: 'https://www.cinemark.com.br',
          showtimes: ['10:00', '13:30', '17:00', '20:30']
        },
        {
          name: 'Cinépolis Shopping Salvador',
          address: 'Avenida Luís Viana Filho, 8280',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['11:15', '14:45', '18:15']
        },
        {
          name: 'Cinépolis Salvador Norte',
          address: 'Av. Luis Viana Filho, 8284',
          website: 'https://www.cinepolis.com.br',
          showtimes: ['13:30', '16:45', '20:00']
        },
        {
          name: 'Cinemark Shopping da Bahia',
          address: 'Av. Juracy Magalhães Júnior, 377',
          website: 'https://www.cinemark.com.br',
          showtimes: ['14:30', '18:00', '21:30']
        }
      ],
      imgSrc: 'images/Capas/kraven.jpg'
    }
  };



  // Verificar se o filme existe nos dados
  const movie = movieDetails[movieId];
  if (!movie) {
    // Se o filme não for encontrado nos dados, redireciona ou exibe uma mensagem amigável
    window.location.href = 'index.html';  // Ou qualquer outra página de erro
    return;
  }

  // Preencher os detalhes na página
  document.getElementById('movie-name').innerText = movie.title;
  document.getElementById('movie-synopsis').innerText = movie.description;
  document.getElementById('movie-genre').innerText = movie.genre;
  document.getElementById('movie-release-date').innerText = movie.releaseDate;
  document.getElementById('movie-img').src = movie.imgSrc;

  // Preencher os cinemas com endereço, site e horários de exibição
  const cinemasList = document.getElementById('movie-cinemas');
  cinemasList.innerHTML = '';  // Limpar lista anterior
  movie.cinemas.forEach(cinema => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <strong>${cinema.name}</strong><br>
      Endereço: ${cinema.address}<br>
      <strong>Horários:</strong> ${cinema.showtimes.join(', ')}
      <a href="${cinema.website}" target="_blank" class="visita">Visitar site</a><br>
      
    `;
    cinemasList.appendChild(listItem);
  });


  // Adicionar o filme à lista de desejos quando o botão for clicado
  const wishlistButton = document.querySelector('button');
  wishlistButton.addEventListener('click', function (event) {
    addToWishlist(event, movie.title, movie.imgSrc);
  });

  // Adicionar o evento para o trailer
  const trailerButton = document.getElementById('movie-trailer').querySelector('button');
  trailerButton.addEventListener('click', playTrailer);
}

// Função para exibir o trailer do filme (na página movie-details.html)
function playTrailer() {
  const movieId = getMovieFromURL();

  const trailers = {
    'venom': 'https://www.youtube.com/watch?v=iItE_mKEIqw',
    'ainda-estou-aqui': 'https://www.youtube.com/watch?v=_NzqP0jmk3o',
    'gladiador-2': 'https://www.youtube.com/watch?v=thfURRSQzdw',
    'auto-da-compadecida-2': 'https://www.youtube.com/watch?v=ke4x5ywVhiw',
    'mufasa': 'https://www.youtube.com/watch?v=2Liv-jiCz_o',
    'sonic': 'https://www.youtube.com/watch?v=Ik1M3GP9Xqk',
    'kraven': 'https://www.youtube.com/watch?v=-f43GA_D2YU'
  };

  const trailerUrl = trailers[movieId];

  if (trailerUrl) {
    window.open(trailerUrl, '_blank');
  } else {
    alert("Trailer não encontrado para este filme.");
  }
}

// Chamar a função assim que o DOM estiver carregado, mas somente se estivermos em movie-details.html
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("movie-details.html")) {
    displayMovieDetails();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("movie-details.html")) {
    displayMovieDetails();
  }
});


// Função para exibir as estrelas e manipular as interações
function setupRating() {
  const stars = document.querySelectorAll("#star-rating .star");
  const ratingResult = document.getElementById('rating-result');
  const movieId = getMovieFromURL(); // Pega o ID do filme da URL
  const username = localStorage.getItem('username'); // Verifica se o usuário está logado
  let selectedRating = 0; // Inicializa a avaliação selecionada

  // Se o usuário estiver logado, tenta carregar a avaliação previamente salva
  if (username) {
    selectedRating = localStorage.getItem(`rating_${movieId}_${username}`) || 0;
  }

  // Atualiza as estrelas com base na avaliação armazenada
  updateStars(selectedRating);

  // Adiciona o evento de hover (passar o mouse)
  stars.forEach(star => {
    star.addEventListener('mouseover', () => {
      const value = parseInt(star.getAttribute('data-value'));
      highlightStars(value);  // Destaca as estrelas até o valor escolhido
    });

    star.addEventListener('mouseout', () => {
      highlightStars(selectedRating);  // Reverte para a avaliação atual
    });

    // Adiciona o evento de clique
    star.addEventListener('click', () => {
      if (username) {
        selectedRating = parseInt(star.getAttribute('data-value'));
        localStorage.setItem(`rating_${movieId}_${username}`, selectedRating); // Salva a avaliação no localStorage com o nome de usuário
        updateStars(selectedRating);  // Atualiza as estrelas visivelmente
        ratingResult.innerText = `Avaliação: ${selectedRating} estrela(s)`; // Exibe a avaliação
      }
    });
  });

  // Função para destacar as estrelas até o valor escolhido
  function highlightStars(value) {
    stars.forEach(star => {
      const starValue = parseInt(star.getAttribute('data-value'));
      if (starValue <= value) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }

  // Função para atualizar as estrelas com base na avaliação
  function updateStars(rating) {
    stars.forEach(star => {
      const starValue = parseInt(star.getAttribute('data-value'));
      if (starValue <= rating) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }
}

// Função para pegar o parâmetro 'movie' da URL
function getMovieFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('movie');
}

// Chama a função para configurar o sistema de avaliação quando o DOM for carregado
document.addEventListener("DOMContentLoaded", setupRating);


