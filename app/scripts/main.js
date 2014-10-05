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
        viewApp: 'views/viewApp',
        viewAbout: 'views/viewAbout',
        cityView: 'views/viewCity',

    }
});

require([
    'backbone',
    'city',
    'cities',
    'cityView',
], function (Backbone, City, Cities, CityView) {

    var city = new City({name: 'London UK'});
    console.log('City to JSON', city.toJSON());

    var cities = new Cities(city);

    cities.add([{name: 'Paris France'}, {name: 'Berlin Germany'}]);
    cities.fetch({
        success : function(data) {
            // console.log("ON SUCCESS");
            console.log('success data', data);
        },
        error: function(response) {
            // console.log("ON ERROR");
            // console.log(response);
        }
    });


    // new WeatherApp({
    //     el: '#weather_app',
    // });

});
