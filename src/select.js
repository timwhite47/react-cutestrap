import React from 'react';

class SelectOption extends React.Component {
  render() {
    const { option } = this.props;
    return <option>{option}</option>;
  }
}

class Select extends React.Component {
  _renderOptions() {
    const { options } = this.props;
    return options.map((option) => <SelectOption key={option} option={option} />);
  }
  render() {
    const { className, label } = this.props;
    return (
      <label className={className}>
        <select>
          {this._renderOptions()}
        </select>
        <span className='select__label' htmlFor={className}>{label}</span>
      </label>
    );
  }
}

SelectOption.propTypes = {
  option: React.PropTypes.string,
};

Select.propTypes = {
  className: React.PropTypes.string,
  label: React.PropTypes.string,
  options: React.PropTypes.array,
};

export default Select;
