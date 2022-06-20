/*
    ===== Código de TypeScript =====
*/

class PersonaNOrmal {
    constructor (
        public nombre: string,
        public direccion: string 
    ) {}
}

class Heroe extends PersonaNOrmal {

    // public nombre: string;
    // public edad: number;
    // public alterEgo: string;

    constructor ( 
        public alterEgo: string,
        public nombreReal: string,
        public edad: number

    ) {
        super( nombreReal, 'Gotica' );
    }

}

const superH = new Heroe( 'Batman', 'Bruce', 45 );

console.log( superH.nombreReal )
console.log( superH.nombre )


