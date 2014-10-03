define([
    'underscore', 
    'backbone'
], function( _, Backbone) {
    'use strict';

    var YQLSearch = Backbone.Model.extend({

        initialize: function(query) {
            this.search({query: query});
        },

        search: function(params, success, error) {

            var urlRoot = 'http://query.yahooapis.com/v1/public/yql?q=';
            var yql = urlRoot + 'select * from weather.forecast where woeid in (select woeid from geo.places where text="' + params.query + '")';
            yql = yql + "&format=json&diagnostics=true&callback="

            this.fetch({
                url: yql,
                type: 'get',
                dataType: 'json',
                success: function(model, response, options) {
                    var instances = [],
                        query = response && response.query,
                        results = query && query.results.channel,
                            len = results && results.length;

                    if (results && len) {
                        for(var i=0; i<len; i++) {
                            var q = results[i];
                            instances.push( new YQLSearch(q));
                        }

                        console.log('First of multiple', results[0]);
                    } else {
                        console.log('single', results);
                    }


                    // _.each(results, function(value, key){
                    //     console.log(value.location.city);
                    //     console.log(value.location.country);
                    //     // console.log(value.location.region);
                    //     instances.push(value);
                    // }, this);
                    console.log(instances);

                },
                error: function() {
                    error(arguments);
                }
            });
        }
    });

    return YQLSearch;
});