/**
 * Created by BonDoQ on 1/17/15.
 */

define(["backbone", "highcharts"], function (Backbone) {
    return Backbone.Layout.extend({
        template: 'chart',
        ui: {
            title: '.highcharts-title',
            graph: '#graph',
            form: '.input-form',
            edit: '#edit',
            titleInput: '#title'

        },
        events: {
            'dblclick .highcharts-title': 'changeTitle',
            'click #edit': 'save'
        },
        changeTitle: function () {
            this.$(this.ui.title).hide();
            this.$(this.ui.form).show();
            this.$(this.ui.titleInput).focus();
        },
        save: function () {
            var val = this.$(this.ui.titleInput).val();
            this.model.set('title', {text: val});
            this.$(this.ui.form).hide();
            this.$(this.ui.titleInput).val('');
            this.applyChart();
        },

        afterRender: function () {
            var that = this;
            this.model.fetch({
                success: function () {
                    that.applyChart();
                }
            });
        },
        serialize: function () {
            return this.model.toJSON();
        },
        applyChart: function () {
            this.$(this.ui.graph).highcharts(this.model.toJSON());
        }
    });
});
