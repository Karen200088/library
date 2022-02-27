import React from 'react';
import { Dropdown } from './Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {},
};

function Template(args) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Dropdown {...args} />
  );
}

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
  variant: 'dark',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
};
