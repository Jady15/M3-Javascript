nota = 100;

if (nota < 0 || nota > 100) {
    console.log("Valor de nota inválido.");
} else {
    if (nota >= 90) {
        console.log("Estás APROBADO. ¡Excelente!");
    } else if (nota >= 75 && nota <= 89) {
        console.log("Estás APROBADO. ¡Bien!");
    } else if (nota >= 60 && nota <= 74) {
        console.log("Estás APROBADO. Suficiente.");
    } else if (nota < 60) {
        console.log("Estás REPROBADO. ¡Sorry!");
    }
}

