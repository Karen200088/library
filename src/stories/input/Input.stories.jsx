import React from 'react';
import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {},
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Input {...args} />;
}

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  variant: 'default',
  type: 'outline',
  placeholder: 'Input',
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  variant: 'error',
  type: 'outline',
  placeholder: 'Input',
};
