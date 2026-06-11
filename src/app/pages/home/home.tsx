import { FC } from 'react';
import { Box } from '@mui/material';

import Form from '../../components/form/form';
import About from '../../components/about/about';
import ShapeGrid from '../../components/shape-grid/ShapeGrid';

type HomeProps = {
  title?: string;
  subtitle?: string;
};

const HomePage: FC<HomeProps> = ({ title, subtitle }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        backgroundColor: '#000000',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        pt: 2,
        minHeight: '100vh',
        overflow: 'hidden',
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
        <ShapeGrid/>
      </Box>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <About />
        <Form />
      </Box>
    </Box>
  );
};

export default HomePage;