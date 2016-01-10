define(['react', 'react-dom', 'helloworld'], function(React, ReactDOM, HelloWorld){
	var view = function(container, params){
		var name = params && params.name ? params.name : 'World';
		ReactDOM.render(
			<HelloWorld name={name} />,
			document.getElementById(container)
		);
	};

	return view;
});