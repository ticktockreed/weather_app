/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var FlickrModel = Backbone.Model.extend({
        url: function() {
            return 'http://api.flickr.com/services/feeds/photos_public.gne?tags="' + this.options.query + '"&tagmode=any&format=json&jsoncallback=?';
        },

        initialize: function() {
            // update the default options with the attributes supplied when instance is created
            this.options = _.extend({}, this.defaults, this.attributes);
        },

        defaults: {
            query: 'London UK'
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            // return only the list of pictures
            var photos = response.items;
            return {
                photos: photos
            };
        }
    });

    return FlickrModel;
});
