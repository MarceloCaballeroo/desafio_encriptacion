window.encryptText = function() {
    const inputText = document.getElementById('inputText').value.trim();

    if (inputText === "") {
        resetRightSection();
        return;
    }

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
    const inputText = document.getElementById('inputText').value.trim();

    if (inputText === "") {
        resetRightSection();
        return;
    }

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

function resetRightSection() {
    document.querySelector('.right-section').innerHTML = `
        <img src="assets/Muñeco.svg" alt="Imagen ilustrativa" class="illustration">
        <p id="outputText" class="message">Ningún mensaje fue encontrado</p>
        <p class="description">Ingresa el texto que desees encriptar o desencriptar.</p>
    `;
}

document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    updateThemeIcon();
});

function updateThemeIcon() {
    const icon = document.getElementById('themeIcon');
    if (document.body.classList.contains('dark-mode')) {
        icon.src = 'assets/sun.svg';
        icon.alt = 'Sun icon';
    } else {
        icon.src = 'assets/moon.svg';
        icon.alt = 'Moon icon';
    }
}

// Inicializa el icono al cargar la página
document.addEventListener('DOMContentLoaded', updateThemeIcon);
