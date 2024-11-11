import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", 
        width: "100%", 
        paddingBottom: "0px",
      }}
    >
      <Box
        sx={{
          padding: 2,
          color: 'white',
          display: "flex", 
          alignItems: "center",
          justifyContent: "center",
          width: "100%",  
          borderTop: "solid #fd853a"
        }}
      >
        <Typography variant="body2">
          © 2024 Antonio Moussa. Alla rättigheter reserverade.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;