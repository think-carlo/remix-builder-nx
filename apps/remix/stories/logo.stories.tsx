import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from '../app/components/logo/logo';

const Story: ComponentMeta<typeof Logo> = {
  component: Logo,
  title: 'Logo',
};
export default Story;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
