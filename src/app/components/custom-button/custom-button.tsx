import Button, { type ButtonProps } from '@mui/material/Button';
import type { AnchorHTMLAttributes } from 'react';
import styles from './custom-button.module.scss';

type CustomButtonProps = Omit<ButtonProps, 'variant'> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'download'> & {
    variant: 'navigation' | 'primary' | 'secondary';
  };

const CustomButton = ({ variant, className = '', ...props }: CustomButtonProps) => (
  <Button
    disableRipple={variant === 'navigation'}
    {...props}
    className={`${styles.button} ${styles[variant]} ${className}`.trim()}
  />
);

export default CustomButton;
