import React from "react";


export const Producto = ({nombre, precio}) => {
    return (
        
        <div>
            <h1>Nombre: {nombre}</h1>
            <h2>Precio: {precio}</h2>
        </div>
        
    );
}