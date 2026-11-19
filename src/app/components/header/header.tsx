import type { FC } from 'react';
import JacobRosaLogo from '../jacob-rosa-logo/jacob-rosa-logo';
import styles from './header.module.scss';

export type SectionId = 'home' | 'work' | 'about' | 'contact';

type HeaderProps = {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
};

const navigation: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'My work' },
  { id: 'about', label: 'About me' },
  { id: 'contact', label: 'Contact' },
];

const Header: FC<HeaderProps> = ({ activeSection, onNavigate }) => (
  <header className={styles.header}>
    <a
      className={styles.logoLink}
      href="#home"
      aria-label="Jacob Rosa, Home"
      onClick={(event) => {
        event.preventDefault();
        onNavigate('home');
      }}
    >
      <JacobRosaLogo />
    </a>
    <nav className={styles.navigation} aria-label="Main navigation">
      {navigation.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={`${styles.navigationButton} ${activeSection === id ? styles.active : ''}`}
          aria-current={activeSection === id ? 'page' : undefined}
          onClick={() => onNavigate(id)}
        >
          <span>{label}</span>
        </button>
      ))}
    </nav>
  </header>
);

export default Header;
