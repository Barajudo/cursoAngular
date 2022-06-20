/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['habilidad q', 'habilidad w', 'habilidad e', 'ulti'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[]; 
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Mordekaiser',
    hp: 77,
    habilidades: ['habilidad q', 'habilidad w', 'habilidad e', 'ulti']
}

personaje.puebloNatal = 'Islas de las sombras';
    
console.table(personaje)