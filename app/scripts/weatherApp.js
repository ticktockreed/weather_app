/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'appRouter'
], function ($, _, Backbone, JST, AppRouter) {
    'use strict';

    var layoutView = Backbone.View.extend({
        template: JST['app/scripts/templates/layout.ejs'],

        initialize: function () {
            this.render();
            var appRouter = new AppRouter();
            Backbone.history.start();
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return layoutView;
});
