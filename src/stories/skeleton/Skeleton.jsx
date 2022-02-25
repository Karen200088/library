import React from 'react';
import PropTypes from 'prop-types';
import './skeleton.css';

/**
 * Display a placeholder preview of your content before the data gets loaded to
 * reduce load-time frustration.
 */
// eslint-disable-next-line import/prefer-default-export
export function Skeleton({
  // eslint-disable-next-line no-unused-vars
  variant, type, animation, ...props
}) {
  const isAnimated = animation;
  // eslint-disable-next-line no-const-assign
  let isAnimatedStatus = '';
  if (isAnimated) {
    // eslint-disable-next-line no-const-assign
    isAnimatedStatus = '-animated';
  }
  const variantClassAnimated = `skeleton-${type}-${variant}${isAnimatedStatus}`;
  const variantClass = `skeleton-${type}-${variant}`;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={[`${variantClass}`, `${variantClassAnimated}`].join(' ')} {...props} />
  );
}

Skeleton.propTypes = {
  /**
   * Variant of Skeleton
   */
  // eslint-disable-next-line react/require-default-props
  variant: PropTypes.oneOf(['dark', 'light']),
  /**
   * Type of Skeleton
   */
  // eslint-disable-next-line react/require-default-props
  type: PropTypes.oneOf(['text', 'image']),
  /**
   * Animation of Skeleton
   */
  // eslint-disable-next-line react/require-default-props
  animation: PropTypes.bool,
};
