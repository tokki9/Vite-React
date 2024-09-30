/* 
Archivo : index.html
Autor : Paolo Jesus Mansilla Ttito
Fecha : 29/09/2024 
Descripción : Uso de estado con useState
*/
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './Header';
import ContadorClase from './ContadorClase';
import ContadorFuncional from './ContadorFuncional';

function App() {
  return (
    <div>
      <Header titulo="Página de Práctica: Estado con Clases y useState" />
      <ContadorClase />
      <ContadorFuncional />
    </div>
  );
}

export default App;
