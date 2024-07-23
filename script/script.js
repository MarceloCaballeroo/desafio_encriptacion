$(document).ready(function () {
    
    function encryptText() {
        const inputText = document.getElementById('inputText').value;
        const outputText = document.getElementById('outputText');
        outputText.innerText = inputText ? btoa(inputText) : 'Ningún mensaje fue encontrado';
    }

    function decryptText() {
        const inputText = document.getElementById('inputText').value;
        const outputText = document.getElementById('outputText');
        outputText.innerText = inputText ? atob(inputText) : 'Ningún mensaje fue encontrado';
    }

});