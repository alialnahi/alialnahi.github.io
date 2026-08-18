const languageToggle = document.getElementById("languageToggle");

let currentLanguage = localStorage.getItem("language") || "ar";

function setLanguage(language) {

    currentLanguage = language;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    const elements = document.querySelectorAll("[data-ar][data-en]");

    elements.forEach(element => {

        element.textContent =
            language === "ar"
                ? element.getAttribute("data-ar")
                : element.getAttribute("data-en");

    });

    languageToggle.textContent =
        language === "ar" ? "English" : "العربية";

    localStorage.setItem("language", language);
}


languageToggle.addEventListener("click", () => {

    const newLanguage =
        currentLanguage === "ar" ? "en" : "ar";

    setLanguage(newLanguage);

});


document.getElementById("year").textContent =
    new Date().getFullYear();


setLanguage(currentLanguage);
