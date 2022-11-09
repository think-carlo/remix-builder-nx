import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle as ToggleComponent } from '../app/components/toggle/toggle';

const Story: ComponentMeta<typeof ToggleComponent> = {
  component: ToggleComponent,
  title: 'Toggle',
};
export default Story;

export const Toggle: ComponentStory<typeof ToggleComponent> = (args) => (
  <ToggleComponent {...args} />
);
