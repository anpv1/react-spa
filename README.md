# react-spa
Create a single page web application using React, RequireJS, CrossroadsJS and Hasher

#### Installation

``` shell
bower install
npm install
```

Try http://localhost/index.html#/default or http://localhost/index.html#/default?name=Your Name, it should show "Hello, World!" or "Hello, Your Name"

#### Developer usage

Edit app/app.config.js for the routing system

``` javascript
routes: {
	'home:?query:': {
		views: {
			'defaultView': 'main-view'
		}
	}
}
```

'home:?query': crossroads route  
'defaultView': the view name defined in required.config.js file  
'main-view': the element id which the view displayed in. See index.html file  
