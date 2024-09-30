// src/Header.jsx
/* Aquí modificamos el código de Header.jsx para darle mas estética a nuestra pagina web
*/

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = ({ titulo }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'darkblue' }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          {titulo}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
