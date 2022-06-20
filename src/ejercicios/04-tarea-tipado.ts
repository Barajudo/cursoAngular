/*
    ===== Código de TypeScript =====
*/

interface Campeon {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;

}

interface Direccion {
    calle: string;
    region: string;
    pais: string;
}

const campeon = {
    nombre: 'Darius',
    edad: 32,
    direccion: {
        calle: 'Prolongacion Rosa Negra',
        region: 'Runaterra',
        pais: 'Noxus'
    },
    mostrarDireccion () {
        console.log( `${this.nombre}, ${ this.direccion.region }, ${ this.direccion.pais}` )
    }
}

const direccion = campeon.mostrarDireccion();

console.log( direccion )