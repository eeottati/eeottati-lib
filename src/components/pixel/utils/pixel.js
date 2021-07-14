/**
 * @param  {} x
 * @param  {} y
 * @param  {} mx
 * @param  {} my
 * @param  {} alpha
 */
export const pixel = (x, y, mx, my, alpha) => ({
  x,
  y,
  sx: x,
  sy: y,
  mx,
  my,
  alpha,
  next: null,
});
