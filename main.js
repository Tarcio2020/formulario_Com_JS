
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
    const mensagemSucesso = `motante de: ${valorDepositado.value} depositado para o cliente: ${nomeBeneficiario.value} - conta ${numeroContaBeneficiario.value}`;


    formEvalido = validaNome(nomeBeneficiario.value);
    if (formEvalido) {
        alert(mensagemSucesso);

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDepositado.value = '';

    } else{
        alert('O nome não está completo');
    }

} )





























/*const form = document.getElementById('form-deposito');


function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault();


    const nomeBeneficiario = document.getElementById('nome-benediciario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDepositado = document.getElementById('valor-deposito');
    const mensagemSucesso = `motante de: ${valorDepositado.value} depositado para o cliente: ${nomeBeneficiario.value} - conta ${numeroContaBeneficiario.value}`;


    formEvalido = validaNome(nomeBeneficiario.value);
    if (formEvalido) {
        alert(mensagemSucesso);

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDepositado.value = '';

    } else{
        alert('O nome não está completo');
    }

} )

//const mensagemS;ucesso: = 'montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario} -conta: {valorDeposito}' */


