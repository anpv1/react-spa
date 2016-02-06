define(['react', 'react-dom', 'lodash'], function(React, ReactDOM, _){
	var Heading = React.createClass({
		render: function(){
			var ThItems = this.props.columns.map(function(item, index){
				return (
					<th>{item.title}</th>
				);
			});

			return (
				<thead>
					<tr>
						{ThItems}
					</tr>
				</thead>
			);
		}
	});

	var Row = React.createClass({
		render: function(){
			var data = this.props.data;
			var TdItems = this.props.columns.map(function(item, index){
				return (
					<td key={item.field}>{data[item.field]}</td>
				);
			});

			return (
				<tr>
					{TdItems}
				</tr>
			);
		}
	});

	var Body = React.createClass({
		render: function(){
			var columns = this.props.columns;

			var RowItems = this.props.data.map(function(item, index){
				return (
					<Row key={item.id} columns={columns} data={item} />
				);
			});

			return (
				<tbody>
					{RowItems}
				</tbody>
			);
		}
	});

	var Table = React.createClass({
		render: function(){
			return (
				<div>
					<h3>{this.props.title}!</h3>
					<table className="table table-striped">
						<Heading columns={this.props.options.columns} />
						<Body data={this.props.options.data} columns={this.props.options.columns} />
					</table>
					<div className="pagination">Pagination</div>
				</div>
			);
		}
	});

	return Table;
});