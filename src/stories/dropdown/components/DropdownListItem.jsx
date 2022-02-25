import React from 'react';

// eslint-disable-next-line react/prop-types
function DropdownListItem({ children }) {
  return (
    <li className="dropdown-item">{ children }</li>
  );
}

export default DropdownListItem;
