define(['config', 'hasher', 'crossroads'], function(config, hasher, crossroads){
	var mainApp = {
		init: function(){
			// init routes from config with crossroads
			crossroads.shouldTypecast = true;
			crossroads.bypassed.add(function(request){
				hasher.setHash(config.default_route);
			});

			for(var route in config.routes){
				var route_data = config.routes[route].views;
				(function(route, data){
					crossroads.addRoute(route, function(params){
						for( var view in data ) {
							// require the view for this route
							require([view], function(view_handler){
								var container = data[view];
								view_handler.call(view_handler, container, params);
							});
						}
					});
				})(route, route_data);
			}

			// init hash management with hasher
			hasher.changed.add(mainApp.url_changed);
			hasher.initialized.add(mainApp.url_changed);
			hasher.init();
		},
		url_changed: function(new_hash, old_hash){
			if(new_hash == undefined || new_hash == ''){
				hasher.setHash(config.default_route);
			} else {
				crossroads.parse(new_hash);
			}
		}
	};

	return mainApp;
});