import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Example/Alert',
  component: Alert,
  argTypes: {},
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Alert {...args} />;
}

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  variant: 'success',
  children: 'This is a success alert — check it out!',
  closeButton: false,
  icon: true,
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  children: 'This is an info alert — check it out!',
  closeButton: false,
  icon: true,
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'This is a warning alert — check it out!',
  closeButton: false,
  icon: true,
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  children: 'This is an error alert — check it out!',
  closeButton: false,
  icon: true,
};
