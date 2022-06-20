/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T> ( argumento: T) {
    return argumento; 
}

let soyString = queTipoSoy ( 'Hola mundo!' );
let soyNumero = queTipoSoy ( 100 );
let soyArreglo = queTipoSoy ( [100, 90, 80, 70] );

let soyExplicito = queTipoSoy<number>( 10 );



