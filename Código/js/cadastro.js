// Função para registrar o novo usuário
function registerUser(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados inseridos no formulário
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const phone = document.getElementById('phone').value; // Novo campo para telefone
    const sex = document.querySelector('input[name="sex"]:checked'); // Novo campo para sexo

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!username || !email || !password || !confirmPassword || !phone || !sex) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Verifica se a senha e a confirmação de senha coincidem
    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    // Verifica se os dados já estão no armazenamento (localStorage)
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica se o nome de usuário ou o e-mail já estão cadastrados
    const userExists = users.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert("Nome de usuário ou e-mail já está cadastrado.");
        return;
    }

    // Adiciona o novo usuário ao array de usuários
    users.push({ 
        username, 
        email, 
        password,  // Idealmente, a senha deve ser criptografada antes de ser salva
        phone, 
        sex: sex.value 
    });

    // Salva o array de usuários no localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Exibe um alerta informando o sucesso no cadastro
    alert("Conta cadastrada com sucesso!");

    // Redireciona para a tela de login após o cadastro
    window.location.href = 'login.html';
}

// Adiciona o evento ao formulário de cadastro
document.getElementById('register-form').addEventListener('submit', registerUser);
