/*global require*/
'use strict';

require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',

        slick: 'libs/slick/slick.min',

        weatherApp: 'weatherApp',

        // Routers
        appRouter: 'routes/appRouter',

        // Collections
        cities: 'collections/cities',

        // Models
        city: 'models/city',
        flickR: 'models/flickr',

        // Views
        viewHome: 'views/viewHome',
        viewAbout: 'views/viewAbout',
        cityView: 'views/viewCity',
        flickrView: 'views/flickrView',

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
