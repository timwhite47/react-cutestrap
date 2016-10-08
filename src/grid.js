import React from 'react';
import cx from 'classnames';

class Grid extends React.Component {
  render() {
    const { size, children } = this.props;
    const className = cx({
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
  size: React.PropTypes.oneOf(['large', 'medium']),
};

export default Grid;
