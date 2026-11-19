import { Button, Typography } from '@mui/material';
import ScrollStack, { ScrollStackItem } from '../scroll-stack/ScrollStack';
import styles from '../../pages/home/home.module.scss';

const WorkSection = () => (
  <section id="work" data-section-id="work" className={styles.workSection}>
    <Typography className={styles.sectionHeading} component="h2" variant="h2">
      My Work
    </Typography>
    <ScrollStack className={styles.workStack}>
      <ScrollStackItem>
        <Typography variant="h5">Card 1</Typography>
        <p>This is the first card in the stack</p>
      </ScrollStackItem>
    </ScrollStack>
    <Button className={styles.viewMoreButton} variant="contained">
      View more
    </Button>
  </section>
);

export default WorkSection;
