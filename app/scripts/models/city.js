/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var CityModel = Backbone.Model.extend({
        initialize: function() {
            // update the default options with the attributes supplied when instance is created
            this.options = _.extend({}, this.defaults, this.options); 
        },
        defaults: {
            name: 'London UK'
        }
    });

    return CityModel;
});
