import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Box
      sx={{
        p: 2,
        textAlign: "center",
        paddingBottom: "60px",
        marginTop: "250px",
        marginBottom: "90px",
        display: "flex",
        justifyContent: "center",
      }}
    >
     <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",  
      sm: "1fr", 
      md: "repeat(2, 1fr)"  
    },
    gap: 10,
    maxWidth: "1000px",
  }}
      >
        {[
          {
            logo: "/spotify-logo.png",
            projectImage: "/Spotify.clone.png",
            altText: "Spotify Clone",
            link: "https://spotify-clone.example.com",
            description:
              "En responsiv Spotify-klon skapad med verktyg för att efterlikna originalet. Applikationen består av cirka 20 komponenter och använder Spotifys Web API och SDK för att ge en upplevelse liknande Spotify. Funktionerna inkluderar att visa album och spellistor, spela och pausa låtar, hoppa över spår och justera volymen.",
            backgroundImage: "url('/object 6.png')",
          },
          {
            logo: "/flag-logo.png",
            projectImage: "/Flagproject.png",
            altText: "Flag Project",
            link: "https://worldflagapp.netlify.app",
            description:
              "Här har jag byggt en hemsida där man enkelt kan filtrera länder efter kontinenter. Man kan även se information om länderna, som till exempel huvudstad och antal invånare. Självklart visas även varje lands flagga. Sidan har dessutom ett ljus- och mörkt läge som användaren kan växla mellan.",
            backgroundImage: "url('/object 5.png')",
          },
          {
            logo: "/Klarna-logo.png",
            projectImage: "/Klarna.Checkout.png",
            altText: "Klarna Checkout",
            link: "https://klarna-checkout.example.com",
            description:
              "Ett Klarna-kassasystem byggt med responsiv design och backend-integration. Klarna Checkout erbjuder en fristående betalningsportal samt ett integrationsalternativ för andra e-handelswebbplatser.",
            backgroundImage: "url('/object 4.png')",
          },
          {
            logo: "/lock-logo.png",
            projectImage: "/Password.generator.png",
            altText: "Password Generator",
            link: "https://newpasswordgenerator1.netlify.app",
            description:
              "En lösenordsgenerator som hjälper användare att skapa starka och säkra lösenord. Att skapa ett säkert lösenord kan vara svårt, därför byggde jag denna lösenordsgenerator. Användarna kan enkelt välja om de vill inkludera stora eller små bokstäver, siffror eller specialtecken, samt ange längden på lösenordet. Därefter genererar appen ett lösenord och visar hur säkert det är. Mycket smidigt och användarvänligt.",
            backgroundImage: "url('/object 3.png')",
          },
          {
            logo: "/gift-logo.png",
            projectImage: "/Beställnings.kort.png",
            altText: "Beställningskort",
            link: "https://giftcardapp.netlify.app",
            description:
              "Ett beställningskortssystem med olika teman och designalternativ för kunder. Systemet har en responsiv och stilren design med hover-effekter som gör applikationen användarvänlig och enkel att hantera.",
            backgroundImage: "url('/object 1.png')",
          },
          {
            logo: "/light-logo.png",
            projectImage: "/Motivations.generator.png",
            altText: "Motivations Generator",
            link: "https://motivationapp2.netlify.app",
            description:
              "En motivationsgenerator som inspirerar användare med citat och idéer. Applikationen hämtar motiverande citat från ett API, där varje knapptryck genererar ett nytt citat. Den är responsiv och anpassar sig till olika skärmstorlekar, vilket ger en optimal användarupplevelse både på mobila enheter och stationära datorer. Jag har designat en layout som automatiskt anpassar sig efter användarens skärmstorlek, och implementerat interaktiva element som hover-effekter för alla klickbara komponenter, vilket gör applikationen mer engagerande och användarvänlig. Applikationen hämtar och visar dynamiskt innehåll från ett externt API.",
            backgroundImage: "url('/object 2.png')",
          },
        ].map((project, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              border: "2px solid #808080",
              padding: "20px",
              borderRadius: "8px",
              position: "relative",
            }}
          >
            {/* Bakgrundsbilden med suddig effekt */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: project.backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(5px)",
                zIndex: 0,
                borderRadius: "8px",
              }}
            />

            {/* Innehållet ovanpå den suddiga bakgrunden */}
            <div
              className="project-container"
              style={{ position: "relative", zIndex: 0 }}
            >
              <img
                src={project.logo}
                alt={project.altText}
                className="logo-image"
                style={{ width: 100, height: "auto" }}
              />
              <img
                src={project.projectImage}
                alt={project.altText}
                className="project-image hover"
                style={{
                  width: "100%",  
                  maxWidth: "500px",  
                  height: "auto",
                }}
              />
            </div>

            {/* Knapp: Se sidan live */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                marginTop: 1,
              }}
            >
              <Button
                href={project.link}
                target="_blank"
                variant="outlined"
                sx={{
                  textTransform: "none",
                  border: "2px solid #808080",
                  color: "black",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "#e0e0e0",
                  },
                  "&:active": {
                    transform: "scale(0.9)",
                  },
                  zIndex: 2,
                }}
              >
                Se sidan live!
              </Button>

              {/* knapp: Om projektet */}
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  border: "2px solid #808080",
                  color: "black",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "#e0e0e0",
                  },
                  "&:active": {
                    transform: "scale(0.9)",
                  },
                  zIndex: 2,
                }}
                onClick={() => handleOpen(project)}
              >
                Om projektet
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Popup för projektbeskrivningen */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       <Box className="modal-box"
          sx={{
            width: 400,
            bgcolor: "white",
            borderRadius: 4,
            p: 4,
            boxShadow: 24,
            backgroundImage: "url('/Background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {selectedProject && (
            <>
              <Typography
                id="project-modal-title"
                variant="h6"
                component="h2"
                sx={{ fontFamily: "Josefin Sans", textAlign: "center" }}
              >
                {selectedProject.altText}
              </Typography>
              <Typography
                id="project-modal-description"
                sx={{ mt: 2, fontFamily: "Josefin Sans", textAlign: "center" }}
              >
                {selectedProject.description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default Projects;
