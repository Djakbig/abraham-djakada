
document.getElementById("first").addEventListener("click", function () {
    document.querySelector(".section-apropos").scrollIntoView({
        behavior: "smooth"
    });
});


document.querySelector(".projet").addEventListener("click", function () {
    document.querySelector(".section-projets").scrollIntoView({
        behavior: "smooth"
    });
});


console.log("JS chargé avec succès !");
