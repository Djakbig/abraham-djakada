// Bouton "En savoir plus" - Scroll vers la section À propos
document.getElementById("first").addEventListener("click", () => {
    document.querySelector(".section-apropos").scrollIntoView({
        behavior: "smooth"
    });
});

// Bouton "Mes réalisations" - Scroll vers la section Projets
document.querySelector(".projet").addEventListener("click", () => {
    document.querySelector(".section-projets").scrollIntoView({
        behavior: "smooth"
    });
});

// Navigation smooth scroll pour tous les liens avec ancres
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Bouton "Télécharger le CV"
document.querySelector(".btn-cv").addEventListener("click", () => {
    // Remplacez 'cv.pdf' par le chemin réel de votre CV
    const cvPath = 'cv.pdf';
    
    // Créer un lien temporaire pour télécharger le CV
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'CV_Abraham_DJAKADA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Alternative : ouvrir dans un nouvel onglet
    // window.open(cvPath, '_blank');
});

console.log("Portfolio chargé avec succès !");


















