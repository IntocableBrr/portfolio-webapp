import { Box, Typography } from '@mui/material';

import ShapeGrid from '../../components/shape-grid/ShapeGrid';

const HomePage= () => {
  return (
    <Box
      sx={{
        position: 'relative',
        flexShrink: 0,
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
      }}
    >
      <Box
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
      >
        <Typography variant="h1">Hero/Home Page!</Typography>
        <Typography variant="h2">Subtitle</Typography>
      </Box>
    </Box>
  );
};

export default HomePage;