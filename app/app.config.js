define([], function(){
	return {
		default_route: 'home',
		routes: {
			'home:?query:': {
				views: {
					'defaultView': 'main-view'
				}
			},
			'todos': {
				views: {
					'todoView': 'main-view'
				}
			},
			'table': {
				views: {
					'tableView': 'main-view'
				}
			}
		}
	}
});