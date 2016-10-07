import React from 'react';

class TextArea extends React.Component {
  value() {
    return this.textarea.value;
  }
  render() {
    const { label } = this.props;

    return (
      <label className='textfield'>
        <textarea ref={(ref) => { this.textarea = ref; }}/>
        <span className='textfield__label'>{label}</span>
      </label>
    );
  }
}

TextArea.propTypes = {
  label: React.PropTypes.string,
};

export default TextArea;
