/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Daniel'
}

const pasajero2: Pasajero = {
    nombre: 'Daniel',
    hijos: ['Julieta', 'Dante']
}

function imprimeHijos( pasajero: Pasajero ): void {
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( `Tiene ${ cuantosHijos } hijos` )

//     ( cuantosHijos )
//         ? console.log( `Tiene ${cuantosHijos} hijos` )
//         : console.log( 'No tiene hijos' )
}

imprimeHijos ( pasajero1 )