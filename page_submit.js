//  let btninscription = document.querySelector(".btninscription");
//     btninscription.addEventListener("click",()=>{
//      let maBd = JSON.parse(localStorage.getItem("maBd"))||[]
//      let name = document.querySelector("#name").value;
//      let Surname = document.querySelector("#Surname").value;
//      let card = document.querySelector("#card").value;
//      let income = document.querySelector("#income").value;
//      let cie = document.querySelector("#cie").value;
//      let sodeci = document.querySelector("#sodeci").value;
//      let Transport = document.querySelector("#Transport").value;
//      let health = document.querySelector("#health").value;
//      let school = document.querySelector("#school")

//     let user = {
//         name:name,
//         Surname:Surname,
//         card:card,
//         income:income,
//         cie:cie,
//         sodeci:sodeci,
//         Transport:Transport,
//         health:health,
//         school:school
//     }
//      maBd.push(user)
//      localStorage.setItem("maBd",JSON.stringify(maBd));
//  })
// Récupérer le formulaire
const form = document.querySelector('form');

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêcher la soumission du formulaire par défaut

    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById('name').value;
    const surname = document.getElementById('Surname').value;
    const card = document.getElementById('card').value;
    const income = document.getElementById('income').value;
    const cie = document.getElementById('cie').value;
    const sodeci = document.getElementById('sodeci').value;
    const transport = document.getElementById('Transport').value;
    const health = document.getElementById('health').value;
    const school = document.getElementById('school').value;

    // Créer un objet pour stocker les données du formulaire
    const formData = {
        name: name,
        surname: surname,
        card: card,
        income: income,
        cie: cie,
        sodeci: sodeci,
        transport: transport,
        health: health,
        school: school
    };

    // Convertir l'objet en chaîne JSON
    const formDataJSON = JSON.stringify(formData);

    // Stocker les données du formulaire dans le Local Storage
    localStorage.setItem('formData', formDataJSON);

    // Vous pouvez également réinitialiser le formulaire ici si nécessaire
    form.reset();

    // Afficher un message de confirmation (facultatif)
    alert( "merci " + formData.name + " pour votre inscription");
    // ici je vais mettre un boutton pour le rediriger vers la  page de profile avec son profil

    // Rediriger ou effectuer d'autres actions si nécessaire
});

