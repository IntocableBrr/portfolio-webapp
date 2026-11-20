import { Typography } from '@mui/material';
import styles from './about-section.module.scss';

const AboutSection = () => (
  <section id="about" data-section-id="about" className={styles.contentSection}>
    <div className={styles.placeholderContent}>
      <Typography component="h2" variant="h1">
        About me
      </Typography>
      <Typography component="p" variant="h2">
        About me text
      </Typography>
    </div>
  </section>
);

export default AboutSection;
