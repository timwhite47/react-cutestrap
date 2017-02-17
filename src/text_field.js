import React from 'react';

class TextField extends React.Component {
  value() {
    return this.input.value;
  }

  render() {
    const { label, value, onChange } = this.props;
    return (
      <label className='textfield'>
        <input onChange={onChange} ref={(ref) => { this.input = ref; }} type='text' value={value}/>
        <span className='textfield__label'>{label}</span>
      </label>
    );
  }
}

TextField.propTypes = {
  label: React.PropTypes.string,
  onChange: React.PropTypes.func,
  value: React.PropTypes.string,
};

export default TextField;
