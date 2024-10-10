import React, { useState } from "react";

const USER_LOGIN = {
    username: 'Puma',
    password: '12345'
}

export const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('Borrando system32...')

    const handelSubmit = (e) => {
        e.preventDefault();
    if (username === USER_LOGIN && password === USER_LOGIN)
    {
        alert("Entraste")
        setError('')
    }
    else 
    {
        alert("quien sos")
        setPassword('')
        setUsername('')
        setError("Usuario o contraseña incorrectos")
    }
}

    return (
        <div>
            <h1>Iniciar sesion</h1>
            <form onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="username">Usuario: </label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value) }
                        />
                    <br />
                    <label htmlFor="password">Contraseña: </label>
                    <input 
                        type="text" 
                        name="password" 
                        id="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value) }
                        />
                        <br />
                        <button type = "submit">Iniciar sesion</button>
                </div>
                {error && <p style = {{color: 'red'}}>(error)</p>}
            </form>
        </div>
    )
}