const form = document.getElementById('form-valores');
const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');
let formEValido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const mensagemSucesso = "Número B é maior que Número A. Validado!";
    const mensagemFalha = "Número A é maior que Número B. Invalidado!";

    formEValido = numeroB.value > numeroA.value
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success')
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
        document.querySelector('.failure').style.display = 'none';
    } 
    else 
    {
        const containerMensagemFalha = document.querySelector('.failure')
        containerMensagemFalha.innerHTML = mensagemFalha;
        containerMensagemFalha.style.display = 'block';
        numeroA.value = '';
        numeroB.value = '';
        document.querySelector('.success').style.display = 'none';
    }
})