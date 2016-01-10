define(['react', 'react-dom'], function (React, ReactDOM) {
	var HelloWorld = React.createClass({
		displayName: 'HelloWorld',

		render: function () {
			return React.createElement(
				'h3',
				null,
				'Hello, ',
				this.props.name,
				'!'
			);
		}
	});

	return HelloWorld;
});