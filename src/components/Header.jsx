import React from "react";

export const Header = ({title,color}) => {
    return (
        <>
        <h1 style={{color: color ? color : "white"}}>
            {title ? title : "Default title"}</h1>
        </>
    );
}