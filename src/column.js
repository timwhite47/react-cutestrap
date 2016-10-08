import React from 'react';
import cx from 'classnames';

class Column extends React.Component {
  weightClassName() {
    const { weight } = this.props;

    return cx({
      'column--light': (weight === 'light'),
      'column--heavy': (weight === 'heavy'),
    });
  }
  render() {
    const { children } = this.props;
    return (
      <div className={this.weightClassName()}>{children}</div>
    );
  }
}

Column.propTypes = {
  children: React.PropTypes.any,
  weight: React.PropTypes.string,
};

export default Column;
