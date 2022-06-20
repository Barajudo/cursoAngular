/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    descipcion: string;
    precio: number
}

const telefono: Producto = {
    descipcion: 'iPhone',
    precio: 23500
}

const tableta: Producto = {
    descipcion: 'iPad Air',
    precio: 8999
}

export function calculaIVA( productos: Producto[] ): [ number, number] {
    let total = 0;

    productos.forEach( ({ precio }) => {
        total += precio;
    })

    return[total, total * 0.16];
}

const articulos = [ telefono, tableta ];

const [ total, iva ] = calculaIVA( articulos );

console.log( 'El total es: $', total, ' IVA: $', iva )




