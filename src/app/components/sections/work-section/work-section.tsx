import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Typography } from '@mui/material';
import CustomButton from '../../custom-button/custom-button';
import type { SectionId } from '../../header/header';
import ScrollStack, { ScrollStackItem } from '../../scroll-stack/ScrollStack';
import styles from './work-section.module.scss';

type WorkSectionProps = {
  onNavigate: (section: SectionId) => void;
};

const WorkSection = ({ onNavigate }: WorkSectionProps) => (
  <section id="work" data-section-id="work" className={styles.workSection}>
    <div className={styles.workHeader}>
      <Typography className={styles.sectionHeading} component="h2" variant="h2">
        My Work
      </Typography>
      <div className={styles.headerActions}>
        <IconButton
          href="https://github.com/intocablebrr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className={styles.githubButton}
        >
          <GitHubIcon />
        </IconButton>
        <CustomButton
          variant="secondary"
          href="/jacob-rosa_Resume.pdf"
          download
          startIcon={<DownloadIcon />}
        >
          Resume
        </CustomButton>
      </div>
    </div>
    <ScrollStack className={styles.workStack}>
      <ScrollStackItem>
        <Typography variant="h5">Card 1</Typography>
        <p>This is the first card in the stack</p>
      </ScrollStackItem>
    </ScrollStack>
    <CustomButton
      variant="primary"
      className={styles.contactButton}
      onClick={() => onNavigate('contact')}
    >
      Contact me
    </CustomButton>
  </section>
);

export default WorkSection;
