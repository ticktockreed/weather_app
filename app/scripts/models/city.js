/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var CityModel = Backbone.Model.extend({
        urlRoot: 'http://query.yahooapis.com/v1/public/yql?q=',
        yqlQuery: 'select * from weather.forecast where woeid in (select woeid from geo.places where text="',
        yqlOpts: '") and u="c"&format=json&diagnostics=true&callback=',
        
        url: function() {
            return this.urlRoot + encodeURIComponent(this.yqlQuery) + encodeURIComponent(this.options.name) + this.yqlOpts;
        },

        initialize: function() {
            // update the default options with the attributes supplied when instance is created
            this.options = _.extend({}, this.defaults, this.attributes); 
        },

        defaults: {
            name: 'London UK'
        },

        parse: function(data) {
            // Parse the data so that we only get the details for one city
            var channels = data.query.results.channel;
            if (channels.length > 1) {
                return data.query.results.channel[0];
            }
            return data.query.results.channel;
        }
    });

    return CityModel;
});
