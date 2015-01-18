/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }

    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        layoutmanager: '../bower_components/layoutmanager/backbone.layoutmanager',
        highcharts: '../bower_components/highcharts-release/highcharts',
        handlebars: '../bower_components/handlebars/handlebars.min'

    }
});

require([
    'backbone', 'app', 'router'
], function (Backbone, App, Router) {
    window.App = App;
    App.Init();
    new Router();
    Backbone.history.start({pushState: true});
    $(document).on("click", "a[href]:not([data-bypass])", function (evt) {
        var href = {prop: $(this).prop("href"), attr: $(this).attr("href")};
        var root = location.protocol + "//" + location.host;
        if (href.prop.slice(0, root.length) === root) {
            evt.preventDefault();
            Backbone.history.navigate(href.attr, true);
        }
    });
});
