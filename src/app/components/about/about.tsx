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
    fullStack: {
        keyword: "Full Stack Key Word",
        description: "Full Stack description goes here" 
    },
    theStack:{
        keyword:"The Stack",
        description: "The Stack description goes here"
    }
}

const getDescription =(description: Description)=> {
    return(
        <Box
            sx={{
              minWidth: 250,
              maxWidth: 400,
              mt: '20px',
              textAlign: 'left',
              border: '1px solid black',
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
    )
}

  return (
    <>
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
              <Link sx={{ cursor: 'pointer' }} onClick={()=>{setDescription(clickAction.fullStack as never)}}>Software Engineer</Link>
              {' '}
              transitioning into full stack development. After spending over 3 years building enterprise-level frontend applications, I reached a point where I wanted to go deeper—beyond the UI and into the full system. Instead of just studying it, I chose to build it. This project is the result of that decision: a hands-on challenge to expand my skills, work across the stack, and grow into a more complete engineer.
          </Typography>
          { description &&
                    <Box
            sx={{
              minWidth: 250,
              maxWidth: 400,
              mt: '20px',
              textAlign: 'left',
              border: '1px solid black',
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
    </>
  );
};

export default About;