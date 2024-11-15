document.getElementById('lang-toggle').addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'en') {
        document.documentElement.lang = 'es';
        document.getElementById('lang-toggle').textContent = 'English';
        // Aquí podrías cargar traducciones dinámicas para el contenido
    } else {
        document.documentElement.lang = 'en';
        document.getElementById('lang-toggle').textContent = 'Español';
    }
});