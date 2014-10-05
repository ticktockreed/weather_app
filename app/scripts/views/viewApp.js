/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'mdlYQL',
    'cityView',
], function ($, _, Backbone, JST, MdlYQL, CityView) {
    'use strict';

    var layoutView = Backbone.View.extend({
        template: JST['app/scripts/templates/layout.ejs'],

        el: '#weather_app',

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
