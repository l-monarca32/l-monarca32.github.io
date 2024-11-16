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

let currentLanguage = localStorage.getItem('language') || 'en';

function applyTranslations(lang) {
  if (!translations[lang]) {
    console.error(`Language ${lang} not available`);
    return;
  }

  const elementsToTranslate = document.querySelectorAll('[id]');
  elementsToTranslate.forEach((element) => {
    const keys = element.id.split('-'); 
    let translation = translations[lang];
    keys.forEach((key) => {
      if (translation && translation[key]) {
        translation = translation[key];
      }
    });
    if (typeof translation === "string") {
      element.textContent = translation;
    }
  });

  localStorage.setItem('language', lang);

  const toggleButton = document.getElementById('language-toggle');
  toggleButton.textContent = lang === 'en' ? 'Español' : 'English';
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  applyTranslations(currentLanguage);
}

function initializePage() {
  applyTranslations(currentLanguage);

  document.getElementById('language-toggle').addEventListener('click', toggleLanguage);

  initializeOtherScripts();
}

function initializeOtherScripts() {
  const exampleButton = document.getElementById('example-button');
  if (exampleButton) {
    exampleButton.addEventListener('click', () => {
      alert('This is another script running!');
    });
  }
}

document.addEventListener('DOMContentLoaded', initializePage);