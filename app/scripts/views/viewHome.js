/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'city',
    'cities',
    'cityView',
], function ($, _, Backbone, JST, City, Cities, CityView) {
    'use strict';

    var layoutView = Backbone.View.extend({
        template: JST['app/scripts/templates/layout.ejs'],

        el: '#weather_app',
        cities: [
            'Berlin DE',
            'Bucharest RO',
            'Budapest, HU',
            'Madrid ES',
            'Paris FR',
            'Rome IT',
            'London UK',
            'Vienna AT'
        ],  

        initialize: function () {
            this.render;
        },

        getStartingCities: function() {
            for (var i = this.cities.length - 1; i >= 0; i--) {
                var city = new City({name: this.cities[i]});
                var cityView = new CityView({model: city});

                city.fetch({
                    success : function(data, response) {
                        // console.log("Success");
                    },
                    error: function(response) {
                        console.log("Error", response);
                    }
                });

            };
        },

        render: function () {
            this.$el.html(this.template());
            this.getStartingCities();
        }
    });

    return layoutView;
});
