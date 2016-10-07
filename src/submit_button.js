import React from 'react';

class SubmitButton extends React.Component {

  render() {
    const { label } = this.props;
    return (
      <input type='submit' value={label} />
    );
  }

}

SubmitButton.propTypes = {
  label: React.PropTypes.string,
};

export default SubmitButton;
