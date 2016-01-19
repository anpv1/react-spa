define(['react', 'react-dom', 'todos'], function(React, ReactDOM, Todos){
	var view = function(container, params){
		ReactDOM.render(
			<Todos />,
			document.getElementById(container)
		);
	};

	return view;
});