import React from 'react';
import { Dropdown } from './Dropdown';
import DropdownHeader from './components/DropdownHeader';
import DropdownList from './components/DropdownLists';
import DropdownListItem from './components/DropdownListItem';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {},
};

function Template(args) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Dropdown {...args}>
      <DropdownHeader>Dropdown</DropdownHeader>
      <DropdownList>
        <DropdownListItem>Lorem 1</DropdownListItem>
        <DropdownListItem>Lorem 2</DropdownListItem>
        <DropdownListItem>Lorem 3</DropdownListItem>
        <DropdownListItem>Lorem 4</DropdownListItem>
      </DropdownList>
    </Dropdown>
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
