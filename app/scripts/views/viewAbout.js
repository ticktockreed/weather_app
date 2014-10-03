/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var aboutView = Backbone.View.extend({
        template: JST['app/scripts/templates/viewAbout.ejs'],

        el: '#weather_app',

        initialize: function () {
            this.render;
        },

        render: function () {
            this.$el.find('#content').html(this.template());
        }

    });

    return aboutView;
});
