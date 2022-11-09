import classNames from 'classnames';

export enum CardVariants {
  BORDER = 'border',
  SHADOW = 'shadow',
  NEUTRAL = 'neutral',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

/* eslint-disable-next-line */
export interface CardProps {
  children?: React.ReactNode;
  className?: string;
  variant: CardVariants;
}

export function Card(props: CardProps) {
  const { children, className, variant } = props;
  const cardClasses = classNames(
    `jdg-card flex w-full p-3 rounded-md`,
    className,
    {
      'bg-white': ['border', 'shadow'].includes(variant),
      'jdg-card--border border border-brand-gray-400': variant === 'border',
      'jdg-card--shadow border border-brand-gray-400 shadow-brand':
        variant === 'shadow',
      'jdg-card--neutral bg-brand-blue-500 text-brand-white':
        variant === 'neutral',
      'jdg-card--success bg-brand-green-500 text-brand-white':
        variant === 'success',
      'jdg-card--warning bg-brand-yellow-500 text-brand-white':
        variant === 'warning',
      'jdg-card--error bg-brand-red-800 text-brand-white': variant === 'error',
    }
  );

  return <div className={cardClasses}>{children && children}</div>;
}

export default Card;
