import * as React from 'react';
import styles from '../../styles/components.module.css';

interface ExampleCardProps {
  title: string;
  children: React.ReactNode;
  onAction?: () => void;
  variant?: 'default' | 'large' | 'small';
}

/**
 * Example component demonstrating CSS Modules usage
 * This component shows how to use CSS modules alongside Tailwind CSS
 */
const ExampleCard: React.FC<ExampleCardProps> = ({
  title,
  children,
  onAction,
  variant = 'default',
}) => {
  const getButtonClass = () => {
    switch (variant) {
      case 'large':
        return styles.buttonLarge;
      case 'small':
        return styles.buttonSmall;
      default:
        return styles.button;
    }
  };

  return (
    <div className={`${styles.card} ${styles.fadeIn}`}>
      <div className={styles.cardHeader}>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className={styles.cardBody}>{children}</div>
      {onAction && (
        <div className={styles.cardFooter}>
          <button className={getButtonClass()} onClick={onAction}>
            Take Action
          </button>
        </div>
      )}
    </div>
  );
};

export default ExampleCard;
