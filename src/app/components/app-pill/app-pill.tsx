import type { ReactNode } from 'react';
import styles from './app-pill.module.scss';

export type AppPillProps = {
  children: ReactNode;
};

const AppPill = ({ children }: AppPillProps) => (
  <span className={styles.pill}>{children}</span>
);

export default AppPill;
