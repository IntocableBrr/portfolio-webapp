import { Box, Typography, Link, Tooltip } from '@mui/material';
import { FC, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectAccordionList from '../../components/project-accordion/project-accordion';
import StorefrontIcon from '@mui/icons-material/Storefront';
import WorkIcon from '@mui/icons-material/Work';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import InfoIcon from '@mui/icons-material/Info';

type ProjectsProps = {
  title?: string;
  subtitle?: string;
};

const ProjectsPage: FC<ProjectsProps> = ({ title, subtitle }) => {
const [copiedFront, setCopiedFront] = useState(false);
const [copiedBack, setCopiedBack] = useState(false);

const handleCopy = async (text: string) => {
  console.log({text});
  await navigator.clipboard.writeText(text);
  const isFront = text === "https://github.com/IntocableBrr/portfolio-webapp"

  if  (isFront) {
    setCopiedFront(true);
    setTimeout(() => setCopiedFront(false), 1500);
  } else {
    setCopiedBack(true);
    setTimeout(() => setCopiedBack(false), 1500)
  }
}

  const projects = [
    {
      id: 'portfolio',
      repoName: <Box sx={{ alignItems: "center", display: "flex", color: "green"}}><WorkIcon sx={{ mr: ".25rem",  }}/><Typography sx={{ mr: ".25rem", fontWeight: 800 }}>{"Portfolio"}</Typography></Box>,
      options: [
        {
          id: 'repo',
          icon: <GitHubIcon sx={{color: 'black'}}/>,
          label: 'Repositories',
          content: (
            <Box sx={{ direction: "row", display: "flex", width: "stretch", justifyContent: "space-evenly", flexWrap: 'wrap', gap:"24px"}}>
              <Box sx={{ direction: "column", mb: "16px"}}>
                <Box onClick={() => handleCopy("https://github.com/IntocableBrr/portfolio-webapp")} sx={{ '&:hover': { boxShadow: "inset 0 0 0 2px black", borderRadius: '8px', cursor: 'pointer' }, mb: "8px", direction: "row", display: "flex", width: "stretch", justifyContent: "space-between", flexWrap: 'wrap', gap:"24px", padding: "8px"}}>
                  <Typography sx={{color: "black", fontWeight: "800"}}>
                    {copiedFront ? "Copied!" :"Front End"}
                  </Typography>
                  <Tooltip title={copiedFront ? 'Copied!' : 'Copy link'}>
                    <ContentCopyIcon />
                  </Tooltip>
                </Box>
                <Link sx={{overflowWrap: "anywhere"}} href="https://github.com/IntocableBrr/portfolio-webapp" target="_blank" rel="noreferrer">
                  github.com/IntocableBrr/portfolio-webapp
                </Link>
              </Box>
              <Box  sx={{ direction: "column",}}>
                <Box onClick={() => handleCopy("https://github.com/IntocableBrr/portfolio-api")} sx={{ '&:hover': { boxShadow: "inset 0 0 0 2px black", borderRadius: '8px', cursor: 'pointer' }, mb: "8px", direction: "row", display: "flex", width: "stretch", justifyContent: "space-between", flexWrap: 'wrap', gap:"24px", padding: "8px"}}>
                  <Typography sx={{color: "black", fontWeight: "800"}}>
                      {copiedBack ? "Copied!" :"Back End"}
                  </Typography>
                  <Tooltip title={copiedBack ? 'Copied!' : 'Copy link'}>
                    <ContentCopyIcon />
                  </Tooltip>
                </Box>
                <Link sx={{overflowWrap: "anywhere"}} href="https://github.com/IntocableBrr/portfolio-api" target="_blank" rel="noreferrer">
                  github.com/IntocableBrr/portfolio-api
                </Link>
              </Box>
            </Box>
          ),
        },
        {
          id: 'live',
          icon: <HikingOutlinedIcon sx={{color: "black"}}/>,
          label: 'Versions',
          content: (
            <Box sx={{ direction: "row", display: "flex", width: "stretch", justifyContent: "space-evenly", flexWrap: 'wrap', gap:"24px" }}>
              <Box  sx={{ direction: "column", mb: "16px"}}>
                <Typography sx={{color: "black", fontWeight: "800", mt: "16px"}}>1.0.0</Typography>
                <Typography sx={{color: "red", textAlign: "left", padding: "8px"}}>Removed NX boilerplate code</Typography>
                <Typography sx={{color: "green", textAlign: "left", padding: "8px"}}>Added:</Typography>
                <ul>
                  <li><Typography sx={{color: "black", textAlign: "left", padding: "8px"}}>Mui dependencies</Typography></li>
                  <li><Typography sx={{color: "black", textAlign: "left", padding: "8px"}}>Basic form with error handling</Typography></li>
                  <li><Typography sx={{color: "black", textAlign: "left", padding: "8px"}}>API call with payload data</Typography></li>
                </ul>
                <Box onClick={() => handleCopy("https://github.com/IntocableBrr/portfolio-webapp/pull/1")} sx={{ '&:hover': { boxShadow: "inset 0 0 0 2px black", borderRadius: '8px', cursor: 'pointer' }, direction: "row", display: "flex", width: "stretch", justifyContent: "space-between", flexWrap: 'wrap', gap:"24px", padding: "8px"}}>
                  <Typography sx={{color: "black", fontWeight: "800"}}>
                    {copiedBack ? "Copied!" :"Pull Request"}
                  </Typography>
                  <Tooltip title={copiedBack ? 'Copied!' : 'Copy link'}>
                    <ContentCopyIcon />
                  </Tooltip>
                </Box>
                <Link sx={{overflowWrap: "anywhere"}} href="https://github.com/IntocableBrr/portfolio-webapp/pull/1" target="_blank" rel="noreferrer">
                  https://github.com/IntocableBrr/portfolio-webapp/pull/1
                </Link>
              </Box>
            </Box>
          ),
        },
        {
          id: 'docs',
          icon: <InfoIcon sx={{color: "black"}}/>,
          label: 'README',
          content: (
            <Box sx={{ direction: "column",}}>
              <Typography variant='subtitle1' sx={{mb: "8px"}}>
                Portfolio Web App 
                </Typography>
              <Typography sx={{textAlign: "left"}}>
                A full-stack portfolio application built with React, TypeScript, and AWS to showcase projects and handle real user interactions through a production-ready backend.
              </Typography>
            </Box>
          ),
        }
      ],
    },
    {
      id: 'admin',
      repoName: 
      <Box sx={{ alignItems: "center", display: "flex"}}>
        <StorefrontIcon sx={{ mr: ".25rem", color: "blue" }}/>
        <Typography sx={{fontWeight: 800, color: "blue" }}>
          {"POS (Point Of Sale)"}
        </Typography>
      </Box>,
      options: [
        {
          id: 'repo',
          icon: <HourglassEmptyIcon sx={{ color: "black" }}/>,
          label: 'Coming Soon',
          content: <Typography>I'm working on a POS system to keep track of business</Typography>,
        }
      ],
    },
  ];

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '72px 32px 72px 32px', textAlign: 'center'}}>
        <ProjectAccordionList projects={projects}/>
    </Box>
  );
};

export default ProjectsPage;