import { AppBar, Toolbar, IconButton, Box } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 0,
      }}
    >
      <Toolbar sx={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
        {/* Sociala medier-knappar */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <IconButton
            color="inherit"
            href="https://github.com/AntonioMoussa"
            target="_blank"
            sx={{
              boxShadow: "none",
              outline: "none",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                transition: "transform 0.3s ease",
                transform: "scale(1.2)",
              },
            }}
          >
            <Box
              component="img"
              src="/Github.png"
              alt="GitHub"
              sx={{ width: 70, height: 70 }}
            />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/antonio-moussa-7a27421b0/"
            target="_blank"
            sx={{
              boxShadow: "none",
              outline: "none",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                transition: "transform 0.3s ease",
                transform: "scale(1.2)",
              },
            }}
          >
            <Box
              component="img"
              src="/Linkedin.png"
              alt="LinkedIn"
              sx={{ width: 70, height: 70 }}
            />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://www.instagram.com/antonio.moussa_/"
            target="_blank"
            sx={{
              boxShadow: "none",
              outline: "none",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                transition: "transform 0.3s ease",
                transform: "scale(1.2)",
              },
            }}
          >
            <Box
              component="img"
              src="/Instagram.png"
              alt="Instagram"
              sx={{ width: 70, height: 70 }}
            />
          </IconButton>

          <IconButton
            color="inherit"
            href="mailto:Antonio.moussa@hotmail.com"
            sx={{
              boxShadow: "none",
              outline: "none",
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
                transition: "transform 0.3s ease",
                transform: "scale(1.2)",
              },
            }}
          >
            <Box
              component="img"
              src="/Mail.png"
              alt="Contact"
              sx={{ width: 70, height: 70 }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
