/**
 * Created by BonDoQ on 1/18/15.
 */

define(['backbone'], function (Backbone) {
    return Backbone.Router.extend({

        routes: {
            "": "main",
            "doc" : "documentation",
            ":id": "single"
        },

        main: function () {
            App.renderLayout('main');
        },
        documentation: function(){
          App.renderLayout('doc');
        },
        single: function (id) {
            App.renderLayout('single', id);
        }
    });
});
