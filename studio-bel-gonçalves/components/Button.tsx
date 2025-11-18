import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ href, children, variant = 'primary', className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 rounded-full text-sm tracking-widest uppercase transition-all duration-300 ease-out font-sans font-medium shadow-sm";
  
  const variants = {
    primary: "bg-bordeaux text-white hover:bg-rose-dark hover:shadow-soft hover:-translate-y-1 active:translate-y-0",
    outline: "border border-bordeaux text-bordeaux hover:bg-bordeaux hover:text-white hover:border-transparent"
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </a>
  );
};