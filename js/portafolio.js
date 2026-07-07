document.addEventListener("DOMContentLoaded", () => {
    console.log("¡Portafolio Profesional de Santiago Vásquez inicializado! 🚀");

    const profileImg = document.getElementById("profile-img");
    const fallbackIcon = document.querySelector(".fallback-icon");

    if (profileImg) {
        profileImg.addEventListener("error", () => {
            profileImg.style.display = "none";
            if (fallbackIcon) {
                fallbackIcon.classList.remove("hidden");
            }
            console.warn("Imagen de perfil no encontrada. Usando icono de respaldo.");
        });
    }

    const contactLinks = document.querySelectorAll(".btn-secondary, a[href='#contacto']");
    contactLinks.forEach(link => {
        link.addEventListener("click", () => {
            console.log("Interesado en sección de contacto.");
        });
    });
});