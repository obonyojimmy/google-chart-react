'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoadScript = require('react-load-script');

var _reactLoadScript2 = _interopRequireDefault(_reactLoadScript);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var GoogleChart = (function (_React$Component) {
	_inherits(GoogleChart, _React$Component);

	function GoogleChart() {
		_classCallCheck(this, GoogleChart);

		_get(Object.getPrototypeOf(GoogleChart.prototype), 'constructor', this).call(this);
		if (!GoogleChart.loaded) {
			GoogleChart.loaded = true;
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.onload = (function () {
				window.google = google;
				google.charts.load('current', { packages: this.props.packages });
				google.charts.setOnLoadCallback((function () {
					window.dispatchEvent(new Event('googleChartReactLoaded-ai3r93'));
				}).bind(this));
			}).bind(this);
			script.src = 'https://www.gstatic.com/charts/loader.js';
			head.appendChild(script);
		}
	}

	_createClass(GoogleChart, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (!this.props.chartID || this.props.chartID === '') {
				// prevents overlap of charts
				var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
				this.chartID = _underscore2['default'].sample(possible, 18).join('');
			} else {
				this.chartID = this.props.chartID;
			}
			if (this.props.drawChart) {
				this.drawChart = this.props.drawChart;
			} else {
				this.drawChart = function () {
					document.getElementById(this.chartID).innerHTML = 'Chart not created.';
				};
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.packages.push('corechart');
			window.addEventListener('googleChartReactLoaded-ai3r93', (function () {
				this.drawChart(this.chartID);
			}).bind(this));
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement('div', { id: this.chartID })
			);
		}
	}]);

	return GoogleChart;
})(_react2['default'].Component);

exports['default'] = GoogleChart;

GoogleChart.loaded = false;

GoogleChart.defaultProps = {
	packages: []
};
module.exports = exports['default'];