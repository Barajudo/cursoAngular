/*
    ===== Código de TypeScript =====
*/

import { calculaIVA, Producto } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        descipcion: 'Teledono 1',
        precio: 100
    },
    {
        descipcion: 'Teledono 2',
        precio: 150
    }
];

const [ total, iva ] = calculaIVA( carritoCompras );

console.log( 'Total: ', total, ' IVA:', iva )

