define(['react', 'react-dom', 'lodash'], function(React, ReactDOM, _){

	var Todo = React.createClass({
		render: function(){
			var done = this.props.data.done;
			return (
				<div class="checkbox">
					<label>
						<input onChange={this.props.onTodoToggle} type="checkbox" checked={done} /> <span className={done ? 'done': 'notdone'}>{this.props.data.title}</span>
					</label>
				</div>
			);
		}
	});

	var TodoList = React.createClass({
		render: function(){
			var self = this;
			var TodoItems = this.props.data.map(function(item, index){
				var toggleFunction = self.props.onTodoToggle.bind(this, index);
				return (
					<Todo onTodoToggle={toggleFunction} key={index} data={item} />
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
		onTodoToggle: function(index){
			var todos = this.state.todos;
			todos[index].done = !todos[index].done;
			this.setState({todos: todos});
		},
		onTodoAdd: function(item){
			var todos = this.state.todos;
			todos.push({title: item, done: false});
			this.setState({todos: todos});
		},
		render: function() {
			var data = this.state.todos;
			var remaining = _.reduce(data, function(sum, item){
				if(item.done == false){
					return ++sum;
				} else {
					return sum;
				}
			}, 0);
			return (
				<div>
					<h3>Todo List</h3>
					<TodoForm onTodoAdd={this.onTodoAdd} />
					<TodoList onTodoToggle={this.onTodoToggle} data={data} />
					<div>Number of remaining items: {remaining}</div>
				</div>
			);
		}
	});

	return Todos;
});