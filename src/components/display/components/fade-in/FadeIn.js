import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * FadeIn
 * @param  {} {children
 * @param  {} ElementType
 * @param  {} duration
 * @param  {} delay
 * @param  {} opacity
 * @param  {} ...props}
 */
export const FadeIn = ({ children, ElementType, duration, delay, opacity, ...props }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger fade-in w/delay
    setTimeout(() => setShow(true), delay);
  });

  return (
    <ElementType style={{ opacity: show ? opacity : 0, transition: `opacity ${duration} ease` }} {...props}>
      {children}
    </ElementType>
  );
};

FadeIn.propTypes = {
  children: PropTypes.any.isRequired,
  ElementType: PropTypes.string,
  duration: PropTypes.string,
  delay: PropTypes.number,
  opacity: PropTypes.number,
};

FadeIn.defaultProps = {
  ElementType: 'div',
  duration: '0.7s',
  delay: 1,
  opacity: 1,
};

export default FadeIn;
