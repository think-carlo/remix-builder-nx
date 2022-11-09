import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea as TextareaComponent } from '../app/components/textarea/textarea';

const Story: ComponentMeta<typeof TextareaComponent> = {
  component: TextareaComponent,
  title: 'Textarea',
};
export default Story;

export const Textarea: ComponentStory<typeof TextareaComponent> = (args) => (
  <TextareaComponent {...args} />
);
