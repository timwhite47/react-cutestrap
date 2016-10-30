import React from 'react';
import cx from 'classnames';

class Grid extends React.Component {
  render() {
    const { size, children, className: customClassName } = this.props;
    const className = cx(customClassName, {
      'grid--large': (size === 'large'),
      'grid--medium': (size === 'medium'),
      'grid': !size,
    });

    return (
      <section className={className}>{children}</section>
    );
  }
}

Grid.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  size: React.PropTypes.oneOf(['large', 'medium']),
};

export default Grid;
