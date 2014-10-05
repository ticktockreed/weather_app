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
        cities: 'collections/cities',

        // Models
        city: 'models/city',
        mdlYQL: 'models/mdlYQL',

        // Views
        viewHome: 'views/viewHome',
        viewAbout: 'views/viewAbout',
        cityView: 'views/viewCity',

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
