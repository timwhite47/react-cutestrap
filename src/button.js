import React from 'react';

class Button extends React.Component {

  render() {
    const { type, value } = this.props;

    return (
      <button className={`btn--${type}`}>{value}</button>
    );
  }

}

Button.propTypes = {
  type: React.PropTypes.oneOf(['primary', 'secondary', 'link']),
  value: React.PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
