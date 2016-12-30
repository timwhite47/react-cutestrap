'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectOption = function (_React$Component) {
  _inherits(SelectOption, _React$Component);

  function SelectOption() {
    _classCallCheck(this, SelectOption);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectOption).apply(this, arguments));
  }

  _createClass(SelectOption, [{
    key: 'render',
    value: function render() {
      var option = this.props.option;

      return _react2.default.createElement(
        'option',
        null,
        option
      );
    }
  }]);

  return SelectOption;
}(_react2.default.Component);

var Select = function (_React$Component2) {
  _inherits(Select, _React$Component2);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Select).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'value',
    value: function value() {
      return this.select.value;
    }
  }, {
    key: '_renderOptions',
    value: function _renderOptions() {
      var options = this.props.options;

      return options.map(function (option) {
        return _react2.default.createElement(SelectOption, { key: option, option: option });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props;
      var className = _props.className;
      var label = _props.label;

      var cName = (0, _classnames2.default)('select', className);

      return _react2.default.createElement(
        'label',
        { className: cName },
        _react2.default.createElement(
          'select',
          { ref: function ref(_ref) {
              _this3.select = _ref;
            } },
          this._renderOptions()
        ),
        _react2.default.createElement(
          'span',
          { className: 'select__label', htmlFor: 'select' },
          label
        )
      );
    }
  }]);

  return Select;
}(_react2.default.Component);

SelectOption.propTypes = {
  option: _react2.default.PropTypes.string
};

Select.propTypes = {
  className: _react2.default.PropTypes.string,
  label: _react2.default.PropTypes.string,
  options: _react2.default.PropTypes.array
};

exports.default = Select;