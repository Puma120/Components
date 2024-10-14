import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { ListaSuper } from './components/ListaSuper'
import { Login } from './components/Login'

const PRODUCTOS = [
  {nombre: 'manzana', precio: 5},
  {nombre: 'uva', precio: 10},
  {nombre: 'limón', precio: 3},
]



function App() {
  const [count, setCount] = useState(0)
  const [Lista_super, setLista_super] = useState(false)
  const [sesion, setSesion] = useState(false)
  

  const Loogin = () => {
    if (!sesion) {
      setSesion(true)
    }
    else {
      setSesion(false)
    }
  }

  return (
    <>
      <Header title ={"Hello react ccc:"} color ={"magenta"}/>
      {sesion ? 
      <div>
        
        <div>
        
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <button onClick={() => setLista_super(!Lista_super)}>{Lista_super ? 'Ocultar lista' : 'Mostrar lista' }</button>

        {Lista_super  ?
          <ListaSuper productos={PRODUCTOS}/>
          :<p>uwu</p>
        }
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
      :
      <div>
        <Login Loogin={Loogin}/>
      </div>
      }
    </>
  )
}

export default App
