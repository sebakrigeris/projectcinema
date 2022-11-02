Swal.fire({
    title: 'Bienvenido a Magic Cinema',
    text: 'Por favor, en caso de no contar con usuario y contraseña, crear una cuenta para poder visualizar y operar sobre nuestra tienda online.',
    confirmButtonText: 'Aceptar'
})

const formulario = document.getElementById("form-cinema")

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    let user = document.getElementById("controls1").value 
    let pass = document.getElementById("controls2").value
    localStorage.setItem('AccountName', user);
    console.log(user);
    console.log(pass);
    location.href = '../index.html';
})








