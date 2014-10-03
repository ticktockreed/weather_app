/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'mdlYQL',
    'viewCity',
], function ($, _, Backbone, JST, MdlYQL, ViewCity) {
    'use strict';

    var layoutView = Backbone.View.extend({
        template: JST['app/scripts/templates/layout.ejs'],

        el: '#weather_app',
        cities: [
            'London UK',
            'Berlin DE',
            'Madrid ES',
            'Rome IT',
            'Paris FR',
            'Bucharest RO',
            'Vienna AT',
            'Budapest, HU'
        ],

        initialize: function () {
            this.render;
            // for (var i = this.cities.length - 1; i >= 0; i--) {
            //     var cityName = this.cities[i];
            // };

            new ViewCity({model: new MdlYQL('London UK')});
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return layoutView;
});
