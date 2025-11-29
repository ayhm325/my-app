// components/Card.jsx
import React from 'react';
import clsx from 'clsx';

export default function Card({ children, className = '', ...props }) {
  const defaultClasses = `
    bg-yellow-200          /* لون أصفر فاتح */
    dark:bg-yellow-700     /* أصفر داكن للوضع الليلي */
    rounded-lg             /* زوايا دائرية */
    shadow-md              /* ظل متوسط */
    p-4                    /* Padding داخلي */
    border border-yellow-400 /* حدود لتمييز المكان */
    hover:bg-yellow-300    /* تغير اللون عند المرور عليه */
    hover:shadow-lg        /* زيادة الظل عند المرور */
    transition duration-300 ease-in-out /* تأثير سلس */
  `;
  const finalClassName = clsx(defaultClasses, className);
  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
}
