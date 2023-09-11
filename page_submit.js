let btninscription = document.querySelector(".btninscription");
btninscription.addEventListener("click",()=>{
    let maBd = JSON.parse(localStorage.getItem("maBd"))||[]
    let name = document.querySelector("#name").value;
    let Surname = document.querySelector("#Surname").value;
    let card = document.querySelector("#card").value;
    let income = document.querySelector("#income").value;
    let cie = document.querySelector("#cie").value;
    let sodeci = document.querySelector("#sodeci").value;
    let Transport = document.querySelector("#Transport").value;
    let health = document.querySelector("#health").value;
    let school = document.querySelector("#school")

    let user = {
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
    maBd.push(user)
    localStorage.setItem("maBd",JSON.stringify(maBd));
})