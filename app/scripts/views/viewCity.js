/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var CityView = Backbone.View.extend({
        template: JST['app/scripts/templates/viewCity.ejs'],

        el: '#content',

        events: {
            'click': 'showForecast'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
        },

        showForecast: function(ev) {
            $('.city').removeClass('open');
            $(ev.target).parents('.city').addClass('open');
        }
    });

    return CityView;
});
