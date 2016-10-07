import React from 'react';

class TextField extends React.Component {
  value() {
    return this.input.value;
  }

  render() {
    const { label, value } = this.props;
    return (
      <label className='textfield'>
        <input ref={(ref) => { this.input = ref; }} type='text' value={value} />
        <span className='textfield__label'>{label}</span>
      </label>
    );
  }
}

TextField.propTypes = {
  label: React.PropTypes.string,
  value: React.PropTypes.string,
};

export default TextField;
