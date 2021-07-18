const email = document.getElementById('email');
const listaEmail=localStorage.getItem('email');
const listaDeEmail = JSON.parse(listaEmail);

function salvar(){
    listaDeEmail.push(email.value);
    const emails = JSON.stringify(listaDeEmail);
    localStorage.setItem('email', emails);
}

