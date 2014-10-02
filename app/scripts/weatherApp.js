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
            var appRouter = new AppRouter();
            Backbone.history.start();
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return layoutView;
});
