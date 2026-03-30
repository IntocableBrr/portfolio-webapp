import { Box, Typography } from '@mui/material';
import { FC } from 'react';

type ProjectsProps = {
  title?: string;
  subtitle?: string;
};

const ProjectsPage: FC<ProjectsProps> = ({ title, subtitle }) => {

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '72px 32px 72px 32px', textAlign: 'center'}}>
        <Typography variant='subtitle1'>I'm working on another FULL STACK webapp! Can't wait to tell you more about it.</Typography>
    </Box>
  );
};

export default ProjectsPage;