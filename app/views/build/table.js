define(['react', 'react-dom', 'table'], function (React, ReactDOM, Table) {
	var view = function (container, params) {
		var title = 'Table 33';

		var options = {
			columns: [{
				field: "id",
				title: "ID"
			}, {
				field: "firstname",
				title: "First Name"
			}, {
				field: "lastname",
				title: "Last Name"
			}, {
				field: "username",
				title: "User Name"
			}, {
				field: "test",
				title: "Test An"
			}],
			data: [{
				id: 1,
				firstname: "Mark",
				lastname: "Otto",
				username: "@mdo",
				test: "aaaa"
			}, {
				id: 2,
				firstname: "Jacob",
				lastname: "Thornton",
				username: "@fat",
				test: "aaaa"
			}, {
				id: 3,
				firstname: "Larry the Bird",
				lastname: "",
				username: "@twitter",
				test: "aaaa"
			}]
		};

		ReactDOM.render(React.createElement(Table, { title: title, options: options }), document.getElementById(container));
	};

	return view;
});