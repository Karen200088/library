import React from 'react';
import { Skeleton } from './Skeleton';

export default {
  title: 'Example/Skeleton',
  component: Skeleton,
  argTypes: {},
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Skeleton {...args} />;
}

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
  variant: 'dark',
  type: 'image',
  animation: false,
};

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
  variant: 'light',
  type: 'image',
  animation: false,
};
