import { Typography } from '@mui/material';
import CustomButton from '../../custom-button/custom-button';
import type { SectionId } from '../../header/header';
import ShapeGrid from '../../shape-grid/ShapeGrid';
import styles from './hero-section.module.scss';

type HeroSectionProps = {
  onNavigate: (section: SectionId) => void;
};

const HeroSection = ({ onNavigate }: HeroSectionProps) => (
  <section id="home" data-section-id="home" className={styles.heroSection}>
    <div className={styles.gridBackground} aria-hidden="true">
      <ShapeGrid />
    </div>
    <div className={styles.heroContent}>
      <Typography component="h1" className={styles.heroHeading}>
        Hello World
      </Typography>
      <Typography component="p" className={styles.heroDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <CustomButton
        variant="primary"
        className={styles.workButton}
        onClick={() => onNavigate('work')}
      >
        Check out my work
      </CustomButton>
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
