import Button, { type ButtonProps } from '@mui/material/Button';
import type { AnchorHTMLAttributes } from 'react';
import styles from './app-button.module.scss';

export type AppButtonProps = Omit<ButtonProps, 'variant'> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'download'> & {
    variant: 'navigation' | 'primary' | 'secondary';
  };

const AppButton = ({ variant, className = '', ...props }: AppButtonProps) => (
  <Button
    disableRipple={variant === 'navigation'}
    {...props}
    className={`${styles.button} ${styles[variant]} ${className}`.trim()}
  />
);

export default AppButton;
