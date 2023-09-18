document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne le formulaire
    const form = document.querySelector('form');

    // Écoute l'événement de soumission du formulaire
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupére les valeurs des champs du formulaire
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confpassword = document.getElementById('confpassword').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const zipCode = document.getElementById('zip-code').value;

        // Crée un objet pour stocker les données du formulaire
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confpassword:confpassword,
            phone: phone,
            address: address,
            city: city,
            zipCode: zipCode
        };

        // Converti l'objet en chaîne JSON
        const formDataJSON = JSON.stringify(formData);

        // Stock les données du formulaire dans le Local Storage sous la clé "formData"
        localStorage.setItem('formData', formDataJSON);

        //  réinitialiser le formulaire ici si nécessaire
        form.reset();

        // Affiche un message de confirmation (facultatif)
        alert("Thanks " + (formData.firstName + formData.lastName)+" for your registration at MoreMoney ");
        window.location.href = "login.html"
    });
});
