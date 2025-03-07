const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lengthCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generator form button');
const passwordHeading = document.querySelector('.password-container h1');

const handleChange = () => {
    lengthCounter.textContent = inputRange.value;
}

const generatePassword = (passwordLength) => {
    let result = '';
    let characters = '';
    
    // Obtener opciones seleccionadas
    const useUppercase = document.querySelector('#uppercase').checked;
    const useLowercase = document.querySelector('#lowercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSymbols = document.querySelector('#symbols').checked;

    // Conjunto de caracteres a usar en la contraseña
    if(useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if(useNumbers) characters += '0123456789';
    if(useSymbols) characters += '!#$*_';

    // Si no selecciona ninguna opción
    if(characters === ''){
        passwordHeading.textContent = 'Selecciona al menos una opción!';
        return '';
    }

    // Generador de contraseña ALEATORIA
    for (let i = 0; i < passwordLength; i++){
        result += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return result;
};

const printPassword = (event) => {
    event.preventDefault();
    const password = generatePassword(inputRange.value);
    if(password){
        passwordHeading.textContent = password; // Muestra contraseña generada
    }
}

// Configuración de los eventos
inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', printPassword);