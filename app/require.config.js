require.config({
  shim: {
    bootstrap: [
      'jquery'
    ],
    jquery: {
      exports: 'jQuery'
    },
    react: {
      exports: 'React'
    },
    'react-dom': {
      deps: ['react'],
      exports: 'ReactDOM'
    }
  },
  paths: {
    app: '../app/app',
    config: '../app/app.config',
    defaultView: '../app/views/build/default',
    todoView: '../app/views/build/todo',
    tableView: '../app/views/build/table',
    helloworld: '../app/elements/build/helloworld',
    todos: '../app/elements/build/todos',
    table: '../app/elements/build/table',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
    hasher: '../bower_components/hasher/dist/js/hasher.min',
    react: '../bower_components/react/react.min',
    'react-dom': '../bower_components/react/react-dom.min',
    requirejs: '../bower_components/requirejs/require',
    jquery: '../bower_components/jquery/dist/jquery.min',
    signals: '../bower_components/js-signals/dist/signals.min',
    crossroads: '../node_modules/crossroads/dist/crossroads.min',
    lodash: '../bower_components/lodash/dist/lodash.min'
  },
  packages: [

  ]
});

require(['app'], function(app){
  app.init();
});