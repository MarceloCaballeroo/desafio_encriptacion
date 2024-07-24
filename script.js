window.encryptText = function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');

    // Validación para asegurarse de que no hay letras mayúsculas ni letras con tildes
    if (/[A-ZÁÉÍÓÚáéíóú]/.test(inputText)) {
        document.querySelector('.right-section').innerHTML = `
            <p id="outputText" class="message">Solo letras minúsculas y sin acentos</p>
        `;
        return;
    }

    const encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.querySelector('.right-section').innerHTML = `
        <p id="outputText" class="message">${encryptedText}</p>
        <button class="copy-button" onclick="copyText()">Copiar</button>
    `;
}

window.decryptText = function() {
    const inputText = document.getElementById('inputText').value;

    // Validación para asegurarse de que no hay letras mayúsculas ni letras con tildes
    if (/[A-ZÁÉÍÓÚáéíóú]/.test(inputText)) {
        document.querySelector('.right-section').innerHTML = `
            <p id="outputText" class="message">Solo letras minúsculas y sin acentos</p>
        `;
        return;
    }

    const decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.querySelector('.right-section').innerHTML = `
        <p id="outputText" class="message">${decryptedText}</p>
        <button class="copy-button" onclick="copyText()">Copiar</button>
    `;
}

window.copyText = function() {
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    }, () => {
        alert('Error al copiar el texto');
    });
}
