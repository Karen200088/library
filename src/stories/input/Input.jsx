import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

/**
 * Text fields allow users to enter text into a UI. They typically appear
 * in forms and dialogs.
 */
// eslint-disable-next-line import/prefer-default-export
export function Input({
  // eslint-disable-next-line no-unused-vars
  variant, type, placeholder, disable, ...props
}) {
  const variantClass = `input-${variant}-${type}`;
  let disableClass;
  // eslint-disable-next-line no-unused-vars
  if (disable) { disableClass = 'disable'; }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={['input-block', `${variantClass}`, `${disableClass}`].join(' ')} {...props}>
      <input
        type="input"
        id={placeholder}
        className="input-field"
        placeholder={placeholder}
        disabled={disable}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={placeholder} className="input-label">{placeholder}</label>
    </div>
  );
}

Input.propTypes = {
  /**
   * Variant of Input
   */
  // eslint-disable-next-line react/require-default-props
  variant: PropTypes.oneOf(['default', 'error']).isRequired,
  /**
   * Type of Input
   */
  // eslint-disable-next-line react/require-default-props
  type: PropTypes.oneOf(['standard', 'outline']).isRequired,
  /**
   * Placeholder of Input
   */
  // eslint-disable-next-line react/require-default-props
  placeholder: PropTypes.string,
  /**
   * Disable Input
   */
  // eslint-disable-next-line react/require-default-props
  disable: PropTypes.bool,
};
