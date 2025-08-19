import { Button, Typography, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#2C4A52' }, // Bleu sobre, islamique
    secondary: { main: '#8B7E74' }, // Beige/terre, culturellement neutre
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" gutterBottom>
          FaydahKom Admin Panel
        </Typography>
        <Button variant="contained" color="primary">
          Tester Bouton
        </Button>
      </Container>
    </ThemeProvider>
  );
}
export default App;