import React, { useState, useEffect } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import './alert.css';
import {
  MdErrorOutline,
  MdInfoOutline,
  MdOutlineFileDownloadDone,
  MdWarningAmber,
  MdClose,
} from 'react-icons/md';

/**
 * Provide contextual feedback messages for typical user actions.
 */
// eslint-disable-next-line import/prefer-default-export
export function Alert({
  variant, closeButton, icon, alertVisibleDuration, ...props
}) {
  const variantClass = `alert-${variant}`;
  const [alertVisible, setAlertVisible] = useState(true);
  let alertHideTimeout = '';

  useEffect(() => {
    // eslint-disable-next-line max-len
    if (alertVisibleDuration > 0) alertHideTimeout = setTimeout(() => setAlertVisible(false), alertVisibleDuration);
    return () => {
      clearTimeout(alertHideTimeout);
    };
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
        alertVisible && (
        <div
          className={['alert', `${variantClass}`].join(' ')}
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...props}
        >
          <span className="alert-body">
            { variant === 'success' && icon === true ? <MdOutlineFileDownloadDone /> : ''}
            { variant === 'info' && icon === true ? <MdInfoOutline /> : ''}
            { variant === 'warning' && icon === true ? <MdWarningAmber /> : ''}
            { variant === 'error' && icon === true ? <MdErrorOutline /> : ''}
          </span>
          {closeButton && <MdClose className="close-button-icon" onClick={() => setAlertVisible(false)} />}
          {props.children}
        </div>
        )
      }
    </>
  );
}

Alert.propTypes = {
  /**
   * Variant of alert
   */
  // eslint-disable-next-line react/require-default-props
  variant: PropTypes.oneOf(['success', 'info', 'warning', 'error']).isRequired,
  /**
   * Alert message text
   */
  // eslint-disable-next-line react/require-default-props,no-undef
  children: oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  /**
   * Close button
   */
  // eslint-disable-next-line react/require-default-props
  closeButton: PropTypes.bool,
  /**
   * Alert Icon
   */
  // eslint-disable-next-line react/require-default-props
  icon: PropTypes.bool,
  /**
   * Milliseconds after which the alert will disappear
   */
  // eslint-disable-next-line react/require-default-props
  alertVisibleDuration: PropTypes.number,
};
