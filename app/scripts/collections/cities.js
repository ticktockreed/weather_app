/*global define*/

define([
    'underscore',
    'backbone',
    'city'
], function (_, Backbone, City) {
    'use strict';

    var CitiesCollection = Backbone.Collection.extend({
        model: City,
        initialize: function() {
            console.log('Cities initialized: ');
        }
    });

    return CitiesCollection;
});
