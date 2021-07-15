import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * FadeIn
 * @param  {} {children
 * @param  {} ElementType
 * @param  {} className
 * @param  {} duration
 * @param  {} delay
 * @param  {} opacity
 * @param  {} ...props}
 */
export const FadeIn = ({ children, ElementType, className, duration, delay, opacity, ...props }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), delay);
  });

  return (
    <ElementType className={className} style={{ opacity: show ? opacity : 0, transition: `opacity ${duration} ease` }} {...props}>
      {children}
    </ElementType>
  );
};

FadeIn.propTypes = {
  children: PropTypes.any.isRequired,
  ElementType: PropTypes.string,
  className: PropTypes.string,
  duration: PropTypes.string,
  delay: PropTypes.number,
  opacity: PropTypes.number,
};

FadeIn.defaultProps = {
  ElementType: 'div',
  className: '',
  duration: '0.7s',
  delay: 1,
  opacity: 1,
};

export default FadeIn;
