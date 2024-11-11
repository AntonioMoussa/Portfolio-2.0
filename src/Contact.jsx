import React from 'react';
import { Box, Typography } from '@mui/material';

function Contact() {
  return (
    <Box id="contact"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'black',
        padding: 10,
      }}
    >
      {/* Rubrik */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 10, color: "white" }}>
        Mina kontakt uppgifter
      </Typography>

      {/* E-post och Whatsup */}
      <Box sx={{ display: 'flex', gap: 7, justifyContent: 'center', mt: 4 }}>

 
  <Box sx={{ textAlign: 'center' }}>
    <a href="mailto:Antonio.moussa@hotmail.com">
      <Box
        component="img"
        src="/Mail.png"
        alt="Email"
        sx={{
          width: '40px',
          height: '40px',
          transition: 'transform 0.2s ease',
          "&:hover": { transform: 'scale(1.1)' },
        }}
      />
    </a>
    <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>Mejla Mig</Typography>
    <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>Antonio.moussa@hotmail.com</Typography>  
  </Box>

  <Box sx={{ textAlign: 'center' }}>
    <a  target="_blank" rel="noopener noreferrer">
      <Box
        component="img"
        src="/Whatsup.png"
        alt="WhatsApp"
        sx={{
          width: '40px',
          height: '40px',
        }}
      />
    </a>
    <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>Ring Mig</Typography>
    <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>+46 763 44 54 44</Typography>  
  </Box>
</Box>
      
      {/* Länkar */}
      <Box sx={{ mt: 10 }}>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
          <Typography variant="body2" component="a" href="#home" sx={{ color: 'white', textDecoration: 'none', 
            transition: 'transform 0.2s ease',
            "&:hover": {
              transform: 'scale(1.1)',
            },
          }}>
            Hem
          </Typography>

          <Typography variant="body2" component="a" href="#about" sx={{ color: 'white', textDecoration: 'none',
            transition: 'transform 0.2s ease',
            "&:hover": {
              transform: 'scale(1.1)',
            },
           }}>
            Om mig
          </Typography>

          <Typography variant="body2" component="a" href="#services" sx={{ color: 'white', textDecoration: 'none',
            transition: 'transform 0.2s ease',
            "&:hover": {
              transform: 'scale(1.1)',
            },
           }}>
            Tjänster
          </Typography>

          <Typography variant="body2" component="a" href="#projects" sx={{ color: 'white', textDecoration: 'none',
            transition: 'transform 0.2s ease',
            "&:hover": {
              transform: 'scale(1.1)',
            },
           }}>
            Projekt
          </Typography>

          <Typography variant="body2" component="a" sx={{ color: 'white', textDecoration: 'none' }}>
            Kontakt
          </Typography>
        </Box>
        
        {/* Sociala medieikoner */}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 10 }}> 
          <a href="https://github.com/AntonioMoussa" target="_blank" rel="noopener noreferrer">
            <Box
              component="img"
              src="/Github.png"
              alt="GitHub"
              sx={{
                width: '24px',
                height: '24px',
                transition: 'transform 0.2s ease',
                "&:hover": { transform: 'scale(1.1)' },
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/antonio-moussa-7a27421b0/" target="_blank" rel="noopener noreferrer">
            <Box
              component="img"
              src="/Linkedin.png"
              alt="LinkedIn"
              sx={{
                width: '24px',
                height: '24px',
                transition: 'transform 0.2s ease',
                "&:hover": { transform: 'scale(1.1)' },
              }}
            />
          </a>
          <a href="https://www.instagram.com/antonio.moussa_/" target="_blank" rel="noopener noreferrer">
            <Box
              component="img"
              src="/Instagram.png"
              alt="Instagram"
              sx={{
                width: '24px',
                height: '24px',
                transition: 'transform 0.2s ease',
                "&:hover": { transform: 'scale(1.1)' },
              }}
            />
          </a>
          <a href="https://facebook.com/antonio.moussa.7/" target="_blank" rel="noopener noreferrer">
            <Box
              component="img"
              src="/Facebook.png"
              alt="Facebook"
              sx={{
                width: '24px',
                height: '24px',
                transition: 'transform 0.2s ease',
                "&:hover": { transform: 'scale(1.1)' },
              }}
            />
          </a>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;