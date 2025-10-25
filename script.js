// Language Switcher for CNGTX-Scientific Website
(function() {
    'use strict';

    // Get the language toggle button
    const langToggle = document.getElementById('langToggle');

    // Get the current language from localStorage or default to 'en'
    let currentLang = localStorage.getItem('language') || 'en';

    // Function to switch language
    function switchLanguage(lang) {
        // Hide all language elements
        const enElements = document.querySelectorAll('.lang-en');
        const zhElements = document.querySelectorAll('.lang-zh');

        if (lang === 'zh') {
            // Show Chinese, hide English
            enElements.forEach(el => el.style.display = 'none');
            zhElements.forEach(el => el.style.display = '');
            document.documentElement.lang = 'zh';
        } else {
            // Show English, hide Chinese
            enElements.forEach(el => el.style.display = '');
            zhElements.forEach(el => el.style.display = 'none');
            document.documentElement.lang = 'en';
        }

        // Update navigation links using data attributes
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            const text = link.getAttribute(`data-${lang}`);
            if (text) {
                link.textContent = text;
            }
        });

        // Save the language preference
        localStorage.setItem('language', lang);
        currentLang = lang;
    }

    // Add click event listener to the toggle button
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            switchLanguage(newLang);
        });
    }

    // Initialize the page with the saved language preference
    switchLanguage(currentLang);

})();
