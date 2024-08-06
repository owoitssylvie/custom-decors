function changeLanguage() {
    const language = document.getElementById("language-dropdown").value;
    
    if (!translations[language]) {
        console.error(`No translations found for language: ${language}`);
        return;
    }
    
    document.getElementById("title").innerHTML = translations[language].title;
    document.getElementById("description").innerHTML = translations[language].description;
    document.getElementById("new-releases-title").innerHTML = translations[language].newReleasesTitle;
    document.getElementById("additional-text-1").innerHTML = translations[language].additionalText1;
    document.getElementById("additional-text-2").innerHTML = translations[language].additionalText2;
    document.getElementById("credits-link").innerHTML = translations[language].creditsLink;
    document.getElementById("creators-credits-link").innerHTML = translations[language].creatorsCreditsLink;

    // Update download text for all download links
    document.querySelectorAll('.download-link').forEach(link => {
        link.innerHTML = translations[language].download;
    });

    // Update new badge based on the language
    document.querySelectorAll('.new-badge').forEach(badge => {
        badge.src = `new-${language}.png`;
    });

    // Prevent the layout from swapping right-to-left
    document.body.dir = 'ltr';
}

// Set default language to English
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("language-dropdown").value = "en";
    changeLanguage();
});
