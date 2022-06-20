/*
    ===== Código de TypeScript =====
*/

function sumar ( a: number, b:number ): number {
    return  a + b;
}

const sumarFlecha = ( a: number, b: number ): number => {
    return a + b;
}

// En funciones primero: valores obligatorios, despues opcionales y al ultimo argumentos
// valor por defecto
function multiplicar( numero: number, otroNumero?: number, base: number = 3 ): number {
    return numero * base;
}

// let resultado = multiplicar( 5, 2, 10 );

// console.log( resultado );

interface PersonajeLOL {
    nombre: string;
    pv: number;
    mostrarPV: () =>void;
}

function curar( personaje: PersonajeLOL, curarX: number ): void {
    
    personaje.pv += curarX;

}

const nuevoPersonaje: PersonajeLOL = {

    nombre: 'Swain',
    pv: 100,
    mostrarPV() {
        console.log( 'Puntos de vida: ', this.pv )
    }

}

curar ( nuevoPersonaje, 30 );

nuevoPersonaje.mostrarPV()