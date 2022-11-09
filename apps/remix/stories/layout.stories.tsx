import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from '../app/components/layout/layout';

const Story: ComponentMeta<typeof Layout> = {
  component: Layout,
  title: 'Layout',
};
export default Story;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
