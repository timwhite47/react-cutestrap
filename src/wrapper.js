import React from 'react';
import cx from 'classnames';

class Wrapper extends React.Component {
  sizeClassName() {
    const { size, className } = this.props;

    return cx(className, {
      'wrapper': !size,
      'wrapper-small': size === 'small',
      'wrapper-large': size === 'large',
    });
  }

  render() {
    const { children, className } = this.props;
    const sizeClass = this.sizeClassName();

    return (
      <div className={cx(sizeClass, className)}>{children}</div>
    );
  }
}

Wrapper.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  size: React.PropTypes.oneOf(['large', 'small']),
};

export default Wrapper;
