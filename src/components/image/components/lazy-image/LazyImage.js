import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styling
const styleOnClick = { cursor: 'pointer' };
const styleStart = (duration) => ({ opacity: 0, transition: `opacity ${duration} ease` });
const styleLoaded = (opacity) => ({ opacity });
const styleBorder = (border) => ({ border });
const styleBorderRadius = (borderRadius) => ({ borderRadius });

/**
 * LazyImage
 * @param  {} {src
 * @param  {} alt
 * @param  {} duration
 * @param  {} opacity
 * @param  {} border
 * @param  {} borderRadius
 * @param  {} onLoadCallback
 * @param  {} onErrorCallback
 * @param  {} onClickCallback
 * @param  {} ...props}
 */
export const LazyImage = ({ src, alt, duration, opacity, border, borderRadius, onLoadCallback, onErrorCallback, onClickCallback, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * Set as loaded, trigger callback
   */
  const onLoadHandler = () => {
    setIsLoaded(true);
    onLoadCallback();
  };

  return (
    <img
      src={src}
      alt={alt}
      style={{
        ...styleStart(duration),
        ...styleBorder(border),
        ...styleBorderRadius(borderRadius),
        ...(onClickCallback ? styleOnClick : {}),
        ...(isLoaded ? styleLoaded(opacity) : {}),
      }}
      onLoad={onLoadHandler}
      onError={onErrorCallback}
      onClick={onClickCallback}
      {...props}
    />
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  duration: PropTypes.string,
  opacity: PropTypes.number,
  border: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onLoadCallback: PropTypes.func,
  onErrorCallback: PropTypes.func,
  onClickCallback: PropTypes.func,
};

LazyImage.defaultProps = {
  duration: '0.7s',
  opacity: 1,
  border: 'none',
  borderRadius: 0,
  onLoadCallback: () => {},
  onErrorCallback: () => {},
  onClickCallback: null,
};

export default LazyImage;
