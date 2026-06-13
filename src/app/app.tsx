import Header from './components/header/header';
import HomePage from './pages/home/home';
import { Box, Typography } from '@mui/material';

export function App() {
      
  return (
    <>
      <Header/>
      <Box
        sx={{
          height: "calc(100vh - 72px)",
          overflowY: 'auto',
          scrollSnapType: 'y mandatory',
        }}
      >
        <HomePage/>
        <Box
          sx={{
            width: '100%',
            height: "calc(100vh - 72px)",
            flexShrink: 0,
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
          }}
        >
          <Typography variant="h1">Page 1</Typography>
          <Typography variant="h2">Subtitle</Typography>
          {/* <Typography variant="h1">Page 1</Typography>
          <Typography variant="h2">Subtitle</Typography>
          <Typography variant="h1">Page 1</Typography>
          <Typography variant="h2">Subtitle</Typography>
          <Typography variant="h1">Page 1</Typography>
          <Typography variant="h2">Subtitle</Typography>
          <Typography variant="h1">Page 1</Typography>
          <Typography variant="h2">Subtitle</Typography>
          <Typography variant="h1">Page 1</Typography>
          <Typography variant="h2">Subtitle</Typography>
          <Typography variant="h1">Page 1</Typography>
          <Typography variant="h2">Subtitle</Typography>
          <Typography variant="h1">Page 1</Typography>
          <Typography variant="h2">Subtitle</Typography> */}
        </Box>
        <Box
          sx={{
            width: '100%',
            height: "calc(100vh - 72px)",
            flexShrink: 0,
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
          }}
        >
          <Typography variant="h1">Page 2</Typography>
          <Typography variant="h2">Subtitle</Typography>
        </Box>
      </Box>
    </>
  );
}

export default App;
