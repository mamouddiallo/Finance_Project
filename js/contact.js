let bouton = document.querySelector('.soumission');
    bouton .addEventListener("click",(e)=>{
        e.preventDefault()
    let database = JSON.parse(localStorage.getItem("database"))||[]
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let subject = document.querySelector("#subject").value;
    let message = document.querySelector("#message").value
    let user = {
        name : name,
        email: email,
        subject:subject,
        message:message
    }
    database.push(user)
    localStorage.setItem("database",JSON.stringify(database));
    alert(" Hello,"+name+"thank you for your message. We will contact you shortly")
    window.location.href='../index.html'
    });




