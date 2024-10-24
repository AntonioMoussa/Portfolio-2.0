import React from 'react';
import { Box, Typography } from '@mui/material';

function DividerSection() {
  return (
    <Box sx={{ mt: 15, mb: 4, textAlign: 'center' }}>

      {/* Linje */}
      <Box sx={{ borderBottom: '2px solid #808080', width: '80%', mb: 15, margin: '0 auto' }}></Box>

      {/* Laptop Bild */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, mt: 25, }}>
        <img
          src="/Laptop.png"
          alt=""
          style={{ width: '200px', height: 'auto' }}
        />
      </Box>

      {/* Text */}
      <Typography variant="h6" sx={{ fontFamily: 'Josefin Sans', color: '#333' }}>
        Här kan du se några av mina projekt jag har byggt.
      </Typography>
    </Box>
  );
}

export default DividerSection;