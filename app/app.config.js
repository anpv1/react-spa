define([], function(){
	return {
		default_route: 'home',
		routes: {
			'home:?query:': {
				views: {
					'defaultView': 'main-view'
				}
			}
		}
	}
});