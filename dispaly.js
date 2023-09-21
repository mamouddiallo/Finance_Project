// display.js
// ...

document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les données du Local Storage sous la clé "formData"
    const formDataJSON = localStorage.getItem('formData');

    // Vérifier si des données existent dans le Local Storage
    if (formDataJSON) {
        // Convertir les données JSON en un objet JavaScript
        const formData = JSON.parse(formDataJSON);

        // Calculer la somme de cie, sodeci, transport, health, school et income
        const actif = formData.income + " FCFA";
        const passif = parseFloat(formData.cie) + parseFloat(formData.sodeci) + parseFloat(formData.transport) + parseFloat(formData.health) + parseFloat(formData.school)+" FCFA";
        const valeurNette = parseFloat(actif)-parseFloat(passif)
       

        // Afficher les données dans la page
        const dataContainer = document.getElementById('data-container');
        dataContainer.innerHTML = `
            <p>Nom: ${formData.name}</p>
            <p>Prénom: ${formData.surname}</p>
            <p>ID Card Number: ${formData.card}</p>
            <p>Actif: ${actif}</p>
            <p>Passif: ${passif}</p>
            <p>Net value (Actif-Passif): ${valeurNette}  FCFA</p>
        `;
    } else {
        // Si aucune donnée n'est trouvée dans le Local Storage
        alert('Aucune donnée du formulaire n\'a été trouvée.');
    }
});

