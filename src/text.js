import React from 'react';
import cx from 'classnames';
class Text extends React.Component {
  textClassName() {
    const { align, size, weight } = this.props;
    const className = [];

    if (align) { className.push(`ta-${align}`); }
    if (size) { className.push(`fs-${size}`); }
    if (weight) { className.push(`fw-${weight}`); }

    return cx(className);
  }

  render() {
    const { children } = this.props;
    return (
      <p className={this.textClassName()}>{children}</p>
    );
  }
}

Text.propTypes = {
  align: React.PropTypes.oneOf(['left', 'right', 'center']),
  children: React.PropTypes.any,
  size: React.PropTypes.oneOf(['small', 'base', 'large']),
  weight: React.PropTypes.oneOf(['light', 'normal', 'semibold', 'bold']),
};

export default Text;
