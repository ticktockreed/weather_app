/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var CityModel = Backbone.Model.extend({
        urlRoot: 'http://query.yahooapis.com/v1/public/yql?q=',
        yqlQuery: 'select * from weather.forecast where woeid in (select woeid from geo.places where text="',
        yqlOpts: '")&format=json&diagnostics=true&callback=',
        initialize: function() {
            console.log('city initialised');
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
        },
        url: function(query) {
            return this.urlRoot + encodeURIComponent(this.yqlQuery) + encodeURIComponent(this.options.name) + this.yqlOpts;
        },
    });

    return CityModel;
});
