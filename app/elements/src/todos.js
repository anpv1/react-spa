define(['react', 'react-dom'], function(React, ReactDOM){

	var Todo = React.createClass({
		getInitialState: function(){
			return {done: this.props.data.done};
		},
		toggleDone: function(event){
			this.setState({done: !this.state.done});
		},
		render: function(){
			var done = this.state.done;
			return (
				<div class="checkbox">
					<label>
						<input onChange={this.toggleDone} type="checkbox" checked={done} /> <span className={done ? 'done': 'notdone'}>{this.props.data.title}</span>
					</label>
				</div>
			);
		}
	});

	var TodoList = React.createClass({
		render: function(){
			var TodoItems = this.props.data.map(function(item, index){
				return (
					<Todo key={index} data={item} />
				);
			});
			return (
				<div class="todo-list">
					{TodoItems}
				</div>
			);
		}
	});

	var TodoForm = React.createClass({
		getInitialState: function() {
			return {value: ''};
		},
		handleChange: function(event) {
			this.setState({value: event.target.value});
		},
		handleSubmit: function(event){
			this.props.onTodoAdd(this.state.value);
			this.setState({value: ''});
		},
		render: function() {
			var value = this.state.value;
			return (
				<div>
					<input type="text" value={value} onChange={this.handleChange} />&nbsp;
					<button onClick={this.handleSubmit} class="btn btn-default">Add</button>
				</div>
			);
		}
	});


	var Todos = React.createClass({
		getInitialState: function(){
			return {todos: []}
		},
		onTodoAdd: function(item){
			var todos = this.state.todos;
			todos.push({title: item, done: false});
			this.setState({todos: todos});
		},
		render: function() {
			var data = this.state.todos;
			return (
				<div>
					<h3>Todo List</h3>
					<TodoForm onTodoAdd={this.onTodoAdd} />
					<TodoList data={data} />
					<div>Number of items: {data.length}</div>
				</div>
			);
		}
	});

	return Todos;
});