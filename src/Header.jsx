import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SchoolIcon from "@mui/icons-material/School";

function Header() {
  const [openCV, setOpenCV] = useState(false);
  const [openCert, setOpenCert] = useState(false);

  const handleOpenCV = () => setOpenCV(true);
  const handleCloseCV = () => setOpenCV(false);

  const handleOpenCert = () => setOpenCert(true);
  const handleCloseCert = () => setOpenCert(false);

  return (
    <header
      style={{
        top: 0,
        width: "100%",
        zIndex: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        padding: "10px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "25px",
          margin: "30px auto",
          width: "900px",
          maxWidth: "100%",
          padding: "10px 20px",
        }}
      >
        <Typography
          variant="body2"
          component="a"
          href="#home"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "white",
            textDecoration: "none",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              height: "2px",
              width: "0%",
              backgroundColor: "#fd853a",
              transition: "width 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          <HomeIcon fontSize="small" /> Hem
        </Typography>
        <Typography
          variant="body2"
          component="a"
          href="#about"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "white",
            textDecoration: "none",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              height: "2px",
              width: "0%",
              backgroundColor: "#fd853a",
              transition: "width 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          <InfoIcon fontSize="small" /> Om mig
        </Typography>
        <Typography
          variant="body2"
          component="a"
          href="#services"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "white",
            textDecoration: "none",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              height: "2px",
              width: "0%",
              backgroundColor: "#fd853a",
              transition: "width 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          <BuildIcon fontSize="small" /> Tjänster
        </Typography>
        <Typography
          variant="body2"
          component="a"
          href="#projects"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "white",
            textDecoration: "none",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              height: "2px",
              width: "0%",
              backgroundColor: "#fd853a",
              transition: "width 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          <FolderIcon fontSize="small" /> Projekt
        </Typography>
        <Typography
          variant="body2"
          component="a"
          href="#contact"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "white",
            textDecoration: "none",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              height: "2px",
              width: "0%",
              backgroundColor: "#fd853a",
              transition: "width 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          <ContactMailIcon fontSize="small" /> Kontakt
        </Typography>
        <Typography
          variant="body2"
          color="inherit"
          onClick={handleOpenCert}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "white",
            textDecoration: "none",
            cursor: "pointer",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -2,
              left: 0,
              height: "2px",
              width: "0%",
              backgroundColor: "#fd853a",
              transition: "width 0.3s ease-in-out",
            },
            "&:hover::after": {
              width: "100%",
            },
          }}
        >
          <SchoolIcon fontSize="small" /> Certifikat
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
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#fd853a",
              borderColor: "transparent",
              color: "black",
            },
          }}
        >
          Mitt CV
        </Button>
      </Box>

      {/* Popup för CV */}
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
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            backgroundImage: 'url("/Background.png")',
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
              color: "white",
              fontFamily: "Urbanist, sans-serif",
              textAlign: "center",
            }}
          >
            CV
          </Typography>
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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

      {/* Popup för Certifikat */}
      <Modal
        open={openCert}
        onClose={handleCloseCert}
        aria-labelledby="modal-title-cert"
        aria-describedby="modal-description-cert"
      >
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
          <Typography
            id="modal-title-cert"
            variant="h5"
            component="h2"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "white",
              fontFamily: "Josefin Sans",
              textAlign: "center",
            }}
          >
            Mitt Certifikat
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
    </header>
  );
}

export default Header;

