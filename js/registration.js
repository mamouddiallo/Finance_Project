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

        const globalData = localStorage.getItem("users")
        let data = [];
        let long = 0;
        if (!globalData) {
            formData.id = "user01"
            data.push(formData);
              // Converti l'objet en chaîne JSON
            const formDataJSON = JSON.stringify(data);
            localStorage.setItem("users",formDataJSON );
        }else{
            let converse = JSON.parse(globalData)
            let isuser = converse.find(element=>element.email == formData.email)? true:false
            if(isuser) return alert('ce compte est deja utiliser')
            data = JSON.parse(globalData);
            long = data.length < 9?"users0"+(data.length+1): "users"+(data.length+1)
            formData.id  = long
            console.log(formData);
            data.push(formData);
            console.log(data)
            localStorage.setItem("users",JSON.stringify(data));

        }


        //  réinitialiser le formulaire ici si nécessaire
        form.reset();

        // Affiche un message de confirmation (facultatif)
        alert("Thanks " + (formData.firstName + formData.lastName)+" for your registration at MoreMoney ");
        window.location.href = "login.html"
    });
});
