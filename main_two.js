//mensagem de sucesso com Alert


const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();


    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDepositado = document.getElementById('valor-deposito');
    const mensagemSucesso = `motante de: <b>${valorDepositado.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta <b>${numeroContaBeneficiario.value}</b>`;


    formEvalido = validaNome(nomeBeneficiario.value);
    if (formEvalido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDepositado.value = '';

    } else{
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.error-messsage').style.display = 'block';
    }

} )

nomeBeneficiario.addEventListener('change', function(e) {
    console.log(e);
})