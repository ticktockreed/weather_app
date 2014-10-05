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
            this.flickrView = new FlickrView({
                el: $('#' + this.cid + ' .city-pics'), 
                model: this.flickrPics
            });
            $('#content .city').first().addClass('open');
            $('#content .city').first().height(window.innerHeight - 100);
        },

        showForecast: function(ev) {
            $('.city.open').height('100px');
            $('.city.open').removeClass('open');
            $(ev.target).parents('.city').addClass('open');
            $(ev.target).parents('.city').height(window.innerHeight - 100);
        }
    });

    return CityView;
});
