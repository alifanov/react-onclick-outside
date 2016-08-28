'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var onClickOutside = function onClickOutside() {
    var handler = arguments.length <= 0 || arguments[0] === undefined ? function () {
        return null;
    } : arguments[0];

    var createOnClickHandler = function createOnClickHandler(instance) {
        return function (e) {
            if (!instance.ref || !instance.ref.contains(e.target)) {
                handler(instance.props);
            }
        };
    };

    return function (Wrapped) {
        var WithHandler = function (_Component) {
            _inherits(WithHandler, _Component);

            function WithHandler() {
                _classCallCheck(this, WithHandler);

                return _possibleConstructorReturn(this, (WithHandler.__proto__ || Object.getPrototypeOf(WithHandler)).apply(this, arguments));
            }

            _createClass(WithHandler, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    this.onClickHandler = createOnClickHandler(this);
                    document.addEventListener('click', this.onClickHandler, true);
                }
            }, {
                key: 'componentWillUnmount',
                value: function componentWillUnmount() {
                    document.removeEventListener('click', this.onClickHandler, true);
                }
            }, {
                key: 'render',
                value: function render() {
                    var _this2 = this;

                    return _react2["default"].createElement(
                        'div',
                        { style: { 'display': 'inline-block' }, ref: function ref(_ref) {
                                _this2.ref = _ref;
                            }
                        },
                        _react2["default"].createElement(Wrapped, this.props)
                    );
                }
            }]);

            return WithHandler;
        }(_react.Component);

        return (0, _hoistNonReactStatics2["default"])(WithHandler, Wrapped);
    };
};

exports["default"] = onClickOutside;