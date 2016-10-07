import React from 'react';

class RadioButton extends React.Component {

  render() {
    const { name, label } = this.props;

    return (
      <label className='radio'>
        <input name={name} type='radio'/>
        <span className='radio__label'>{label}</span>
      </label>
    );
  }
}

RadioButton.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string,
};
export default RadioButton;
