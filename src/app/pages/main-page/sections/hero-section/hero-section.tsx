import { Typography } from '@mui/material';
import { AppButton, AppShapeGrid, type SectionId } from '../../../../components';
import styles from './hero-section.module.scss';

export type HeroSectionProps = {
  onNavigate: (section: SectionId) => void;
};

const HeroSection = ({ onNavigate }: HeroSectionProps) => (
  <section id="home" data-section-id="home" className={styles.heroSection}>
    <div className={styles.gridBackground} aria-hidden="true">
      <AppShapeGrid />
    </div>
    <div className={styles.heroContent}>
      <Typography component="h1" className={styles.heroHeading}>
        Hello World
      </Typography>
      <Typography component="p" className={styles.heroDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <AppButton
        variant="primary"
        className={styles.workButton}
        onClick={() => onNavigate('work')}
      >
        Check out my work
      </AppButton>
    </div>
    <ul className={styles.technologyList} aria-label="Technologies">
      {['HTMLS', 'CSS', 'Javascript', 'Node.js', 'React', 'Git', 'Github'].map(
        (technology) => (
          <li key={technology}>{technology}</li>
        )
      )}
    </ul>
  </section>
);

export default HeroSection;
