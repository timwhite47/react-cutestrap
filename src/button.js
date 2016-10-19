import React from 'react';
import cx from 'classnames';

class Button extends React.Component {

  render() {
    const { type, value, className, onClick } = this.props;
    const cutestrapButtonType = `btn--${type}`;
    const buttonClass = cx(cutestrapButtonType, className);

    return (
      <button className={buttonClass} onClick={onClick}>{value}</button>
    );
  }

}

Button.propTypes = {
  className: React.PropTypes.any,
  onClick: React.PropTypes.func,
  type: React.PropTypes.oneOf(['primary', 'secondary', 'link']),
  value: React.PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
