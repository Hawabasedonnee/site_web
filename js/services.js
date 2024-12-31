const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Fermer tous les autres éléments FAQ
        faqItems.forEach((i) => {
            if (i !== item) {
                i.classList.remove("active");
                const icon = i.querySelector(".icon i");
                if (icon) {
                    icon.className = "fa-solid fa-plus"; // Modifier la classe directement
                }
            }
        });

        // Basculer l'état actif de l'élément cliqué
        item.classList.toggle('active');
        const icon = item.querySelector(".icon i"); // Corriger ici
        if (icon) {
            icon.className = item.classList.contains('active')
                ? "fa-solid fa-minus"
                : "fa-solid fa-plus";
        }
    });
});
