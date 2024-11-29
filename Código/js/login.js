// login.js

// Função para verificar o login
function loginUser(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados inseridos no formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Recupera os dados dos usuários do localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se o nome de usuário e senha correspondem aos dados cadastrados
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Caso o login seja bem-sucedido
        localStorage.setItem('username', username); // Armazenamos o nome do usuário no localStorage

        // Redireciona para a página principal
        alert("Login bem-sucedido!");
        window.location.href = 'index.html'; // Substitua por sua página principal
    } else {
        // Exibe a mensagem de erro caso as credenciais estejam incorretas
        errorMessage.style.display = 'block';
        alert('Nome de usuário ou senha incorretos!');
    }
}

// Adiciona o evento ao formulário de login
document.getElementById('login-form').addEventListener('submit', loginUser);
