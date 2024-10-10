import React from "react";


export const Producto = ({nombre, precio}) => {
    return (
        
        <div>
            <h4>Nombre: {nombre}</h4>
            <h5>Precio: {precio}</h5>
        </div>
        
    );
}