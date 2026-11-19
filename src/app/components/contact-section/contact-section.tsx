import { Typography } from '@mui/material';
import styles from '../../pages/home/home.module.scss';

const ContactSection = () => (
  <section id="contact" data-section-id="contact" className={styles.contentSection}>
    <div className={styles.placeholderContent}>
      <Typography component="h2" variant="h1">
        Contact
      </Typography>
      <Typography component="p" variant="h2">
        Contact text
      </Typography>
    </div>
  </section>
);

export default ContactSection;
