// const emailInput = document.getElementById("email");
// const senhaInput = document.getElementById("senha");

// function time() {
//     let data = new Date();
//     console.log(data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
// }
// console.log(time());

// function entrar() {

//     let email = emailInput.value.toLowerCase().trim();
//     email = email.replaceAll(" ", "");
    
//     if (email === "" || name.length < 20) {
//         // mensagem('crud', name === "" ? "erro: email não pode estar vazio" : "erro: email deve ter no mínimo 3 letras", 'error');
//         email.focus();
//         email.value = "";
        
//         return;
//     }
    
// }

// function mensagem(tipo, mensagem, status) {
//     const elemento = document.getElementById(`mensagem${tipo === 'busca' ? 'Busca' : 'Crud'}`);
//     elemento.innerHTML = mensagem;
//     elemento.style.background = status === 'success' ? '#c8e6c9' : '#ffcdd2';
//     elemento.style.color = status === 'success' ? '#2e7d32' : '#c62828';
//     elemento.style.borderLeftColor = status === 'success' ? '#4caf50' : '#f44336';
    
//     setTimeout(() => {
//         elemento.innerHTML = '';
//         elemento.style.background = '#e1f5fe';
//         elemento.style.color = '#0277bd';
//         elemento.style.borderLeftColor = '#4fc3f7';
//     }, 4000);
// }

// seleção dos elementos do DOM
const loginform = document.querySelector('#login-box');
const emailinput = document.querySelector('#email');
const senhainput = document.querySelector('#senha');
const messagediv = document.querySelector('#message');

