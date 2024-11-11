import React, { useState } from "react";
import { Box, Typography, Avatar, Button, Modal, TextField } from "@mui/material";
import SocialMedia from './SocialMedia';
import emailjs from '@emailjs/browser';

function MainContent() {
  const [openRecruitModal, setOpenRecruitModal] = useState(false);
  const [message, setMessage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobType, setJobType] = useState("");

  const handleOpenRecruitModal = () => setOpenRecruitModal(true);
  const handleCloseRecruitModal = () => {
    setOpenRecruitModal(false);
    setMessage("");
    setCompanyName("");
    setJobType("");
  };

  const handleSendMessage = () => {
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      { 
        message: message, 
        from_name: 'Rekryterare',
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('Meddelande skickat!', response.status, response.text);
      handleCloseRecruitModal();
    })
    .catch((error) => {
      console.error('Misslyckades att skicka meddelandet...', error);
    });
  };

  return (
    <main id="home">
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          alignItems: "center",
          justifyContent: "space-around",
          textAlign: "left",
          minHeight: "80vh",
        }}
      >
        {/* Text-sektionen */}
        <Box sx={{ maxWidth: "500px", marginBottom: "100px", marginRight: "70px", textAlign: { xs: "center", md: "left" }, mt: { xs: 4, md: 0 } }}>
          
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Urbanist",
              fontWeight: "bold",
              fontSize: "2rem",
              color: "white",
              mt: 1,
            }}
          >
            Antonio Moussa
          </Typography>
          
          {/* Uppdelad titel */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Urbanist",
              fontWeight: "bold",
              fontSize: "5.5rem",
              color: "#fd853a",
              mt: 1,
              lineHeight: 1,
              marginRight:"70px",
              
            }}
          >
            Webb-
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Urbanist",
              fontWeight: "bold",
              fontSize: "4.5rem",
              color: "#fd853a",
              lineHeight: 1, 
              marginLeft:"90px",
            }}
          >
            Utvecklare
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Urbanist",
              fontSize: "1.1rem",
              color: "white",
              mt: 2,
              mb: 3,
            }}
          >
            Från STOCKHOLM
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpenRecruitModal} 
            sx={{
              borderRadius: "20px",
              backgroundColor: "#fd853a",
              color: "white",
              fontFamily: "Urbanist",
              textTransform: "none",
              fontWeight: "bold",
              padding: "10px 20px",
              "&:hover": {
                transition: "transform 0.3s ease",
                transform: "scale(1.1)",
              },
            }}
          >
            Kontakta mig
          </Button>
        </Box>

        {/* Avatar-sektionen */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Avatar
            alt="Antonio"
            src="/Antonio.png"
            sx={{
              width: { xs: 400, md: 550 },
              height: "auto",
              borderRadius: 0,
              mb: 1,
            }}
          />

           {/* Pop Up för Rekrytera mig */}
      <Modal open={openRecruitModal} onClose={handleCloseRecruitModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: "500px",
            bgcolor: "background.paper",
            border: "none",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            textAlign: "center",
            backgroundImage: 'url("/Background.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
            Meddelande till Antonio
          </Typography>

              {/* Företagets namn */}
               <TextField
                variant="outlined"
                fullWidth
                placeholder="Företagets namn"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                sx={textFieldStyle}
              />

              {/* Jobbtyp */}
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Typ av jobb (ex. Fullstack)"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                sx={textFieldStyle}
              />

              {/* Meddelande */}
              <TextField
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                placeholder="Skriv ditt meddelande här..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={textFieldStyle}
              />

              {/* Skicka meddelande-knapp */}
              <Button
                variant="contained"
                onClick={handleSendMessage}
                sx={{
                  textTransform: "none",
                  borderRadius: "20px",
                  backgroundColor: "#fd853a",
                  "&:hover": {
                    transition: "transform 0.3s ease",
                    transform: "scale(1.1)",
                  },
                  mt: 2,
                }}
              >
                Skicka meddelande
              </Button>
            </Box>
          </Modal>

          {/* Social Media knappar */}
          <Box sx={{ display: "flex", justifyContent: "center", marginLeft: "45px", mt: -3 }}>
            <SocialMedia />
          </Box>
        </Box>
      </Box>
    </main>
  );
}

const textFieldStyle = {
  mb: 3,
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& fieldset": { borderColor: "white" },
    "&:hover fieldset": { borderColor: "white" },
    "&.Mui-focused fieldset": { borderColor: "#fd853a" }
  },
  "& .MuiInputBase-input::placeholder": { color: "rgba(255, 255, 255, 0.7)" }
};

export default MainContent;