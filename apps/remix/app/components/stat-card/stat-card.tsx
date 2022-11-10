import { FC } from 'react';
import Card, { CardProps, CardVariants } from '../card/card';
import SvgStatBlob from '../icons/stat-blob';

export interface StatCardProps extends CardProps {
  headline: string;
  subcopy: string;
}

export const StatCard: FC<StatCardProps> = ({ headline, subcopy }) => {
  return (
    <Card
      className="jdg-card--stat relative justify-center"
      variant={CardVariants.DEFAULT}
    >
      <div className="absolute top-1/2 -translate-y-1/2 text-center w-full">
        <h3 className="text-brand-blue-500 text-6xl">{headline}</h3>
        <p className="text-brand-blue-500 text-base">{subcopy}</p>
      </div>

      <SvgStatBlob className="fill-brand-blue-200" />
    </Card>
  );
};
