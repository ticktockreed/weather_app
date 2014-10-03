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

        weatherApp: 'weatherApp',

        // Routers
        appRouter: 'routes/appRouter',

        // Collections

        // Models
        mdlCity: 'models/mdlCity',
        mdlYQL: 'models/mdlYQL',

        // Views
        viewApp: 'views/viewApp',
        viewAbout: 'views/viewAbout',
        viewCity: 'views/viewCity',

    }
});

require([
    'backbone',
    'weatherApp',
], function (Backbone, WeatherApp) {

    new WeatherApp({
        el: '#weather_app',
    });

});
