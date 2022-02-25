import React from 'react';
import PropTypes from 'prop-types';
import './flag.css';

/**
 * The modal component provides a solid foundation for creating dialogs and whatever else.
 */
// eslint-disable-next-line import/prefer-default-export
export function Modal({
  // eslint-disable-next-line no-unused-vars,no-shadow,react/prop-types
  variant, ...props
}) {
  return (

      <span {...props}>

      </span>
  );
}

Modal.propTypes = {
  /**
   * Variant of Modal
   */
  // eslint-disable-next-line react/require-default-props
  variant: PropTypes.oneOf(['dark', 'light']),

};
