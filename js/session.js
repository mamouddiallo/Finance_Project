const session = localStorage.getItem('session');
if(!session){
    window.location.href='index.html'
} 
if(window.location.href.includes('Login.html') || window.location.href.includes('pagesignup.html')){
    window.location.href='index.html'
}

let twobtns = document.querySelector('.twobtns')

if(session && twobtns){
    console.log(twobtns)
    twobtns.style.display  = 'none'
}
