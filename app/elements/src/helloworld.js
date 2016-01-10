define(['react', 'react-dom'], function(React, ReactDOM){
	var HelloWorld = React.createClass({
		render: function() {
			return (
				<h3>Hello, {this.props.name}!</h3>
			);
		}
	});

	return HelloWorld;
});