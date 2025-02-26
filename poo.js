// 1. Abstracción: Definir una clase (plantilla) de una figura geométrica

class Figura {

    // El método constructor se asegura de que los objetos tengan las propiedades necesarias para funcionar
    constructor(color) {
        this.color = color;
    }

    // Métodos: Acciones que puede realizar un objeto
    calcularArea(){
        throw new Error("El método no ha sido implementado");
    }

    obtenerColor(){
        return this.color;
    }

    miNombre(){
        return 'Hola soy una figura'; 
    }
}

// 2. Herencia: Crear subclases específicas a partir de la clase padre
class Circulo extends Figura{
    constructor(color, radio){
        super(color);   // Constructor de la superclase (Figura)
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * this.radio * this.radio;
    }
}

class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);   // Constructor de la superclase (Figura)
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }
}

// 3. Crear objetos (instanciar)
const miCirculo = new Circulo('rojo', 10);
const miRectangulo = new Rectangulo('verde', 12, 6);

console.log("Color del círculo:",miCirculo.obtenerColor());
console.log("Color del rectángulo:",miRectangulo.obtenerColor());

console.log("Rectángulo dice",miRectangulo.miNombre());

// 4. Polimorfismo: Un objeto puede hacer el mismo trabajo de forma diferente

function mostrarArea(figura){
    return figura.calcularArea();
}

console.log("Área del círculo:", mostrarArea(miCirculo));
console.log("Área del rectángulo:", mostrarArea(miRectangulo));
