/* 
Archivo : index.html
Autor : Paolo Jesus Mansilla Ttito
Fecha : 29/09/2024 
Descripción : Agregaremos un boton de Material UI con un evento onClick 
para incrementar un contador.
*/
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './Header';
import ContadorClase from './ContadorClase';

function App() {
  return (
    <div>
      <Header titulo="Página de Práctica: Estado con Clases y Hooks" />
      <ContadorClase />
    </div>
  );
}

export default App;