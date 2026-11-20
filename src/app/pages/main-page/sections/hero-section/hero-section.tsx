import { Typography } from '@mui/material';
import {
  AppButton,
  AppPill,
  AppShapeGrid,
  type SectionId,
} from '../../../../components';
import styles from './hero-section.module.scss';

export type HeroSectionProps = {
  onNavigate: (section: SectionId) => void;
};

const technologies = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'Java',
  'PostgreSQL',
  'AWS',
];

const HeroSection = ({ onNavigate }: HeroSectionProps) => (
  <section id="home" data-section-id="home" className={styles.heroSection}>
    <div className={styles.gridBackground} aria-hidden="true">
      <AppShapeGrid />
    </div>
    <div className={styles.heroContent}>
      <Typography component="h1" className={styles.heroHeading}>
        Details matter. So does delivery.
      </Typography>
      <Typography component="p" className={styles.heroDescription}>
        I ask the questions early, catch the details that are easy to miss, and build secure, maintainable software that makes life easier for the people using it.
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
      {technologies.map((technology) => (
        <li key={technology}>
          <AppPill>{technology}</AppPill>
        </li>
      ))}
    </ul>
  </section>
);

export default HeroSection;
