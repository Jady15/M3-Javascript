// Función para calcular el área de un triángulo, rectángulo y círculo
function areaCirculo(){
    let radio = prompt("Ingresa el radio del círculo");
    let resultado = Math.PI * parseFloat(radio)**2;
    alert(`El área del círculo es ${resultado}`);
}

function areaTriangulo(){
    let base = prompt("Ingresa la base del triángulo");
    let altura = prompt("Ingresa la altura del triángulo");
    let resultado = parseFloat(base) * parseFloat(altura) / 2;
    alert(`El área del triángulo es ${resultado}`);
}

function areaRectangulo(){
    let base = prompt("Ingresa la base del rectángulo");
    let altura = prompt("Ingresa la altura del rectángulo");
    let resultado = parseFloat(base) * parseFloat(altura);
    alert(`El área del cuadrado es ${resultado}`);
}


// Función para convertir grados C a grados F
function celsiusToFahrenheit() {
    let gradosCelsius = prompt("Ingeresa la temperatura en grados Celsius");
    let gradosFahrenheit = (parseFloat(gradosCelsius) * 9/5) + 32;
    alert(`${gradosCelsius} °C equivalen a ${gradosFahrenheit} °F`);
    return gradosFahrenheit; 
}

// Función para ver si un número es par
function esPar() {
    let numero = prompt("Ingresa un número");
    if(numero % 2 === 0) {
        alert(`El número ${numero} es par`);
    } else {
        alert(`El número ${numero} NO es par`);
    }
}

areaCirculo();
areaTriangulo();
areaRectangulo();
celsiusToFahrenheit();
esPar();

