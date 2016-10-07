import React from 'react';

class CheckBox extends React.Component {

  render() {
    const { label } = this.props;
    return (
      <label className='checkbox'>
        <input type='checkbox' />
        <span className='checkbox__label'>{label}</span>
      </label>
    );
  }
}

CheckBox.propTypes = {
  label: React.PropTypes.string,
};

export default CheckBox;
