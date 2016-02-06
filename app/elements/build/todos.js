define(['react', 'react-dom', 'lodash'], function (React, ReactDOM, _) {

	var Todo = React.createClass({
		displayName: 'Todo',

		render: function () {
			var done = this.props.data.done;
			return React.createElement(
				'div',
				{ 'class': 'checkbox' },
				React.createElement(
					'label',
					null,
					React.createElement('input', { onChange: this.props.onTodoToggle, type: 'checkbox', checked: done }),
					' ',
					React.createElement(
						'span',
						{ className: done ? 'done' : 'notdone' },
						this.props.data.title
					)
				)
			);
		}
	});

	var TodoList = React.createClass({
		displayName: 'TodoList',

		render: function () {
			var self = this;
			var TodoItems = this.props.data.map(function (item, index) {
				var toggleFunction = self.props.onTodoToggle.bind(this, index);
				return React.createElement(Todo, { onTodoToggle: toggleFunction, key: index, data: item });
			});
			return React.createElement(
				'div',
				{ 'class': 'todo-list' },
				TodoItems
			);
		}
	});

	var TodoForm = React.createClass({
		displayName: 'TodoForm',

		getInitialState: function () {
			return { value: '' };
		},
		handleChange: function (event) {
			this.setState({ value: event.target.value });
		},
		handleSubmit: function (event) {
			this.props.onTodoAdd(this.state.value);
			this.setState({ value: '' });
		},
		render: function () {
			var value = this.state.value;
			return React.createElement(
				'div',
				null,
				React.createElement('input', { type: 'text', value: value, onChange: this.handleChange }),
				' ',
				React.createElement(
					'button',
					{ onClick: this.handleSubmit, 'class': 'btn btn-default' },
					'Add'
				)
			);
		}
	});

	var Todos = React.createClass({
		displayName: 'Todos',

		getInitialState: function () {
			return { todos: [] };
		},
		onTodoToggle: function (index) {
			var todos = this.state.todos;
			todos[index].done = !todos[index].done;
			this.setState({ todos: todos });
		},
		onTodoAdd: function (item) {
			var todos = this.state.todos;
			todos.push({ title: item, done: false });
			this.setState({ todos: todos });
		},
		render: function () {
			var data = this.state.todos;
			var remaining = _.reduce(data, function (sum, item) {
				if (item.done == false) {
					return ++sum;
				} else {
					return sum;
				}
			}, 0);
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h3',
					null,
					'Todo List'
				),
				React.createElement(TodoForm, { onTodoAdd: this.onTodoAdd }),
				React.createElement(TodoList, { onTodoToggle: this.onTodoToggle, data: data }),
				React.createElement(
					'div',
					null,
					'Number of remaining items: ',
					remaining
				)
			);
		}
	});

	return Todos;
});