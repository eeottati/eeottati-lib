import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ExpandCollapse.module.css';

/**
 * ExpandCollapse
 * @param  {} {children
 * @param  {} ElementType
 * @param  {} open
 * @param  {} trigger
 * @param  {} ...props}
 */
export const ExpandCollapse = ({ children, ElementType, open, trigger, ...props }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <ElementType className={styles.container} {...props}>
      {trigger && (
        <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
          {trigger}
        </button>
      )}
      {isOpen && children}
    </ElementType>
  );
};

ExpandCollapse.propTypes = {
  children: PropTypes.any,
  ElementType: PropTypes.string,
  open: PropTypes.bool,
  trigger: PropTypes.any,
};

ExpandCollapse.defaultProps = {
  children: null,
  ElementType: 'div',
  open: true,
  trigger: null,
};

export default ExpandCollapse;
