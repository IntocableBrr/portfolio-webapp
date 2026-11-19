import { Button, Typography } from '@mui/material';
import ShapeGrid from '../shape-grid/ShapeGrid';
import type { SectionId } from '../header/header';
import styles from '../../pages/home/home.module.scss';

type HomeHeroProps = {
  onNavigate: (section: SectionId) => void;
};

const HomeHero = ({ onNavigate }: HomeHeroProps) => (
  <section id="home" data-section-id="home" className={styles.homeSection}>
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
      <Button
        className={styles.workButton}
        onClick={() => onNavigate('work')}
      >
        Check out my work
      </Button>
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

export default HomeHero;
