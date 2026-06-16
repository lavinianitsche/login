// seleção dos elementos do DOM
const loginForm = document.querySelector('#login');
const emailInput = document.querySelector('#email');
const senhaInput = document.querySelector('#senha');
const messageDiv = document.querySelector('#message');

function time() {
    let data = new Date();
    // console.log(data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
}
// console.log(time());

function entrar() {
    // resolver o time q ta dando undefined
    // console.log('tentativa de login efetuada em: ' + time());

    let email = emailInput.value.trim();
    email = email.replaceAll(" ", "");
    let senha = senhaInput.value.trim()
    
    if (email === "" ) {
        message('section', 'erro: email não pode estar vazio', 'error');
        email.focus();
        email.value = "";
        
        return;
        
    } else if (senha === "") {
        message('section', 'erro: senha não pode estar vazia', 'error');

        return;
        
    } else if (email === "lavyizhere@gmail.com" || senha === "lavi0404") {
        message('section', 'login efetuado com sucesso', 'success')
        email.value = "";
        senha.value = "";

        return;
        
    } else {
        message('section', 'email e/ou senha incorretos', 'error')
        email.value = "";
        senha.value = "";

        return;
    }

    
}

function message(tipo, message, status) {
    const elemento = document.getElementById('message');
    elemento.innerHTML = message;
    elemento.style.background = status === 'success' ? '#c8e6c9' : '#ffcdd2';
    elemento.style.color = status === 'success' ? '#2e7d32' : '#c62828';
    elemento.style.border = status === 'success' ? '1px solid #a5d6a7' : '1px solid #ef9a9a';
    elemento.style.borderRadius = '40px';
    elemento.style.padding = '10px';
    
    setTimeout(() => {
        elemento.innerHTML = '';
        elemento.style.background = 'transparent';
        elemento.style.color = '';
        elemento.style.border = 'none';
        elemento.style.padding = '0';
    }, 4000);
}