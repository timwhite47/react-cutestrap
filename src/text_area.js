import React from 'react';

class TextArea extends React.Component {
  value() {
    return this.textarea.value;
  }
  render() {
    const { label, onChange } = this.props;

    return (
      <label className='textfield'>
        <textarea onChange={onChange} ref={(ref) => { this.textarea = ref; }}/>
        <span className='textfield__label'>{label}</span>
      </label>
    );
  }
}

TextArea.propTypes = {
  label: React.PropTypes.string,
  onChange: React.PropTypes.func,
};

export default TextArea;
