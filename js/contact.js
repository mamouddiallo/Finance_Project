let btnsubmit = document.querySelector('.soumission');
    btnsubmit.addEventListener("click",()=>{
        let database  = JSON.parse(localStorage.getItem('database')||[])
        let name  = document.querySelector('#name').value;
        let email  = document.querySelector('#email').value;
        let subject = document.querySelector('#subject').value;
        let message = document.querySelector('#message').value;
        console.log("mamoud")

        let user = {
                name:name,
                email:email,
                subject:subject,
                message:message
        }
        database.push(user)
        localStorage.setItem("database",JSON.stringify(database));
        alert( "Thanks  " + name + " for your informations");
        window.location.href = "index.html"
    });

