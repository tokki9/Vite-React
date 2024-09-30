/* 
Archivo : index.html
Autor : Paolo Jesus Mansilla Ttito
Fecha : 29/09/2024 
Descripción : utilizamos React Developer Tools para depurar y verificar 
el estado y props de los componentes en tiempo real, junto con las herramientas 
de Visual Studio Code para gestionar el flujo del código y automatizar el despliegue 
en GitHub Pages.
*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';

function App() {
  return (
    <div> 
      <Header />  //Aquí estamos usando JSX para renderizar el componente Header
      <p>Esta es la página principal.</p>  
    </div>
  );
}

export default App;

