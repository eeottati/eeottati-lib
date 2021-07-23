import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './NavLink.module.css';

// Styling
const getClasses = (props = {}) => classnames(styles.container, props.className || '');

// Render methods
const routerLink = (props) => <Link {...props} className={getClasses(props)} />;
const regularLink = (props) => <a {...props} className={getClasses(props)} />;

/**
 * NavTo
 * @param  {} {children
 * @param  {} href
 * @param  {} to
 * @param  {} target
 * @param  {} ...props}
 */
export const NavLink = ({ children, href, to, target, ...props }) => {
  if (!children) return null;

  // Determine link type
  if (!!to) return routerLink({ children, to, ...props });
  if (!!href) return regularLink({ children, href, target, ...props });

  // No link
  return children;
};

NavLink.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  to: PropTypes.string,
  target: PropTypes.string,
};

NavLink.defaultProps = {
  children: null,
  href: null,
  to: null,
  target: '_blank',
};

export default NavLink;
