import { Box, Typography, Button, Avatar, Modal } from "@mui/material";
import React, { useState } from "react";

function AboutMe() {
  const [openMore, setOpenMore] = useState(false);

  const handleOpenMore = () => setOpenMore(true);
  const handleCloseMore = () => setOpenMore(false);

  return (
    <Box id="about"
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
      {/* Bildsektion */}
      <Avatar
        alt="Om mig"
        src="/Antonio1.png"
        sx={{
          width: { xs: 300, md: 450 },
              height: "auto",
              borderRadius: 0,
              mb: 2,
        }}
      />

      {/* Textsektion */}
      <Box sx={{ maxWidth: "600px", color: "white", }}>
        <Typography variant="h4" sx={{ 
          mb: 2, fontWeight: "bold" }}>
          Om mig
        </Typography>
        <Typography variant="body1">
        Jag hjälper företag inom tech och produktutveckling att lösa behovet av användarvänliga och skalbara lösningar, så att deras kunder får en sömlös upplevelse och företaget kan växa effektivt. Genom mitt fokus på moderna ramverk och responsiv design kan företag undvika krångliga användarflöden och få lösningar som är både hållbara och framtidssäkra.
        </Typography>

        {/* "Läs mer" knappen */}
        <Button
          variant="outlined"
          color="inherit"
          onClick={handleOpenMore}
          sx={{
            borderRadius: "20px",
            backgroundColor: "#fd853a",
            color: "white",
            border: "none",
            marginTop: 5,
            textTransform: "none",
            "&:hover": {
              transition: "transform 0.3s ease",
              transform: "scale(1.1)",
              zIndex: 2,
            },
          }}
        >
          Läs mer
        </Button>
      </Box>

      {/* Popup Modal för Läs mer */}
      <Modal
        open={openMore}
        onClose={handleCloseMore}
        aria-labelledby="modal-title-more"
        aria-describedby="modal-description-more"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70vw",
            maxWidth: "700px",
            maxHeight: "80vh",
            bgcolor: "background.paper",
            border: "none",
            boxShadow: 24,
            p: 4,
            borderRadius: 10,
            outline: "none",
            overflow: "auto",
            backgroundImage: 'url("/Background.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography
            id="modal-title-more"
            variant="h5"
            component="h2"
            sx={{
              mb: 3,
              fontWeight: "bold",
              color: "white",
              fontFamily: "Josefin Sans",
              fontSize: "30px",
            }}
          >
            Mer om mig
          </Typography>
          <Typography
            id="modal-description-more"
            sx={{ color: "white", fontFamily: "Josefin Sans",
            fontSize: "20px",
             }}

          >
          Jag har nyligen avslutat min utbildning som fullstackutvecklare. Under min utbildning har jag utvecklat en stark passion för att koda och bygga användarvänliga applikationer och webbplatser. Jag trivs bäst när jag får arbeta med tekniska utmaningar och ser alltid till att förbättra mina kunskaper inom både frontend och backend-utveckling. Jag har arbetat med flera projekt där jag fått möjlighet att tillämpa mina kunskaper, jag ser fram emot att få fortsätta utvecklas inom dessa områden. Jag är en mycket driven och målinriktad person som älskar att ta mig an nya utmaningar. På min fritid ägnar jag mig åt träning, vilket ger mig den balans och energi som krävs för att fortsätta växa både professionellt och personligt. Jag tror att min vilja att ständigt förbättras, tillsammans med min passion för utveckling, gör mig till den personen jag är idag.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}

export default AboutMe;