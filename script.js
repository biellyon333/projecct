document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); //Evita o envio do formulário

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const messageElement = document.getElementById('message');

    if (campoB > campoA) {
        messageElement.textContent = 'Formulário válido! Número B é maior que numero A.';
        messageElement.className = 'message sucess';
        messageElement.style.display ='block';
    } else {
        messageElement.textContent = 'Formulário inválido! Número B deve ser maior do que o número A.';
        messageElement.className = 'message sucess';
        messageElement.style.display = 'block';
    }
});