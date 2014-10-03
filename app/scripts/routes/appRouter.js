/*global define*/

define([
    'jquery',
    'backbone',
    'viewApp',
    'viewAbout',
], function ($, Backbone, ViewApp, ViewAbout) {
    'use strict';

    var appRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'about': 'about'
        },
        
        home: function() {
            console.log('Home');
            var viewApp = new ViewApp;
            viewApp.render();
        },
        
        about: function() {
            console.log('About');
            var viewAbout = new ViewAbout;
            viewAbout.render();
        }

    });

    return appRouter;
});
