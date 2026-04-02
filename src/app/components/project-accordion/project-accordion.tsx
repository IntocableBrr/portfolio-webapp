import { ReactNode, useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import styles from './project-accordion.module.scss';

type RepoOption = {
  id: string;
  icon: ReactNode;
  label: string;
  content: ReactNode;
};

type RepoProject = {
  id: string;
  repoName: ReactNode;
  options: RepoOption[];
};

type ProjectAccordionListProps = {
  projects: RepoProject[];
};

export default function ProjectAccordionList({projects,}: ProjectAccordionListProps) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string | null>>({});

  const handleOptionClick = (projectId: string, optionId: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [projectId]: optionId,
    }));
  };

  const handleCloseSelectedOption = (projectId: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [projectId]: null,
    }));
  };

  return (
    <Box className={styles.projectAccordionList}>
      {projects.map((project) => {
        const selectedOptionId = selectedOptions[project.id] ?? null;
        const selectedOption =
          project.options.find((option) => option.id === selectedOptionId) ?? null;

        return (
          <Accordion key={project.id} className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon  sx={{ color: 'black' }}/>}
              className={styles.accordionSummary}
              sx={{ '&:hover': { boxShadow: "inset 0 0 0 2px black", borderRadius: '8px', cursor: 'pointer' }}}
            >
              <Typography className={styles.repoTitle}>{project.repoName}</Typography>
            </AccordionSummary>

            <AccordionDetails className={styles.accordionDetails}>
              <Box className={styles.contentWrapper}>
                {!selectedOption ? (
                  <Box className={styles.optionsGrid}>
                    {project.options.map((option) => (
                      <Box key={option.id} onClick={() => handleOptionClick(project.id, option.id)}className={styles.optionCard}>
                        <IconButton
                          className={styles.optionButton}
                          
                          size="large"
                          aria-label={`Open ${option.label}`}
                        >
                          {option.icon}
                        </IconButton>

                        <Typography className={styles.optionLabel}>
                          {option.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Box  className={styles.selectedView}>
                    <Box onClick={() => handleCloseSelectedOption(project.id)} className={styles.selectedOptionCard}>
                      <Box>
                        {selectedOption.icon}
                        <Typography className={styles.optionLabel}>
                          {selectedOption.label}
                        </Typography>
                      </Box>
                      <CloseIcon />
                    </Box>
                    <Box className={styles.textContainer}>
                      {selectedOption.content}
                    </Box>
                  </Box>
                )}
              </Box>
            </AccordionDetails>

          </Accordion>
        );
      })}
    </Box>
  );
}