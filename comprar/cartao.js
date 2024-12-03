const inputs = document.querySelectorAll('input');
const messageErrors = document.querySelectorAll('.messageError');
const submitButton = document.querySelector('#enviar');

const nome = document.getElementById('nome');
const inputNumero = document.querySelectorAll('.inputNumero');  
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const CVV = document.querySelector('.CVV');

function setAccept(index) {
    inputs[index].style.border = "";
    messageErrors[index].style.display = "none";
}

function setError(index, message) {
    inputs[index].style.border = "3px solid red";
    messageErrors[index].style.display = "block";
    messageErrors[index].textContent = message;
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateInputs()) {
        window.location.href = '../comprarealizada.html';
    }
});

function validateInputs() {
    let valid = true;

    // Validação de Mês e Ano
    if (!mes.value || !ano.value) {
        setError(2, 'Selecione um ano e/ou mês');
        valid = false;
    } else {
        setAccept(2);
    }

  
    if (CVV.value.length === 3 && !isNaN(CVV.value)) {
        setAccept(3);
    } else {
        setError(3, 'O CVV deve possuir 3 dígitos numéricos');
        valid = false;
    }

  
    let validInputNumero = Array.from(inputNumero).every(input => input.value.length === 4 && !isNaN(input.value));
    if (!validInputNumero) {
        setError(1, 'Cada input deve possuir 4 dígitos numéricos');
        valid = false;
    } else {
        setAccept(1);
    }

    return valid;
}
