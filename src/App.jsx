import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainContent from './MainContent';
import { Box } from '@mui/material';
import Projects from './Projects';
import DividerSection from './DividerSection';

const theme = createTheme({
  typography: {
    fontFamily: 'Josefin Sans, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#808080',
    },
    secondary: {
      main: '#808080',
    },
    accent: {
      main: '#808080',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box sx={{ flexGrow: 1 }}>
          <MainContent />
          <DividerSection />
          <Projects /> 
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
