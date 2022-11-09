import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card, CardVariants } from '../app/components/card/card';

const Story: ComponentMeta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default Story;

const Template: ComponentStory<typeof Card> = (args) => {
  const variants = Object.values(CardVariants);

  return (
    <div className="grid grid-cols-4 gap-5">
      {variants.map((variant) => (
        <div className="flex flex-wrap flex-col">
          <div className="p-6 border border-brand-gray-400">
            <Card className="min-h-[100px]" variant={variant} />
          </div>

          <div className="p-6 border-l border-r border-b border-brand-gray-400">
            <b className="capitalize">Card Container {variant}</b>
            <p>jdg-card jdg-card--{variant}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const All = Template.bind({});
All.args = {};
