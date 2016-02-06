define(['react', 'react-dom', 'lodash'], function (React, ReactDOM, _) {
	var Heading = React.createClass({
		displayName: 'Heading',

		render: function () {
			var ThItems = this.props.columns.map(function (item, index) {
				return React.createElement(
					'th',
					null,
					item.title
				);
			});

			return React.createElement(
				'thead',
				null,
				React.createElement(
					'tr',
					null,
					ThItems
				)
			);
		}
	});

	var Row = React.createClass({
		displayName: 'Row',

		render: function () {
			var data = this.props.data;
			var TdItems = this.props.columns.map(function (item, index) {
				return React.createElement(
					'td',
					{ key: item.field },
					data[item.field]
				);
			});

			return React.createElement(
				'tr',
				null,
				TdItems
			);
		}
	});

	var Body = React.createClass({
		displayName: 'Body',

		render: function () {
			var columns = this.props.columns;

			var RowItems = this.props.data.map(function (item, index) {
				return React.createElement(Row, { key: item.id, columns: columns, data: item });
			});

			return React.createElement(
				'tbody',
				null,
				RowItems
			);
		}
	});

	var Table = React.createClass({
		displayName: 'Table',

		render: function () {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h3',
					null,
					this.props.title,
					'!'
				),
				React.createElement(
					'table',
					{ className: 'table table-striped' },
					React.createElement(Heading, { columns: this.props.options.columns }),
					React.createElement(Body, { data: this.props.options.data, columns: this.props.options.columns })
				),
				React.createElement(
					'div',
					{ className: 'pagination' },
					'Pagination'
				)
			);
		}
	});

	return Table;
});