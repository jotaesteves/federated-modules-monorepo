import * as React from 'react';
import {
  Card as UICard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card';

// Omit the native HTML 'title' attribute so we can use a ReactNode title prop
export type CardBaseProps = Omit<React.ComponentPropsWithoutRef<typeof UICard>, 'title'>;

export interface CardProps extends CardBaseProps {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ icon, title, description, footer, children, className, ...props }, ref) => (
    <UICard ref={ref} className={className + ` bg-white`} {...props}>
      {(icon || title || description) && (
        <CardHeader>
          {(icon || title) && (
            <CardTitle className="flex items-center gap-2">
              {icon && <>{icon}</>}
              {title && <>{title}</>}
            </CardTitle>
          )}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}

      {children && <CardContent>{children}</CardContent>}

      {footer && <CardFooter>{footer}</CardFooter>}
    </UICard>
  )
);

Card.displayName = 'Card';

export default Card;
