/* 
Archivo : index.html
Autor : Paolo Jesus Mansilla Ttito
Fecha : 29/09/2024 
Descripción : Utilizamos componentes de Material UI para construir el componente 
Header y lo importaremos en App.jsx.
*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
import Header from './Header';
import { Button, Typography } from '@mui/material';

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <Header titulo="Contador con Evento" />
      <Typography variant="h4" component="div" sx={{ marginTop: 2 }}>
        Contador: {contador}
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={incrementar} 
        sx={{ marginTop: 2 }}
      >
        Incrementar
      </Button>
    </div>
  );
}

export default App;