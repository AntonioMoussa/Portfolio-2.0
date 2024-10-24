import { Box, Typography, Avatar, Button, Modal } from "@mui/material";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import React, { useState } from "react";

function MainContent() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [openCV, setOpenCV] = useState(false);
  const [openCert, setOpenCert] = useState(false);
  const [openOmMig, setOpenOmMig] = useState(false);

  const handleOpenCV = () => setOpenCV(true);
  const handleCloseCV = () => setOpenCV(false);

  const handleOpenCert = () => setOpenCert(true);
  const handleCloseCert = () => setOpenCert(false);

  const handleOpenOmMig = () => setOpenOmMig(true);
  const handleCloseOmMig = () => setOpenOmMig(false);

  return (
    <main>
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          textAlign: "left",
          flexDirection: "column",
        }}
      >
        <Box
          className="icon-container"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 2,
            mb: 2,
            flexWrap: "wrap",
          }}
        ></Box>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
          className="main-content"
        >
          <Avatar
            alt="Antonio"
            src="/Antonio.png"
            className="avatar"
            sx={{ borderRadius: 0 }}
          />

          {/* Text bredvid avatar */}
          <Box sx={{ ml: { sm: 2 }, maxWidth: "600px" }}>
            <Typography
              variant="body1"
              sx={{ fontFamily: "Josefin Sans", fontSize: "20px" }}
            >
              Jag är en passionerad fullstackutvecklare med erfarenhet av React och moderna webbutvecklingsverktyg som Vite, MUI och Figma. Med ett starkt fokus på att skapa användarvänliga och responsiva webbapplikationer, älskar att ta idéer från koncept till verklighet. Mitt mål är alltid att bygga lösningar som inte bara ser bra ut, utan som också ger en sömlös och engagerande användarupplevelse, oavsett enhet eller skärmstorlek. Genom att kombinera innovativ teknik med ett noggrant öga för detaljer, strävar jag efter att skapa digitala produkter som verkligen gör skillnad.
            </Typography>

            {/* Knappar under texten */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
                mt: 2,
              }}
            >
              {/* CV-knapp */}
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleOpenCV}
                sx={{
                  textTransform: "none",
                  "&:hover": {
                    transition: "transform 0.3s ease",
                    transform: "scale(1.1)",
                    backgroundColor: "#e0e0e0",
                    zIndex: 2,
                  },
                }}
              >
                Mitt CV
              </Button>

              {/* Certifikat-knapp */}
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleOpenCert}
                sx={{
                  textTransform: "none",
                  "&:hover": {
                    transition: "transform 0.3s ease",
                    transform: "scale(1.1)",
                    backgroundColor: "#e0e0e0",
                    zIndex: 2,
                  },
                }}
              >
                Visa Certifikat
              </Button>

              {/* Om mig-knapp */}
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleOpenOmMig}
                sx={{
                  textTransform: "none",
                  "&:hover": {
                    transition: "transform 0.3s ease",
                    transform: "scale(1.1)",
                    backgroundColor: "#e0e0e0",
                    zIndex: 2,
                  },
                }}
              >
                Om mig
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* popup för CV */}
      <Modal
      open={openCV}
      onClose={handleCloseCV}
      aria-labelledby="modal-title-cv"
      aria-describedby="modal-description-cv"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          maxWidth: "800px",
          height: "70vh",
          border: "none",
          boxShadow: 24,
          p: 4,
          borderRadius: 3,
          outline: "none",
          backgroundImage: 'url("/Background.png")',
          bgcolor: "background.paper",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          
        }}
      >
        <Typography
          id="modal-title-cv"
          variant="h3"
          component="h2"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "#333",
            fontFamily: "Josefin Sans",
            textAlign: "center",
          }}
        >
         CV
        </Typography>
        
        
      {/* PDF Viewer */}
      <Box
            sx={{
              height: "calc(100% - 60px)", 
                height: "100%", 
                width: "100%",  
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer
                    fileUrl={`${window.location.origin}/antonio-cv.pdf`}
                    plugins={[]}
                    style={{ height: "100%", width: "100%" }}
                />
            </Worker>
         </Box>
      </Box>
    </Modal>

      {/* popup för Certifikat */}
      <Modal
        open={openCert}
        onClose={handleCloseCert}
        aria-labelledby="modal-title-cert"
        aria-describedby="modal-description-cert"
      >
        <Box className="modal-box"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw", 
            maxWidth: "700px", 
            maxHeight: "80vh", 
            bgcolor: "background.paper",
            border: "none",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            outline: "none",
            overflow: "hidden",
            backgroundImage: 'url("/Background.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography
            id="modal-title-cert"
            variant="h5"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#333",
              fontFamily: "Josefin Sans",
            }}
          >
            Mitt Certifikat
          </Typography>
          <Typography
            id="modal-description-cert"
            sx={{ mb: 3, color: "#555", fontFamily: "Josefin Sans" }}
          >
            Här är mitt certifikat från min programmeringskurs.
          </Typography>

          <img
            src="/Certifikat.png"
            alt="Certifikat"
            style={{
              width: "100%", 
              maxHeight: "60vh", 
              objectFit: "contain", 
              borderRadius: "8px",
            }}
          />
        </Box>
      </Modal>

      {/* popup för Om mig */}
      <Modal
        open={openOmMig}
        onClose={handleCloseOmMig}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="modal-box"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            bgcolor: "background.paper",
            border: "none",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            outline: "none",
            backgroundImage: 'url("/Background.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography
            id="modal-title"
            variant="h5"
            component="h2"
            sx={{
              mb: 3,
              fontWeight: "bold",
              color: "#333",
              fontFamily: "Josefin Sans",
            }}
          >
            Antonio Moussa
          </Typography>
          <Typography
            id="modal-description"
            sx={{ mb: 5, fontWeight: "bold",
              color: "#333", fontFamily: "Josefin Sans" }}
          >
            jag har nyligen avslutat min utbildning som fullstackutvecklare.
            Under min utbildning har jag utvecklat en stark passion för att koda
            och bygga användarvänliga applikationer och webbplatser. Jag trivs
            bäst när jag får arbeta med tekniska utmaningar och ser alltid till
            att förbättra mina kunskaper inom både frontend och
            backend-utveckling. Jag har arbetat med flera projekt där jag fått
            möjlighet att tillämpa mina kunskaper, jag ser fram emot att få
            fortsätta utvecklas inom dessa områden. Jag är en mycket driven och
            målinriktad person som älskar att ta mig an nya utmaningar. På min
            fritid ägnar jag mig åt träning, vilket ger mig den balans och
            energi som krävs för att fortsätta växa både professionellt och
            personligt. Jag tror att min vilja att ständigt förbättras,
            tillsammans med min passion för utveckling, gör mig till den
            personen jag är idag. Här är några av de verktyg och
            programmeringsspråk jag använder:
          </Typography>

          {/* Bilder i popup */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 2,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <img
              src="/Ts.png"
              alt="TypeScript"
              style={{ width: "50px", height: "50px" }}
            />

            <img
              src="/React.png"
              alt="React"
              style={{ width: "50px", height: "50px" }}
            />

            <img
              src="/firebase.png"
              alt="Firebase"
              style={{ width: "60px", height: "60px" }}
            />

            <img
              src="/css.png"
              alt="CSS"
              style={{ width: "50px", height: "50px" }}
            />

            <img
              src="/HTML5.png"
              alt="HTML5"
              style={{ width: "50px", height: "50px" }}
            />

            <img
              src="/Mongodb.png"
              alt="MongoDB"
              style={{ width: "120px", height: "50px" }}
            />

            <img
              src="/Npm.png"
              alt="NPM"
              style={{ width: "60px", height: "60px" }}
            />

            <img
              src="/Js.png"
              alt="JavaScript"
              style={{ width: "50px", height: "50px" }}
            />
          </Box>
        </Box>
      </Modal>
    </main>
  );
}

export default MainContent;