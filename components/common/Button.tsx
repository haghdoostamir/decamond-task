'use client';

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', loading = false, children, className, disabled, ...props },
    ref
  ) => {
    const classes =
      styles.button +
      ' ' +
      (variant === 'secondary' ? styles.secondary : styles.primary) +
      (className ? ` ${className}` : '');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className={styles.loader}>
            <span className={styles.spinner}></span>
            <span className={styles.loadingText}>در حال بارگذاری...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
