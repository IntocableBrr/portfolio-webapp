import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Typography } from '@mui/material';
import { AppButton, AppScrollStack, AppScrollStackItem, type SectionId } from '../../../../components';
import styles from './work-section.module.scss';

export type WorkSectionProps = {
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
        <AppButton
          variant="secondary"
          href="/jacob-rosa_Resume.pdf"
          download
          startIcon={<DownloadIcon />}
        >
          Resume
        </AppButton>
      </div>
    </div>
    <AppScrollStack className={styles.workStack}>
      <AppScrollStackItem>
        <Typography variant="h5">Card 1</Typography>
        <p>This is the first card in the stack</p>
      </AppScrollStackItem>
      <AppScrollStackItem>
        <Typography variant="h5">Card 2</Typography>
        <p>This is the second card in the stack</p>
      </AppScrollStackItem>
    </AppScrollStack>
    <AppButton
      variant="primary"
      className={styles.contactButton}
      onClick={() => onNavigate('contact')}
    >
      Contact me
    </AppButton>
  </section>
);

export default WorkSection;
