define(['react', 'react-dom', 'todos'], function (React, ReactDOM, Todos) {
	var view = function (container, params) {
		ReactDOM.render(React.createElement(Todos, null), document.getElementById(container));
	};

	return view;
});