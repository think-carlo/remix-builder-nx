import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '../app/components/footer/footer';

const Story: ComponentMeta<typeof Footer> = {
  component: Footer,
  title: 'Footer',
};
export default Story;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
