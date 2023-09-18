document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez le formulaire de connexion
    const loginForm = document.getElementById('login-form');

    // Écoutez l'événement de soumission du formulaire de connexion
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut

        // Récupérez les valeurs des champs du formulaire de connexion
        const loginEmail = document.getElementById('email').value;
        const loginPassword = document.getElementById('password').value;

        // Vérifiez d'abord si le formulaire de connexion est vide
        if (!loginEmail || !loginPassword) {
            // Affichez un message d'erreur si le formulaire est vide
            alert('Please fill in all fields.');
            return; // Sortez de la fonction pour éviter la vérification des données d'inscription
        }

        // Récupérez les données d'inscription stockées dans le Local Storage
        const storedFormDataJSON = localStorage.getItem('formData');

        if (storedFormDataJSON) {
            // Convertissez les données JSON stockées en un objet JavaScript
            const storedFormData = JSON.parse(storedFormDataJSON);

            // Vérifiez si l'e-mail et le mot de passe correspondent aux données d'inscription
            if (loginEmail === storedFormData.email && loginPassword === storedFormData.password) {
                // Authentification réussie, vous pouvez rediriger l'utilisateur vers la page d'accueil ou une autre page sécurisée
                alert('Login successful!');
                window.location.href = 'index.html'; // Remplacez 'welcome.html' par la page souhaitée
            } else {
                // Affichez un message d'erreur en cas d'authentification échouée
                alert('Login failed. Please check your email and password.');
            }
        } else {
            // Aucune donnée d'inscription trouvée dans le Local Storage
            alert('No registration data found. Please register first.');
        }
    });
});
