// src/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = ({ titulo }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {titulo}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
