'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var classnames = require('classnames');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".ExpandCollapse-module_container__sEsY7 button{cursor:pointer;border:none;background:none;text-decoration:none;font-size:inherit;font-family:inherit}";
var styles$2 = {"container":"ExpandCollapse-module_container__sEsY7"};
styleInject(css_248z$2);

/**
 * ExpandCollapse
 * @param  {} {children
 * @param  {} ElementType
 * @param  {} open
 * @param  {} trigger
 * @param  {} ...props}
 */

const ExpandCollapse = ({
  children,
  ElementType,
  open,
  trigger,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(open);
  return /*#__PURE__*/React__default['default'].createElement(ElementType, _extends({
    className: styles$2.container
  }, props), trigger && /*#__PURE__*/React__default['default'].createElement("button", {
    onClick: () => setIsOpen(!isOpen),
    "aria-expanded": isOpen
  }, trigger), isOpen && children);
};
ExpandCollapse.propTypes = {
  children: PropTypes__default['default'].any,
  ElementType: PropTypes__default['default'].string,
  open: PropTypes__default['default'].bool,
  trigger: PropTypes__default['default'].any
};
ExpandCollapse.defaultProps = {
  children: null,
  ElementType: 'div',
  open: true,
  trigger: null
};

/**
 * FadeIn
 * @param  {} {children
 * @param  {} ElementType
 * @param  {} duration
 * @param  {} delay
 * @param  {} opacity
 * @param  {} ...props}
 */

const FadeIn = ({
  children,
  ElementType,
  duration,
  delay,
  opacity,
  ...props
}) => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    // Trigger fade-in w/delay
    setTimeout(() => setShow(true), delay);
  });
  return /*#__PURE__*/React__default['default'].createElement(ElementType, _extends({
    style: {
      opacity: show ? opacity : 0,
      transition: `opacity ${duration} ease`
    }
  }, props), children);
};
FadeIn.propTypes = {
  children: PropTypes__default['default'].any.isRequired,
  ElementType: PropTypes__default['default'].string,
  duration: PropTypes__default['default'].string,
  delay: PropTypes__default['default'].number,
  opacity: PropTypes__default['default'].number
};
FadeIn.defaultProps = {
  ElementType: 'div',
  duration: '0.7s',
  delay: 1,
  opacity: 1
};

const styleOnClick = {
  cursor: 'pointer'
};

const styleStart = duration => ({
  opacity: 0,
  transition: `opacity ${duration} ease`
});

const styleLoaded = opacity => ({
  opacity
});

const styleBorder = border => ({
  border
});

const styleBorderRadius = borderRadius => ({
  borderRadius
});
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


const LazyImage = ({
  src,
  alt,
  duration,
  opacity,
  border,
  borderRadius,
  onLoadCallback,
  onErrorCallback,
  onClickCallback,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  /**
   * Set as loaded, trigger callback
   */

  const onLoadHandler = () => {
    setIsLoaded(true);
    onLoadCallback();
  };

  return /*#__PURE__*/React__default['default'].createElement("img", _extends({
    src: src,
    alt: alt,
    style: { ...styleStart(duration),
      ...styleBorder(border),
      ...styleBorderRadius(borderRadius),
      ...(onClickCallback ? styleOnClick : {}),
      ...(isLoaded ? styleLoaded(opacity) : {})
    },
    onLoad: onLoadHandler,
    onError: onErrorCallback,
    onClick: onClickCallback
  }, props));
};
LazyImage.propTypes = {
  src: PropTypes__default['default'].string.isRequired,
  alt: PropTypes__default['default'].string.isRequired,
  duration: PropTypes__default['default'].string,
  opacity: PropTypes__default['default'].number,
  border: PropTypes__default['default'].string,
  borderRadius: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  onLoadCallback: PropTypes__default['default'].func,
  onErrorCallback: PropTypes__default['default'].func,
  onClickCallback: PropTypes__default['default'].func
};
LazyImage.defaultProps = {
  duration: '0.7s',
  opacity: 1,
  border: 'none',
  borderRadius: 0,
  onLoadCallback: () => {},
  onErrorCallback: () => {},
  onClickCallback: null
};

var css_248z$1 = ".NavLink-module_container__3o3nB{text-decoration:none;cursor:pointer}";
var styles$1 = {"container":"NavLink-module_container__3o3nB"};
styleInject(css_248z$1);

const getClasses = props => classnames__default['default'](styles$1.container, props?.className || ''); // Render methods


const routerLink = props => /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, _extends({}, props, {
  className: getClasses(props)
}));

const regularLink = props => /*#__PURE__*/React__default['default'].createElement("a", _extends({}, props, {
  className: getClasses(props)
}));
/**
 * NavTo
 * @param  {} {children
 * @param  {} href
 * @param  {} to
 * @param  {} target
 * @param  {} ...props}
 */


const NavLink = ({
  children,
  href,
  to,
  target,
  ...props
}) => {
  if (!children) return null; // Determine link type

  if (!!to) return routerLink({
    children,
    to,
    ...props
  });
  if (!!href) return regularLink({
    children,
    href,
    target,
    ...props
  }); // No link

  return children;
};
NavLink.propTypes = {
  children: PropTypes__default['default'].any,
  href: PropTypes__default['default'].string,
  to: PropTypes__default['default'].string,
  target: PropTypes__default['default'].string
};
NavLink.defaultProps = {
  children: null,
  href: null,
  to: null,
  target: '_blank'
};

const rand = (min, max) => Math.round(Math.random() * (max - min) + min);

/**
 * @param  {} x
 * @param  {} y
 * @param  {} mx
 * @param  {} my
 * @param  {} alpha
 */
const pixel = (x, y, mx, my, alpha) => ({
  x,
  y,
  sx: x,
  sy: y,
  mx,
  my,
  alpha,
  next: null
});

