import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function Header() {
  const [openCV, setOpenCV] = useState(false);
  const [openCert, setOpenCert] = useState(false);

  const handleOpenCV = () => setOpenCV(true);
  const handleCloseCV = () => setOpenCV(false);

  const handleOpenCert = () => setOpenCert(true);
  const handleCloseCert = () => setOpenCert(false);

  return (
    <header style={{ display: "flex", justifyContent: "center", }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", 
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
          border:"1px solid #fd853a",
          borderRadius: "25px",
          marginTop: "5px",
          padding: "5px",
        }}
      >
        <Typography variant="body2" component="a" sx={{ color: 'white', textDecoration: 'none', }}>
          Hem
        </Typography>
        <Typography variant="body2" component="a" href="#about" sx={{ color: 'white', textDecoration: 'none', "&:hover": { transform: 'scale(1.1)' } }}>
          Om mig
        </Typography>
        <Typography variant="body2" component="a" href="#services" sx={{ color: 'white', textDecoration: 'none', "&:hover": { transform: 'scale(1.1)' } }}>
          Tjänster
        </Typography>
        <Typography variant="body2" component="a" href="#projects" sx={{ color: 'white', textDecoration: 'none', "&:hover": { transform: 'scale(1.1)' } }}>
          Projekt
        </Typography>
        <Typography variant="body2" component="a" href="#contact" sx={{ color: 'white', textDecoration: 'none', "&:hover": { transform: 'scale(1.1)' } }}>
          Kontakt
        </Typography>

        <Typography
          variant="body2" 
          color="inherit"
          onClick={handleOpenCert}
          sx={{
            border: "none",
            color: "white",
            textDecoration: 'none',
            cursor: "pointer",
            textTransform: "none",
            "&:hover": {
              transition: "transform 0.3s ease",
              transform: "scale(1.1)",
            },
          }}
        >
          Certifikat
          </Typography>

        <Button
          variant="outlined"
          color="inherit"
          onClick={handleOpenCV}
          sx={{
            borderRadius: "20px",
            borderColor: "#fd853a",
            color: "white",
            textTransform: "none",
            "&:hover": {
              transition: "transform 0.3s ease",
              transform: "scale(1.1)",
              backgroundColor: "#fd853a",
            },
          }}
        >
          Mitt CV
        </Button>     
      </Box>

      {/* Popup för CV */}
      <Modal open={openCV} onClose={handleCloseCV} aria-labelledby="modal-title-cv" aria-describedby="modal-description-cv">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80vw",
            maxWidth: "800px",
            height: "70vh",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            backgroundImage: 'url("/Background.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
          }}
        >
          <Typography id="modal-title-cv" variant="h3" component="h2" sx={{ mb: 3, fontWeight: "bold", color: "white", fontFamily: "Josefin Sans", textAlign: "center" }}>
            CV
          </Typography>
          <Box sx={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
              <Viewer fileUrl={`${window.location.origin}/antonio-cv.pdf`} plugins={[]} style={{ height: "100%", width: "100%" }} />
            </Worker>
          </Box>
        </Box>
      </Modal>

      {/* Popup för Certifikat */}
      <Modal open={openCert} onClose={handleCloseCert} aria-labelledby="modal-title-cert" aria-describedby="modal-description-cert">
        <Box
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
            backgroundImage: 'url("/Background.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Typography id="modal-title-cert" variant="h5" component="h2" sx={{ mb: 2, fontWeight: "bold", color: "white", fontFamily: "Josefin Sans", textAlign: "center" }}>
            Mitt Certifikat
          </Typography>
          <img src="/Certifikat.png" alt="Certifikat" style={{ width: "100%", maxHeight: "60vh", objectFit: "contain", borderRadius: "8px" }} />
        </Box>
      </Modal>
    </header>
  );
}

export default Header;
