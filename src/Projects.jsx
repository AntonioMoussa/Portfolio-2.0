import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";

function Projects() {
  const [openSpotifyModal, setOpenSpotifyModal] = useState(false);
  const [openKlarnaModal, setOpenKlarnaModal] = useState(false);

  const handleOpenSpotifyModal = () => setOpenSpotifyModal(true);
  const handleCloseSpotifyModal = () => setOpenSpotifyModal(false);
  const handleOpenKlarnaModal = () => setOpenKlarnaModal(true);
  const handleCloseKlarnaModal = () => setOpenKlarnaModal(false);

  const projects = [
    {
      logo: "/spotify-logo.png",
      projectImage: "/Spotify.clone.png",
      altText: "Spotify Klon",
      description:
        "Responsiv med 20 komponenter, byggd med Spotifys Web API och SDK för en autentisk användarupplevelse. Inkluderat albumvisning, spellistor, spela/pausa, spårval,",
      backgroundImage: "url('/object 6.png')",
      isVideoProject: true,
      handleOpenModal: handleOpenSpotifyModal,
    },

{
      logo: "/flag-logo.png",
      projectImage: "/Flagproject.png",
      altText: "Världens Länder",
      link: "https://worldflagapp.netlify.app",
      description:
        "En hemsida där man kan filtrera länder efter kontinenter och se information som huvudstad, invånare och flagga, i ljus eller mörkt läge.",
      backgroundImage: "url('/object 5.png')",
    },
    {
      logo: "/Klarna-logo.png",
      projectImage: "/Klarna.Checkout.png",
      altText: "Klarna Checkout",
      description:
        "Klarna-kassasystem med backend-integration, som erbjuder både en fristående betalningsportal och integration för e-handelswebbplatser.",
      backgroundImage: "url('/object 4.png')",
      isVideoProject: true,
      handleOpenModal: handleOpenKlarnaModal,
    },
    {
      logo: "/lock-logo.png",
      projectImage: "/Password.generator.png",
      altText: "Lösenords Generator",
      link: "https://newpasswordgenerator1.netlify.app",
      description:
        "Skapar starka lösenord, välj att inkludera bokstäver, siffror och specialtecken, samt ange lösenordets längd. Appen genererar sedan ett lösenord och visar dess säkerhetsnivå.",
      backgroundImage: "url('/object 3.png')",
    },
    {
      logo: "/gift-logo.png",
      projectImage: "/Beställnings.kort.png",
      altText: "Beställningskort",
      link: "https://giftcardapp.netlify.app",
      description:
        "Ett responsivt beställningskortssystem med olika teman och designalternativ. Stilren design och hover-effekter gör det enkelt och användarvänligt.",
      backgroundImage: "url('/object 1.png')",
    },
    {
      logo: "/light-logo.png",
      projectImage: "/Motivations.generator.png",
      altText: "Motivations Generator",
      link: "https://motivationapp2.netlify.app",
      description:
        "inspirerar med citat från ett API. Vid varje knapptryck genereras ett nytt citat. Layouten anpassar sig automatiskt efter skärmstorleken, med interaktiva hover-effekter.",
      backgroundImage: "url('/object 2.png')",
    },

  ];


 return (
    <Box id="projects"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        paddingBottom: "60px",
      }}
    >
       {/* Huvudrubrik */}
       <Typography variant="h3" sx={{ fontWeight: "bold", color: "white", mb: 4 }}>
        Mina Projekt
      </Typography>

      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            alignItems: "center",
            width: "100%",
            maxWidth: "1000px",
            height: "550px", 
            backgroundImage: 'url("/Background.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: 5,
            borderRadius: 2,
            overflow: "hidden",
            marginBottom: 4,
            border: "2px solid #fd853a",
          }}
        >
          {/* Projektbild */}
          <Box
            component="img"
            src={project.projectImage}
            alt={project.altText}
            sx={{
              width: "60%",
              height: "100%", 
              objectFit: "contain",
              padding: 5,
            }}
          />

          {/* Textdel */}
          <Box sx={{ padding: 5, width: "50%", textAlign: "left", color: "white", }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 5, color: "white", }}>
              {project.altText}
            </Typography>

            {/* Scrollbar beskrivningstexten */}
            <Box
              sx={{
                maxHeight: "150px",  
                overflowY: "hidden",
                overflowX: "hidden",  
                pr: 1, 
                "&::-webkit-scrollbar": {
                  width: "5px",  
                },
                "&::-webkit-scrollbar-track": {
                  background: "transparent",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "linear-gradient(#fd853a, #707070)", 
                  borderRadius: "10px",
                },
              }}
            >
              <Typography variant="body1">{project.description}</Typography>
            </Box>
            
            {/* Knapp för att visa projekt */}
            {project.isVideoProject ? (
              <Button
                onClick={handleOpenSpotifyModal}
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "white",
                  border: "2px solid #fd853a",
                  borderRadius: "20px",
                  padding: "8px 16px",
                  mt: 5,
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#fd853a",
                    transform: "scale(1.1)",
                  },
                  "&:active": {
                    transform: "scale(0.9)",
                  },
                  zIndex: 2,
                }}
              >
                Se Projekt
              </Button>
            ) : (
              <Button
                href={project.link}
                target="_blank"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "white",
                  border: "2px solid #fd853a",
                  borderRadius: "20px",
                  padding: "8px 16px",
                  mt: 5,
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#fd853a",
                    transform: "scale(1.1)",
                  },
                  "&:active": {
                    transform: "scale(0.9)",
                  },
                  zIndex: 2,
                }}
              >
                Se Projekt
              </Button>
            )}
          </Box>
        </Box>
      ))}

  {/* Pop Up för Spotify-videon */}
      <Modal
        open={openSpotifyModal}
        onClose={handleCloseSpotifyModal}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "600px",
            backgroundColor: "black",
            borderRadius: "8px",
            p: 2,
          }}
        >
          <video width="100%" controls autoPlay>
            <source src="Spotify-Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Modal>

       {/* Pop Up för Klarna-video */}
       <Modal
        open={openKlarnaModal}
        onClose={handleCloseKlarnaModal}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: "90%",
            maxWidth: "600px",
            backgroundColor: "black",
            borderRadius: "8px",
            p: 2,
          }}
        >
          <video width="100%" controls autoPlay>
            <source src="Klarna-Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Modal>
    </Box>
  );
}

export default Projects;
