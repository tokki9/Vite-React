/* 
Archivo : index.html
Autor : Paolo Jesus Mansilla Ttito
Fecha : 29/09/2024 
Descripción : Utilizamos el componente List de Material UI junto con map() 
para renderizar una lista de elementos.
*/
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './Header';
import { List, ListItem, ListItemText } from '@mui/material';

function App() {
  const tecnologias = ['React', 'Vite', 'Material UI'];

  return (
    <div>
      <Header titulo="Tecnologías Usadas" />
      <List>
        {tecnologias.map((tecnologia, index) => (
          <ListItem key={index}>
            <ListItemText primary={tecnologia} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;

