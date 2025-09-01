import type * as React from 'react';
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
declare const Button: React.FC<TailwindButtonProps>;
export default Button;
//# sourceMappingURL=Button.d.ts.map
