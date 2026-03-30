import { FC } from 'react';
import { Box } from '@mui/material';

import Form from '../../components/form/form';
import About from '../../components/about/about';

type HomeProps = {
  title?: string;
  subtitle?: string;
};

const HomePage: FC<HomeProps> = ({ title, subtitle }) => {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        pt: 2,
      }}
    >
      <About />
      <Form />
    </Box>
  );
};

export default HomePage;