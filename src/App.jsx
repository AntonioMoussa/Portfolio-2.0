import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainContent from './MainContent';
import { Box } from '@mui/material';
import Projects from './Projects';
import Service from './Service';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Contact from './Contact';

const theme = createTheme({
  typography: {
    fontFamily: 'Urbanist, sans-serif',
  },
  
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}> {/* Använd height istället för minHeight */}
        <Header />
        <Box sx={{ flexGrow: 1, width: '100%' }}>
          <div className="background-box">
            <MainContent />
          </div>
          <div className="background-box">
            <AboutMe />
          </div>
          <div className="background-box">
            <Service />
          </div>
          <Projects />
          <div className="background-box">
          <Contact />
          </div>
          
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
