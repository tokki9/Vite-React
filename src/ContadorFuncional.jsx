// src/ContadorFuncional.jsx
import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

const ContadorFuncional = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  }

  return (
    <div>
      <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
        Contador (Funcional): {contador}
      </Typography>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={incrementar}
      >
        Incrementar
      </Button>
    </div>
  );
}

export default ContadorFuncional;
