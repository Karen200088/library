import React from 'react';
import { Modal } from './Modal';

export default {
  title: 'Example/Modal',
  component: Modal,
  argTypes: {},
};

function Template(args) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading,no-undef
    <Modal {...args} />
  );
}

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
  variant: 'dark',
  closeButton: true,
};

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  variant: 'light',
  closeButton: true,
};
