import React from 'react';
import cx from 'classnames';

class Wrapper extends React.Component {
  className() {
    const { size } = this.props;
    return cx({
      'wrapper': !size,
      'wrapper-small': size === 'small',
      'wrapper-large': size === 'large',
    });
  }

  render() {
    return (
      <div className={this.className()}></div>
    );
  }
}

Wrapper.propTypes = {
  size: React.PropTypes.oneOf(['large', 'small']),
};

export default Wrapper;
