'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_React$Component) {
  _inherits(TextArea, _React$Component);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextArea).apply(this, arguments));
  }

  _createClass(TextArea, [{
    key: 'value',
    value: function value() {
      return this.textarea.value;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var label = this.props.label;

      return _react2.default.createElement(
        'label',
        { className: 'textfield' },
        _react2.default.createElement('textarea', { ref: function ref(_ref) {
            _this2.textarea = _ref;
          } }),
        _react2.default.createElement(
          'span',
          { className: 'textfield__label' },
          label
        )
      );
    }
  }]);

  return TextArea;
}(_react2.default.Component);

TextArea.propTypes = {
  label: _react2.default.PropTypes.string
};

exports.default = TextArea;