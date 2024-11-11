import { IconButton, Box } from "@mui/material";

function SocialMedia() {
  return (
    <Box sx={{ display: "flex", gap: 1, mt: 1, justifyContent: "center" }}>
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
            transform: "scale(1.5)",
          },
        }}
      >
        <Box component="img" src="/Github.png" alt="GitHub" sx={{ width: 25, height: 25 }} />
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
            transform: "scale(1.5)",
          },
        }}
      >
        <Box component="img" src="/Linkedin.png" alt="LinkedIn" sx={{ width: 25, height: 25 }} />
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
            transform: "scale(1.5)",
          },
        }}
      >
        <Box component="img" src="/Instagram.png" alt="Instagram" sx={{ width: 25, height: 25 }} />
      </IconButton>

      <IconButton
        color="inherit"
        href="https://facebook.com/antonio.moussa.7/"
        target="_blank"
        sx={{
          boxShadow: "none",
          outline: "none",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
            transition: "transform 0.3s ease",
            transform: "scale(1.5)",
          },
        }}
      >
        <Box component="img" src="/Facebook.png" alt="Facebook" sx={{ width: 25, height: 25 }} />
      </IconButton>
    </Box>
  );
}

export default SocialMedia;