import React from 'react';

class RadioButton extends React.Component {
  value() {
    return this.radio.value;
  }

  render() {
    const { name, label, onChange, value } = this.props;

    return (
      <label className='radio'>
        <input
          name={name}
          onChange={onChange}
          ref={(ref) => { this.radio = ref; }}
          type='radio'
          value={value}
        />
        <span className='radio__label'>{label}</span>
      </label>
    );
  }
}

RadioButton.propTypes = {
  label: React.PropTypes.string,
  onChange: React.PropTypes.func,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
};

export default RadioButton;
