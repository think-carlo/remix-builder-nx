import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from './drawer';

const Story: ComponentMeta<typeof Drawer> = {
  component: Drawer,
  title: 'Drawer',
};
export default Story;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
