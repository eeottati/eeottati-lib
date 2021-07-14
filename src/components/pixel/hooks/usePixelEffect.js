import { useEffect } from 'react';

import { rand } from '../../../utils';
import { pixel } from '../utils/pixel';
import { useResizeCanvasToContainer } from './useResizeCanvasToContainer';

/**
 * Create & manage pixel effect
 * @param  {} containerRef
 * @param  {} canvasRef
 * @param  {} count
 * @param  {} pixelColor
 */
export function usePixelEffect(containerRef, canvasRef, count, pixelColor) {
  const dimensions = useResizeCanvasToContainer(containerRef, canvasRef);

  useEffect(() => {
    let ctx, start, end, timer, buffer;

    if (dimensions) {
      // Set context & color
      ctx = canvasRef.current.getContext('2d');
      ctx.fillStyle = pixelColor;

      // Initialize linked-list
      [...Array(count)].forEach(() => {
        const angleInRadians = (Math.PI / 180) * rand(0, 360);
        const velocity = rand(1, 3);
        const node = pixel(
          rand(0, dimensions.width),
          rand(0, dimensions.height),
          Math.cos(angleInRadians) * velocity,
          Math.sin(angleInRadians) * velocity,
          velocity * 0.1
        );
        if (!start) start = node;
        if (!end) end = node;
        end.next = node;
        end = node;
      });

      // Overflow buffer
      buffer = 20;

      // Update nodes
      timer = setInterval(() => {
        let node = start;

        // Clear previous
        ctx.clearRect(-buffer, -buffer, dimensions.width + buffer, dimensions.height + buffer);

        // Update nodes
        while (node) {
          if (node.x < -buffer || node.x > dimensions.width + buffer || node.y < -buffer || node.y > dimensions.height + buffer) {
            // Back to start
            node.x = node.sx;
            node.y = node.sy;
          } else {
            // Continue velocity
            node.x += node.mx;
            node.y += node.my;
          }

          // Set props & fill
          ctx.globalAlpha = node.alpha;
          ctx.fillRect(node.x, node.y, 2, 2);

          // Move pointer to next
          node = node.next;
        }
      }, 35);
    }

    // Clean-up
    return () => {
      clearInterval(timer);
    };
  }, [dimensions, count, pixelColor]);

  return null;
}
