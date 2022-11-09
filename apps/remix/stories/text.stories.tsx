import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputText as InputTextComponent } from '../app/components/inputs/text/text';

const Story: ComponentMeta<typeof InputTextComponent> = {
  component: InputTextComponent,
  title: 'InputText',
};
export default Story;

export const InputText: ComponentStory<typeof InputTextComponent> = (args) => (
  <InputTextComponent {...args} />
);
