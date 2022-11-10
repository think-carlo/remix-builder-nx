import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from '../app/components/drawer/drawer';

const Story: ComponentMeta<typeof Drawer> = {
  component: Drawer,
  title: 'Drawer',
};
export default Story;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
};
