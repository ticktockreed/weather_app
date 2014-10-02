/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var MdlcityModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            title: 'Weather for the city of London',
            city: "London",
            text: "Fair",
            code: "34",
            temp: "0",
            date: "Sat 1 Jan",
            thumbnail: null
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return MdlcityModel;
});
