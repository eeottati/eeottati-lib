import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { usePixelEffect } from '../../hooks/usePixelEffect';

import styles from './PixelEffectContainer.module.css';

/**
 * PixelEffectContainer
 * @param  {} {children
 * @param  {} className
 * @param  {} count
 * @param  {} color
 * @param  {} width
 * @param  {} height
 * @param  {} borderRadius
 * @param  {} contentStyle
 * @param  {} ...props}
 */
export const PixelEffectContainer = ({ children, className, count, color, width, height, borderRadius, contentStyle, ...props }) => {
  const containerRef = useRef();
  const canvasRef = useRef();

  // Run pixel-effect
  usePixelEffect(containerRef, canvasRef, count, color);

  return (
    <div ref={containerRef} className={classnames(styles.container, className)} {...props}>
      <canvas ref={canvasRef} style={{ borderRadius }} />
      <div style={{ ...(width && height ? { width, height } : {}), borderRadius, ...contentStyle }}>{children}</div>
    </div>
  );
};

PixelEffectContainer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  count: PropTypes.number.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  contentStyle: PropTypes.object,
};

PixelEffectContainer.defaultProps = {
  children: null,
  className: '',
  color: '#000000',
  width: null,
  height: null,
  borderRadius: null,
  contentStyle: {},
};

export default PixelEffectContainer;
