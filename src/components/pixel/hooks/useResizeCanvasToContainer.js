import { useState, useEffect } from 'react';

/**
 * Resize canvas to match container, return dimensions
 * @param  {} containerRef
 * @param  {} canvasRef
 */
export function useResizeCanvasToContainer(containerRef, canvasRef) {
  const [dimensions, setDimensions] = useState();

  const resize = () => {
    // Get dimensions
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;

    // Resize canvas
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    // Set state
    setDimensions({ width, height });
  };

  useEffect(() => {
    // Set resize event
    window.onresize = resize;

    // Initial resize call
    resize();

    // Clean-up
    return () => {
      window.onresize = null;
    };
  }, []);

  return dimensions;
}
