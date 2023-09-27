let btninscription = document.querySelector(".btninscription");
     btninscription.addEventListener("click",(e)=>{
        e.preventDefault()
      let maBd = JSON.parse(localStorage.getItem("maBd"))||[]
      let name = document.querySelector("#name").value;
      let Surname = document.querySelector("#Surname").value;
      let card = document.querySelector("#card").value;
      let income = document.querySelector("#income").value;
      let cie = document.querySelector("#cie").value;
      let sodeci = document.querySelector("#sodeci").value;
      let Transport = document.querySelector("#Transport").value;
      let health = document.querySelector("#health").value;
      let school = document.querySelector("#school").value
      let utilisateur =JSON.parse (localStorage.session)

     let user = {
         utilisateur: utilisateur.email,
         name:name,
         Surname:Surname,
         card:card,
         income:income,
         cie:cie,
         sodeci:sodeci,
         Transport:Transport,
         health:health,
         school:school
     }
     const actif = user.income + " FCFA";
     const passif = parseFloat(user.cie) + parseFloat(user.sodeci) + parseFloat(user.Transport) + parseFloat(user.health) + parseFloat(user.school)+" FCFA";
     const valeurNette = parseFloat(actif)-parseFloat(passif)
     user.actif = actif;
     user.passif =  passif;
     user.valeurNette = valeurNette
    
      console.log(user)
      maBd.push(user)
      console.log(user)
      localStorage.setItem("maBd",JSON.stringify(maBd));
       let session  = localStorage.getItem("session")
    //   console.log(session)

    // const actif = user.income + " FCFA";
    // const passif = parseFloat(user.cie) + parseFloat(user.sodeci) + parseFloat(user.Transport) + parseFloat(user.health) + parseFloat(user.school)+" FCFA";
    // const valeurNette = parseFloat(actif)-parseFloat(passif)
      // Afficher un message de confirmation (facultatif)
      alert( "Thanks  " + name + " for your informations");
      let resultat = document.querySelector('.resultat');
        resultat.innerHTML= `
        <h1>Your bilan finance</h1>
        <p>Nom: ${user.name}</p>
        <p>Prénom: ${user.Surname}</p>
        <p>ID Card Number: ${user.card}</p>
        <p>Actif: ${actif}</p>
        <p>Passif: ${passif}</p>
        <p>Net value (Actif-Passif): ${valeurNette}  FCFA</p>
        <a href="./display.html"><button>your History</button></a>
    `;
    //    window.location.href = "display.html"
      // ici je vais mettre un boutton pour le rediriger vers la  page de profile avec son profil
  
      // Rediriger ou effectuer d'autres actions si nécessaire
});






  


