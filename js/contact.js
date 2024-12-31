document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contactForm");
    const formMessage = document.querySelector("#formMessage");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Récupérer les valeurs des champs du formulaire
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const subject = document.getElementById("subject").value.trim();

        // Vérification des champs vides
        if (name === "" || email === "" || message === "" || subject === "") {
            Swal.fire({
                title: "Erreur",
                text: "Tous les champs doivent être remplis.",
                icon: "error",
                confirmButtonText: "OK"
            });
            return;
        }

        // Message de succès
        Swal.fire({
            title: "Succès",
            text: "Votre message  a été soumis avec succès ! .Nous vous repondrons dans un brefs delais",
            icon: "success",
            confirmButtonText: "OK"
        }).then(() =>{
            // Envoi du formulaire
            contactForm.reset();

        })
          
        ;

        // Réinitialiser le formulaire après soumission
        
    });
});
