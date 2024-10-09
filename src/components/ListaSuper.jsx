import React from "react";
import {Producto} from './Producto'

export const ListaSuper = ({productos}) => {
    return (
      
        <div>
            <h1>Lista del Super</h1>
            {productos.map((item, index) => {
                return <Producto key ={index} nombre={item.nombre} precio={item.precio}/>
})}
        </div>
        
    );
}