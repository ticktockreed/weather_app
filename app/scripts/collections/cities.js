/*global define*/

define([
    'underscore',
    'backbone',
    'city'
], function (_, Backbone, City) {
    'use strict';

    var CitiesCollection = Backbone.Collection.extend({
        urlRoot: 'http://query.yahooapis.com/v1/public/yql?q=',
        yqlQuery: 'select * from weather.forecast where woeid in (select woeid from geo.places where text="',
        yqlOpts: '")&format=json&diagnostics=true&callback=',
        url: function(query) {
            console.log('query: ', this.attributes);
            // console.log(this.urlRoot + this.yqlQuery + this.name + this.yqlOpts);
            return this.urlRoot + encodeURIComponent(this.yqlQuery) + encodeURIComponent('London') + this.yqlOpts;
        },
        model: City,
        initialize: function() {
            console.log('Cities initialized: ');
        },
        parse: function(data) {
            // Parse the data so that we only get the 
            var channels = data.query.results.channel;

            if (channels.length > 1) {
                return data.query.results.channel[0];
            }
            return data.query.results.channel;
        }
    });

    return CitiesCollection;
});
