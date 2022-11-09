import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea as TextareaComponent } from './textarea';

const Story: ComponentMeta<typeof TextareaComponent> = {
  component: TextareaComponent,
  title: 'Textarea',
};
export default Story;

export const Textarea: ComponentStory<typeof TextareaComponent> = (args) => (
  <TextareaComponent {...args} />
);
