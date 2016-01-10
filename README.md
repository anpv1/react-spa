# react-spa
Create a single page web application using React, RequireJS, CrossroadsJS and Hasher

#### Installation

``` shell
bower install
npm install
```

Try http://localhost/index.html#/default  
or http://localhost/index.html#/default?name=Your Name,  
it should show "Hello, World!" or "Hello, Your Name"

#### Developer usage

Edit app/app.config.js for the routing system

``` javascript
routes: {
	'home:?query:': {
		views: {
			'defaultView': 'main-view',
			'otherView': 'other-element-id'
		},
		others_config: {
			login_required: 1
		}
	}
}
```

'home:?query': crossroads route  
'defaultView': the view name defined in required.config.js file  
'main-view': the element id which the view displayed in. See index.html file  

React views and React elements in app/views and app/elements folder, you should run commands to auto build the source code  

``` shell
npm install -g babel-cli
babel --presets react app/views/src --watch --out-dir app/views/build
babel --presets react app/elements/src --watch --out-dir app/elements/build
```
