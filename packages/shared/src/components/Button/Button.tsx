import * as React from 'react';

interface TailwindButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

/**
 * Example Tailwind CSS button component
 * Demonstrates how to use Tailwind classes in a federated component
 */
const Button: React.FC<TailwindButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  className = '',
}) => {
  const baseClasses =
    'font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary:
      'bg-secondary-200 hover:bg-secondary-300 text-secondary-900 focus:ring-secondary-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
