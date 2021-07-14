import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { usePixelEffect } from '../../hooks/usePixelEffect';

const canvasStyles = {
  position: 'absolute',
  pointerEvents: 'none',
}

/**
 * PixelEffectContainer
 * @param  {} {children
 * @param  {} count
 * @param  {} color
 * @param  {} width
 * @param  {} height
 * @param  {} borderRadius
 * @param  {} contentStyle
 * @param  {} ...props}
 */
export const PixelEffectContainer = ({ children, count, color, width, height, borderRadius, contentStyle, ...props }) => {
  const containerRef = useRef();
  const canvasRef = useRef();

  usePixelEffect(containerRef, canvasRef, count, color);

  return (
    <div ref={containerRef} {...props}>
      <canvas ref={canvasRef} style={{ borderRadius, ...canvasStyles }} />
      <div style={{ ...(width && height ? { width, height } : {}), borderRadius, ...contentStyle }}>{children}</div>
    </div>
  );
};

PixelEffectContainer.propTypes = {
  children: PropTypes.any,
  count: PropTypes.number.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  contentStyle: PropTypes.object,
};

PixelEffectContainer.defaultProps = {
  children: null,
  color: '#000000',
  width: null,
  height: null,
  borderRadius: null,
  contentStyle: {},
};

export default PixelEffectContainer;
