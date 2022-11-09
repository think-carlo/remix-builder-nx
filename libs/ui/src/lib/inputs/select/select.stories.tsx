import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select as SelectComponent } from './select';

const Story: ComponentMeta<typeof SelectComponent> = {
  component: SelectComponent,
  title: 'Select',
};
export default Story;

export const Select: ComponentStory<typeof SelectComponent> = (args) => (
  <SelectComponent {...args} />
);
