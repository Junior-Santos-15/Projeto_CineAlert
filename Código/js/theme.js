// theme.js

// Verificar o tema armazenado no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = localStorage.getItem('theme');

    // Se não houver tema armazenado, podemos aplicar o modo escuro por padrão
    if (storedTheme) {
        if (storedTheme === 'light') {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.add('dark-theme');
        }
    } else {
        // Se não houver preferência salva, defina como modo escuro por padrão
        document.body.classList.add('dark-theme');
    }
});
