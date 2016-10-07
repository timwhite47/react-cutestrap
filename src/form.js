import React from 'react';

class Form extends React.Component {
  render() {
    const { className, htmlOptions, children, onSubmit, onChange } = this.props;

    return (
      <form
        className={className}
        onChange={onChange}
        onSubmit={onSubmit}
        {...htmlOptions}>
        {children}
      </form>
    );
  }
}

Form.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  htmlOptions: React.PropTypes.object,
  onChange: React.PropTypes.func,
  onSubmit: React.PropTypes.func,
};

export default Form;
