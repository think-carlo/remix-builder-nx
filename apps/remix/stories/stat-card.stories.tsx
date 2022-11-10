import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StatCard } from '../app/components/stat-card/stat-card';

const Story: ComponentMeta<typeof StatCard> = {
  component: StatCard,
  title: 'StatCard',
};
export default Story;

const Template: ComponentStory<typeof StatCard> = (args) => (
  <StatCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  headline: '8 million +',
  subcopy: 'candidate database',
};
