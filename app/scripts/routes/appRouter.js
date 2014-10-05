/*global define*/

define([
    'jquery',
    'backbone',
    'viewHome',
    'viewAbout',
], function ($, Backbone, ViewHome, ViewAbout) {
    'use strict';

    var appRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'about': 'about'
        },
        
        home: function() {
            console.log('Home');
            var viewHome = new ViewHome;
            viewHome.render();
        },
        
        about: function() {
            console.log('About');
            var viewAbout = new ViewAbout;
            viewAbout.render();
        }

    });

    return appRouter;
});
