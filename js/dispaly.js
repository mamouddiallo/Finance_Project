let mysession = JSON.parse(localStorage.session)
console.log(mysession)
let maBd = JSON.parse(localStorage.maBd)
console.log(maBd)
let userdata = maBd.filter(element=>element.utilisateur===mysession.email)
console.log(userdata)
let tbody = document.querySelector('tbody')
console.log(tbody)
userdata.forEach((element,id) => {
    tbody.innerHTML += `
    <tr>
        <td>${id+1}</td>
        <td>${element.actif}</td>
        <td>${element.passif}</td>
        <td>${element.valeurNette}</td>
    </tr>
    `
});