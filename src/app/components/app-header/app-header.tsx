import type { FC } from 'react';
import AppButton from '../app-button/app-button';
import JacobRosaLogo from '../jacob-rosa-logo/jacob-rosa-logo';
import styles from './app-header.module.scss';

export type SectionId = 'home' | 'work' | 'about' | 'contact';

export type AppHeaderProps = {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
};

const navigation: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'My work' },
  { id: 'about', label: 'About me' },
  { id: 'contact', label: 'Contact' },
];

const AppHeader: FC<AppHeaderProps> = ({ activeSection, onNavigate }) => (
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
        <AppButton
          key={id}
          variant="navigation"
          aria-current={activeSection === id ? 'page' : undefined}
          onClick={() => onNavigate(id)}
        >
          {label}
        </AppButton>
      ))}
    </nav>
  </header>
);

export default AppHeader;
