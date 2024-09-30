// src/ContadorClase.jsx
import React, { Component } from 'react';
import { Button, Typography } from '@mui/material';

class ContadorClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div>
        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
          Contador (Clase): {this.state.contador}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={this.incrementar}
        >
          Incrementar
        </Button>
      </div>
    );
  }
}

export default ContadorClase;
