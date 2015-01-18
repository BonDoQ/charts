/**
 * Created by BonDoQ on 1/17/15.
 */

define(["backbone", "layoutmanager", "handlebars", "layout/single", "layout/main", "layout/doc"],
    function (Backbone, LayoutManager, Handlebars, SingleLayout, MainLayout, DocLayout) {
        return {
            Init: function () {
                Backbone.Layout.configure({
                    manage: true,
                    prefix: "scripts/template/",
                    fetchTemplate: function (path) {
                        path += '.tpl';
                        var JST = window.JST || {};
                        if (JST[path]) {
                            return JST[path];
                        }
                        var done = this.async();
                        $.get(path, function (contents) {
                            done(Handlebars.compile(contents));
                        }, "text");
                    }
                });
            },

            renderLayout: function (type, id) {
                type = type || 'main';
                var layout;
                switch (type) {
                    case 'main':
                        layout = new MainLayout();
                        break;
                    case 'doc':
                        layout = new DocLayout();
                        break;
                    default:
                        layout = new SingleLayout({type: id});
                        break;

                }
                $('.container').html(layout.el);
                layout.render();
            }


        };
    });
