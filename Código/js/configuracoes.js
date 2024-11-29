// Acesse o botão do alternador de tema e o status
const themeToggle = document.getElementById('theme-toggle');
const themeStatus = document.getElementById('theme-status');

// Verifica o tema armazenado (caso já tenha sido configurado anteriormente)
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    themeToggle.checked = true;
    themeStatus.innerText = 'Modo Claro';
} else {
    document.body.classList.add('dark-theme');
    themeStatus.innerText = 'Modo Escuro';
}

// Alternar o tema
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        // Modo Claro
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeStatus.innerText = 'Modo Claro';
        localStorage.setItem('theme', 'light');
    } else {
        // Modo Escuro
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeStatus.innerText = 'Modo Escuro';
        localStorage.setItem('theme', 'dark');
    }
});

// Resetar configurações (redefinir tema)
const resetSettingsBtn = document.getElementById('reset-settings-btn');
resetSettingsBtn.addEventListener('click', () => {
    // Resetando o tema para o padrão (Escuro)
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    themeToggle.checked = false;
    themeStatus.innerText = 'Modo Escuro';
    localStorage.setItem('theme', 'dark');

    // Resetando o idioma para o padrão (Português)
    const defaultLanguage = 'pt-br';
    document.getElementById('language').value = defaultLanguage; // Atualiza o seletor para português
    localStorage.setItem("language", defaultLanguage); // Salva o idioma no localStorage

    // Atualizar os textos de acordo com o idioma
    loadLanguage(defaultLanguage);  // Função que você já tem para atualizar os textos
});




