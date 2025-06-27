import { Container, Typography } from '@mui/material';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        React URL Shortener
      </Typography>
      <HomePage />
    </Container>
  );
}

export default App;
