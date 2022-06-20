/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 25,
    cancion: 'Coloratura',
    detalles: {
        autor: 'Coldplay',
        anio: 2021
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

// console.log( 'El volumen actual es de: ', volumen );
// console.log( 'El segundo actual es de: ',segundo );
// console.log( 'La nombre de la cancion es: ', cancion );
// console.log( 'El autor es: ', autor);

const dbz: string[] = [ 'Cell','Goku','Vegeta' ];
const [,,p3] = dbz;


// console.log( 'Personaje: ', p1);
// console.log( 'Personaje: ', p2);
console.log( 'Personaje: ', p3);