/**
 * Resize canvas to match container, return dimensions
 * @param  {} containerRef
 * @param  {} canvasRef
 */

function useResizeCanvasToContainer(containerRef, canvasRef) {
  const [dimensions, setDimensions] = React.useState();

  const resize = () => {
    // Get dimensions
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight; // Resize canvas

    canvasRef.current.width = width;
    canvasRef.current.height = height; // Set state

    setDimensions({
      width,
      height
    });
  };

  React.useEffect(() => {
    // Set resize event
    window.onresize = resize; // Initial resize call

    resize(); // Clean-up

    return () => {
      window.onresize = null;
    };
  }, []);
  return dimensions;
}

/**
 * Create & manage pixel effect
 * @param  {} containerRef
 * @param  {} canvasRef
 * @param  {} count
 * @param  {} pixelColor
 */

function usePixelEffect(containerRef, canvasRef, count, pixelColor) {
  const dimensions = useResizeCanvasToContainer(containerRef, canvasRef);
  React.useEffect(() => {
    let ctx, start, end, timer, buffer;

    if (dimensions) {
      // Set context & color
      ctx = canvasRef.current.getContext('2d');
      ctx.fillStyle = pixelColor; // Initialize linked-list

      [...Array(count)].forEach(() => {
        const angleInRadians = Math.PI / 180 * rand(0, 360);
        const velocity = rand(1, 3);
        const node = pixel(rand(0, dimensions.width), rand(0, dimensions.height), Math.cos(angleInRadians) * velocity, Math.sin(angleInRadians) * velocity, velocity * 0.1);
        if (!start) start = node;
        if (!end) end = node;
        end.next = node;
        end = node;
      }); // Overflow buffer

      buffer = 20; // Update nodes

      timer = setInterval(() => {
        let node = start; // Clear previous

        ctx.clearRect(-buffer, -buffer, dimensions.width + buffer, dimensions.height + buffer); // Update nodes

        while (node) {
          if (node.x < -buffer || node.x > dimensions.width + buffer || node.y < -buffer || node.y > dimensions.height + buffer) {
            // Back to start
            node.x = node.sx;
            node.y = node.sy;
          } else {
            // Continue velocity
            node.x += node.mx;
            node.y += node.my;
          } // Set props & fill


          ctx.globalAlpha = node.alpha;
          ctx.fillRect(node.x, node.y, 2, 2); // Move pointer to next

          node = node.next;
        }
      }, 35);
    } // Clean-up


    return () => {
      clearInterval(timer);
    };
  }, [dimensions, count, pixelColor]);
  return null;
}

var css_248z = ".PixelEffectContainer-module_container__1yi_A canvas{position:absolute;pointer-events:none}";
var styles = {"container":"PixelEffectContainer-module_container__1yi_A"};
styleInject(css_248z);

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

const PixelEffectContainer = ({
  children,
  className,
  count,
  color,
  width,
  height,
  borderRadius,
  contentStyle,
  ...props
}) => {
  const containerRef = React.useRef();
  const canvasRef = React.useRef(); // Run pixel-effect

  usePixelEffect(containerRef, canvasRef, count, color);
  return /*#__PURE__*/React__default['default'].createElement("div", _extends({
    ref: containerRef,
    className: classnames__default['default'](styles.container, className)
  }, props), /*#__PURE__*/React__default['default'].createElement("canvas", {
    ref: canvasRef,
    style: {
      borderRadius
    }
  }), /*#__PURE__*/React__default['default'].createElement("div", {
    style: { ...(width && height ? {
        width,
        height
      } : {}),
      borderRadius,
      ...contentStyle
    }
  }, children));
};
PixelEffectContainer.propTypes = {
  children: PropTypes__default['default'].any,
  className: PropTypes__default['default'].string,
  count: PropTypes__default['default'].number.isRequired,
  width: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  height: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  color: PropTypes__default['default'].string,
  borderRadius: PropTypes__default['default'].string,
  contentStyle: PropTypes__default['default'].object
};
PixelEffectContainer.defaultProps = {
  children: null,
  className: '',
  color: '#000000',
  width: null,
  height: null,
  borderRadius: null,
  contentStyle: {}
};

const defaultOptions = {
  threshold: 0,
  rootMargin: '0px 0px 0px 0px'
};
/**
 * Asynchronously observe changes in intersection of a target elements with a container
 * @param  {} containerRef
 * @param  {} selector
 * @param  {} callback
 * @param  {} options=defaultOptions
 */

function useIntersection(containerRef, selector, callback, options = defaultOptions) {
  if (!(callback && selector)) return;
  React.useEffect(() => {
    const observers = []; // If container set & IntersectionObserver supported

    if (containerRef.current && typeof IntersectionObserver === 'function') {
      // Handle intersection callback
      const handleIntersect = index => entries => {
        callback(entries[0], index);
      }; // Create, set, and store observers


      containerRef.current.querySelectorAll(selector).forEach((node, index) => {
        const observer = new IntersectionObserver(handleIntersect(index), options);
        observer.observe(node);
        observers.push(observer);
      }); // Clean-up

      return () => {
        observers.forEach(observer => {
          observer.disconnect();
        });
      };
    } // False clean-up


    return () => {};
  }, [containerRef.current, options.threshold, options.rootMargin]);
}

exports.ExpandCollapse = ExpandCollapse;
exports.FadeIn = FadeIn;
exports.LazyImage = LazyImage;
exports.NavLink = NavLink;
exports.PixelEffectContainer = PixelEffectContainer;
exports.rand = rand;
exports.useIntersection = useIntersection;
exports.usePixelEffect = usePixelEffect;
exports.useResizeCanvasToContainer = useResizeCanvasToContainer;
