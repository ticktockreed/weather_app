/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'flickR',
    'flickrView'
], function ($, _, Backbone, JST, FlickR, FlickrView) {
    'use strict';

    var CityView = Backbone.View.extend({
        template: JST['app/scripts/templates/viewCity.ejs'],

        el: '#content',
        tagName: 'li',

        events: {
            'click': 'showForecast'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.append(this.template(this.model.toJSON()));
            this.flickrPics = new FlickR({query: this.model.attributes.name});
            this.flickrPics.fetch({
                success: function(data) {
                    // console.log(data);
                },
                error: function(data, response) {
                    console.log('Error', response);
                }
            });
            console.log($(this));
            this.flickrView = new FlickrView({el: $('#' + this.cid + ' .city-pics'), model: this.flickrPics});
        },

        showForecast: function(ev) {
            $('.city').removeClass('open');
            $(ev.target).parents('.city').addClass('open');
        }
    });

    return CityView;
});
