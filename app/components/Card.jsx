import React from 'react';
import clsx from 'clsx';

export default function Card({ children, className = '', ...props }) {
  // تصميم عصري: تدرج لوني، ظل متدرج، حدود ناعمة، أنيميشن عند المرور، دعم الوضع الليلي
  const defaultClasses = [
    'bg-gradient-to-br from-white via-slate-50 to-slate-100', // تدرج لوني خلفية
    'dark:from-slate-800 dark:via-slate-900 dark:to-slate-950', // دعم الوضع الليلي
    'rounded-2xl', // حواف ناعمة
    'shadow-xl shadow-amber-100/30 dark:shadow-slate-900/40', // ظل متدرج
    'border border-slate-200 dark:border-slate-800', // حدود خفيفة
    'p-6', // حشو أكبر
    'transition-all duration-300', // أنيميشن سلس
    'hover:scale-[1.03] hover:shadow-amber-200/50 hover:border-amber-300', // تأثير عند المرور
  ].join(' ');
  const finalClassName = clsx(defaultClasses, className);
  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
}
