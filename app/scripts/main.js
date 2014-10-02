/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',


        // Routers
        appRouter: 'routes/appRouter',

        // Collections

        // Models
        mdlCity: 'models/mdlCity',
        mdlYQL: 'models/mdlYQL',

        // Views
        viewLayout: 'views/viewLayout',
        viewAbout: 'views/viewAbout'

    }
});

require([
    'backbone',
    'appRouter',
], function (Backbone, AppRouter) {

    var appRouter = new AppRouter();
    Backbone.history.start();

});
