import React from 'react';
import { Flag } from './Flag';

export default {
  title: 'Example/Flag',
  component: Flag,
  argTypes: {},
};

function Template(args) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading,no-undef
    <Flag {...args} />
  );
}

export const Country = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Country.args = {
  country: 'Afghanistan',
};
