import { Box, Typography } from '@mui/material';
import { FC, useState } from 'react';

type ProjectsProps = {
  title?: string;
  subtitle?: string;
};

const ProjectsPage: FC<ProjectsProps> = ({ title, subtitle }) => {
      const [value, setValue] = useState(0);

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20, textAlign: 'center'}}>
        <Typography variant='subtitle1'>I'm working on another FULL STACK webapp! Can't to tell you more about it.</Typography>
    </Box>
  );
};

export default ProjectsPage;