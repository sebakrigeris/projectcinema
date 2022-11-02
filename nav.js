const btnCinema = document.querySelector(".btn-cinema");
const navMenu = document.querySelector(".links-cinema");

btnCinema.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible")
});


// Dom Elements
const accountBox = document.getElementById('account');



const accountName = localStorage.getItem('AccountName')


function setAccountName() {
    if(accountName) {
        accountBox.innerText = accountName;
    } else {
        alert ('Debes crear cuenta');
        location.href = 'pages/micuenta.html';
    }
    
}

setAccountName()


const films = [
    {
        name: 'Avatar',
        img: 'pepitoAvatar.png',
        duracion : 120
    },
    {
        name: 'El Padrino',
        img: 'elPadrino.pnmg',
        duracion : 120
    },
    {
        name: 'Scream',
        img: 'elPadrino.pnmg',
        duracion : 120
    }
]


const filmList = document.getElementById('filmList')
console.log(filmList)
films.forEach(film => {
    const liFilm = document.createElement('li');
    liFilm.style.color = 'white';
    const text = document.createTextNode(film.name);
    liFilm.appendChild(text);
    filmList.appendChild(liFilm);

});

