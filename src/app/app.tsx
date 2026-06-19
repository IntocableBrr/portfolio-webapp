import Header from './components/header/header';
import HomePage from './pages/home/home';
import { Box, Button, Typography } from '@mui/material';
import ScrollStack, { ScrollStackItem } from './components/scroll-stack/ScrollStack';
import ShapeGrid from './components/shape-grid/ShapeGrid';

export function App() {
      
  return (
    <>
      <Header/>
      <Box
        sx={{
          height: "calc(100vh - 72px)",
          overflowY: 'auto',
          scrollSnapType: 'y mandatory',
          background: '#010101',
          // background: 'linear-gradient(to right, #170D0D, #340D0D)',
          // backgroung: 'white'
        }}
      >
        <HomePage/>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            flexShrink: 0,
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            flexDirection: 'column',
            textAlign: 'start',
            color: '#ffffff',
          }}
        >
          {/* <Box
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          >
            <ShapeGrid />
          </Box>
          <Box            
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: "calc(100vh - 72px)",
            }}
          > */}
            <Typography sx={{ margin: '4rem 0 4rem 0', }} variant="h2">My Work</Typography>
            <ScrollStack>
              <Box sx={{ cursor: 'pointer', }} onClick={() => console.log('clicked')}>
                <ScrollStackItem>
                  <Typography variant="h5">Card 1</Typography>
                  <p>This is the first card in the stack</p>
                </ScrollStackItem>
              </Box>
              <ScrollStackItem>
                <Typography variant="h5">Card 2</Typography>
                <p>This is the second card in the stack</p>
              </ScrollStackItem>
              <ScrollStackItem>
                <Typography variant="h5">Card 3</Typography>
                <p>This is the third card in the stack</p>
              </ScrollStackItem>
            </ScrollStack>
            <Button sx={{ margin: '4rem 0', }} variant="contained">View more</Button>
          {/* </Box> */}
        </Box>
        <Box
          sx={{
            width: '100%',
            height: "calc(100vh - 72px)",
            flexShrink: 0,
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always',
            color: '#ffffff',
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
