import { FC, useState } from 'react';
import {
  Box,
  Link,
  Typography,
} from '@mui/material';

type AboutProps = {
  title?: string;
  subtitle?: string;
};

type Description = {
    keyword: string,
    description: string
}

const About: FC<AboutProps> = ({ title, subtitle }) => {
const [description, setDescription] = useState<Description | null>(null);

const clickAction = {
    frontEnd: {
      keyword: "Front End",
      description: "The front end is the part of an application that runs in the browser and users interact with—built using technologies like HTML, CSS, and JavaScript (e.g., React)." 
    },
    fullStack: {
      keyword: "Full Stack",
      description: "A full-stack developer works on both the frontend and backend of an application—building the user interface, handling server logic, APIs, and working with databases." 
    },
    theStack:{
      keyword:"",
      description: ""
    },
    softwareEngineer: {
      keyword:"Software Engineer",
      description: "A software engineer designs, builds, tests, and maintains software systems using engineering principles—focusing on scalability, performance, and reliability."
    },
    uI:{
      keyword:"UI (User Interface)",
      description: "UI is everything the user visually interacts with—buttons, forms, layouts, colors, and typography."
    }
}

  return (
    <Box sx={{ m: '20px' }}>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          About Me
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            minWidth: 250,
            maxWidth: 400,
            mt: '20px',
            textAlign: 'left',
          }}
        >
            Hi, I’m Jacob Rosa, a
            {' '}
            <Link sx={{ cursor: 'pointer' }} onClick={()=>{setDescription(clickAction.softwareEngineer as never)}}>Software Engineer</Link>
            {' '}
            transitioning into 
            {' '}
            <Link sx={{ cursor: 'pointer' }} onClick={()=>{setDescription(clickAction.fullStack as never)}}>Full Stack</Link>
            {' '}
            development. After spending over 3 years building enterprise-level
            {' '}
            <Link sx={{ cursor: 'pointer' }} onClick={()=>{setDescription(clickAction.frontEnd as never)}}>Front End</Link> 
            {' '}
            applications, I reached a point where I wanted to go deeper—beyond the 
                          {' '}
            <Link sx={{ cursor: 'pointer' }} onClick={()=>{setDescription(clickAction.uI as never)}}>UI</Link> 
            {' '} 
            and into the full system. Instead of just studying it, I chose to build it. This project is the result of that decision: a hands-on challenge to expand my skills, work across the stack, and grow into a more complete engineer.
        </Typography>
        { description &&
          <Box
            sx={{
              minWidth: 250,
              maxWidth: 400,
              mt: '20px',
              textAlign: 'left',
              border: '1px solid green',
              borderRadius: 5,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ textAlign: 'center', mt: '20px' }}
            >
                {description.keyword}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                m: '20px',
                minWidth: 250,
                maxWidth: 400,
                textAlign: 'left',
              }}
            >
                {description.description}
            </Typography>
        </Box>
      }
    </Box>
  );
};

export default About;