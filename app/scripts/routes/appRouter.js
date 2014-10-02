/*global define*/

define([
    'jquery',
    'backbone',
    'viewLayout',
    'viewAbout',
    'mdlCity',
    'mdlYQL',
], function ($, Backbone, ViewLayout, ViewAbout, MdlCity, MdlYQL) {
    'use strict';

    var appRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'about': 'about'
        },
        
        home: function() {
            var mdlCity = new MdlCity();
            var viewLayout = new ViewLayout({model: mdlCity});
            viewLayout.render();
        },
        
        about: function() {
            console.log('About?');
            var mdlCity = new MdlCity();
            var viewAbout = new ViewAbout({model: mdlCity});
            viewAbout.render();
        }

    });

    return appRouter;
});
