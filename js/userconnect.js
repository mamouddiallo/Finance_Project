
// Récupére les données de l'utilisateur depuis le localStorage
const userData = JSON.parse(localStorage.getItem("session"));

// Sélectionne l'élément HTML pour afficher les informations de l'utilisateur
const user = document.querySelector(".user");

// Vérifie si des données d'utilisateur sont disponibles
if (userData && userData.firstName) {
  // Affiche le nom de l'utilisateur dans la balise <p>
  user.innerHTML = `<p>Welcome, ${userData.firstName}</p>`;
}
// Sélectionnez le lien de déconnexion
const linkDeconnexion = document.querySelector(".deconnexion");

// Ajoutez un gestionnaire d'événements au clic sur le lien de déconnexion
linkDeconnexion.addEventListener("click", (e) => {
  // Empêchez le lien de déclencher directement la redirection
  e.preventDefault();

  // Affichez une boîte de dialogue de confirmation
  const confirmation = confirm("Are you sure you want to logout ?");

  // Si l'utilisateur confirme la déconnexion, redirigez-le
  if (confirmation) {
    // Supprimer les données de session dans le localStorage
    localStorage.removeItem("session");

    // Rediriger l'utilisateur vers la page de connexion ou une autre page appropriée
    window.location.href = "../index.html";
  }
});

