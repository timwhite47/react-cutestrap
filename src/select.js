import React from 'react';
import cx from 'classnames';
class SelectOption extends React.Component {
  render() {
    const { option: {value, label} } = this.props;
    return <option key={value} value={value}>{label}</option>;
  }
}

class Select extends React.Component {
  value() {
    return this.select.value;
  }
  _renderOptions() {
    const { options } = this.props;
    return options.map((option) => <SelectOption key={option.value} option={option} />);
  }
  render() {
    const { className, label } = this.props;
    const cName = cx('select', className);

    return (
      <label className={cName}>
        <select ref={(ref) => { this.select = ref; }}>
          {this._renderOptions()}
        </select>
        <span className='select__label' htmlFor='select'>{label}</span>
      </label>
    );
  }
}

SelectOption.propTypes = {
  option: React.PropTypes.object,
};

Select.propTypes = {
  className: React.PropTypes.string,
  label: React.PropTypes.string,
  options: React.PropTypes.array,
};

export default Select;
